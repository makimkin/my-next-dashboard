"use server";

import { z } from "zod";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { sql } from "@vercel/postgres";

// #endregion --------------------------------------------------------------------------------------
// #region ACTIONS
// -----------------------------------------------------------------------------------------------*/

// #endregion --------------------------------------------------------------------------------------
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

  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
};

// #endregion --------------------------------------------------------------------------------------
