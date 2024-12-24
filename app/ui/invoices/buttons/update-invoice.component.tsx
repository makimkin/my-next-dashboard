import Link from "next/link";

import { PencilIcon } from "@heroicons/react/24/outline";
// #endregion --------------------------------------------------------------------------------------
// #region UPDATE INVOICE COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TUpdateInvoiceProps = {};

const UpdateInvoice: React.FC<TUpdateInvoiceProps> = () => (
  <Link
    href="/dashboard/invoices"
    className="rounded-md border p-2 hover:bg-gray-100"
  >
    <PencilIcon className="w-5" />
  </Link>
);
UpdateInvoice.displayName = "UpdateInvoiceComponent";
// #endregion --------------------------------------------------------------------------------------
export { UpdateInvoice };
