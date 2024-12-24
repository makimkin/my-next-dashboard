import { fetchFilteredInvoices } from "@/app/lib/data";
import { Table } from "./table.component";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE WRAPPER
// -----------------------------------------------------------------------------------------------*/
type TTableWrapperProps = {
  query: string;
  currentPage: number;
};

const TableWrapper: React.FC<TTableWrapperProps> = async ({
  query,
  currentPage,
}) => {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return <Table invoices={invoices} />;
};
TableWrapper.displayName = "TableWrapper";
// #endregion --------------------------------------------------------------------------------------
export { TableWrapper };
