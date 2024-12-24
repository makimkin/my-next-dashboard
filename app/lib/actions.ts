"use server";

import { z } from "zod";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { signIn, signOut } from "@/auth";

import { sql } from "@vercel/postgres";
// #endregion --------------------------------------------------------------------------------------
// #region ACTIONS
// #region CREATE INVOICE
// -----------------------------------------------------------------------------------------------*/
const createInvoiceFormSchema = z.object({
  customerId: z
    .string({
      invalid_type_error: "Customer ID must be a string",
    })
    .min(1),
  amount: z.coerce
    .number()
    .positive({ message: "Amount must be a positive number" }),
  status: z.enum(["paid", "pending"], {
    invalid_type_error: "Status must be either 'paid' or 'pending'",
  }),
});

export type TCreateInvoiceState = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export const createInvoice = async (
  _: TCreateInvoiceState,
  formData: FormData
) => {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };

  const validatedFields = createInvoiceFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { customerId, amount, status } = validatedFields.data;

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
    revalidatePath("/dashboard/invoices");
  } catch (error) {
    return {
      message: `Database Error: Failed to Create Invoice: ${error} `,
    };
  }

  redirect("/dashboard/invoices");
};

// #endregion --------------------------------------------------------------------------------------
// #region EDIT INVOICE
// -----------------------------------------------------------------------------------------------*/
const editInvoiceFormSchema = z.object({
  customerId: z.string().min(1),
  amount: z.coerce.number().positive(),
  status: z.enum(["paid", "pending"]),
});

export const editInvoice = async (id: string, formData: FormData) => {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };

  const { customerId, amount, status } =
    editInvoiceFormSchema.parse(rawFormData);

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
    revalidatePath("/dashboard/invoices");
  } catch {}

  redirect("/dashboard/invoices");
};

// #endregion --------------------------------------------------------------------------------------
// #region DELETE INVOICE
// -----------------------------------------------------------------------------------------------*/
export const deleteInvoice = async (id: string) => {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    return revalidatePath("/dashboard/invoices");
  } catch {}
};

// #endregion --------------------------------------------------------------------------------------
// #region AUTH
// -----------------------------------------------------------------------------------------------*/
export const performSignIn = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};

// #endregion --------------------------------------------------------------------------------------
// #region SIGN OUT
// -----------------------------------------------------------------------------------------------*/
export const performSignOut = async () => {
  await signOut();
};

// #endregion --------------------------------------------------------------------------------------
