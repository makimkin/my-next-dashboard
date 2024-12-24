"use server";

import { z } from "zod";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { sql } from "@vercel/postgres";

// #endregion --------------------------------------------------------------------------------------
// #region ACTIONS
// #region CREATE INVOICE
// -----------------------------------------------------------------------------------------------*/
const createInvoiceFormSchema = z.object({
  customerId: z.string().min(1),
  amount: z.coerce.number().positive(),
  status: z.enum(["paid", "pending"]),
});

export const createInvoice = async (formData: FormData) => {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };

  const { customerId, amount, status } =
    createInvoiceFormSchema.parse(rawFormData);

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
      message: "Database Error: Failed to Create Invoice.",
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
  } catch (error) {
    return {
      message: "Database Error: Failed to Edit Invoice.",
    };
  }

  redirect("/dashboard/invoices");
};

// #endregion --------------------------------------------------------------------------------------
// #region DELETE INVOICE
// -----------------------------------------------------------------------------------------------*/
export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice.",
    };
  }
}

// #endregion --------------------------------------------------------------------------------------
