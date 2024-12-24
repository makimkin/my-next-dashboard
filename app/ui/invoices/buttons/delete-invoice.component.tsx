import { TrashIcon } from "@heroicons/react/24/outline";
// #endregion --------------------------------------------------------------------------------------
// #region DELETE INVOICE COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TDeleteInvoiceProps = {};

const DeleteInvoice: React.FC<TDeleteInvoiceProps> = () => (
  <button className="rounded-md border p-2 hover:bg-gray-100">
    <span className="sr-only">Delete</span>
    <TrashIcon className="w-5" />
  </button>
);
DeleteInvoice.displayName = "DeleteInvoiceComponent";
// #endregion --------------------------------------------------------------------------------------
export { DeleteInvoice };
