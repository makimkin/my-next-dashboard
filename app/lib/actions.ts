"use server";

// #endregion --------------------------------------------------------------------------------------
// #region ACTIONS
// -----------------------------------------------------------------------------------------------*/

// #endregion --------------------------------------------------------------------------------------
// #region CREATE INVOICE
// -----------------------------------------------------------------------------------------------*/
export const createInvoice = async (formData: FormData) => {
  console.log("createInvoice");

  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };
  // Test it out:
  console.log(rawFormData);
  console.log(Object.fromEntries(formData.entries()));
};

// #endregion --------------------------------------------------------------------------------------
