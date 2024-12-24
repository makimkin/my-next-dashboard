import clsx from "clsx";

import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
// #endregion --------------------------------------------------------------------------------------
// #region INVOICE STATUS COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TInvoiceStatusProps = { status: string };

const InvoiceStatus: React.FC<TInvoiceStatusProps> = ({ status }) => (
  <span
    className={clsx("inline-flex items-center rounded-full px-2 py-1 text-xs", {
      "bg-gray-100 text-gray-500": status === "pending",
      "bg-green-500 text-white": status === "paid",
    })}
  >
    {status === "pending" ? (
      <>
        Pending
        <ClockIcon className="ml-1 w-4 text-gray-500" />
      </>
    ) : null}
    {status === "paid" ? (
      <>
        Paid
        <CheckIcon className="ml-1 w-4 text-white" />
      </>
    ) : null}
  </span>
);
InvoiceStatus.displayName = "InvoiceStatusComponent";
// #endregion --------------------------------------------------------------------------------------
export { InvoiceStatus };
