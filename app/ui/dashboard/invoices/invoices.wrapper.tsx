import { fetchLatestInvoices } from "@/app/lib/data";
import { Invoices } from "./invoices.component";
// #endregion --------------------------------------------------------------------------------------
// #region INVOICES WRAPPER COMPONENT
// -----------------------------------------------------------------------------------------------*/
const InvoicesWrapper: React.FC = async () => {
  const invoices = await fetchLatestInvoices();

  return <Invoices invoices={invoices} />;
};
InvoicesWrapper.displayName = "InvoicesWrapperComponent";
// #endregion --------------------------------------------------------------------------------------
export { InvoicesWrapper };
