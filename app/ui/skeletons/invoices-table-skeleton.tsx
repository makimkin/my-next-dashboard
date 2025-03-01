import { InvoicesTableMobileSkeleton } from "./invoices-table-mobile-skeleton";
import { InvoicesTableRowSkeleton } from "./invoices-table-row-skeleton";
// #endregion --------------------------------------------------------------------------------------
// #region INVOICES TABLE SKELETON COMPONENT
// -----------------------------------------------------------------------------------------------*/
const InvoicesTableSkeleton: React.FC = () => (
  <div className="mt-6 flow-root">
    <div className="inline-block min-w-full align-middle">
      <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        <div className="md:hidden">
          <InvoicesTableMobileSkeleton />
          <InvoicesTableMobileSkeleton />
          <InvoicesTableMobileSkeleton />
          <InvoicesTableMobileSkeleton />
          <InvoicesTableMobileSkeleton />
          <InvoicesTableMobileSkeleton />
        </div>
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Customer
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Email
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Amount
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Date
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Status
              </th>
              <th scope="col" className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <InvoicesTableRowSkeleton />
            <InvoicesTableRowSkeleton />
            <InvoicesTableRowSkeleton />
            <InvoicesTableRowSkeleton />
            <InvoicesTableRowSkeleton />
            <InvoicesTableRowSkeleton />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
InvoicesTableSkeleton.displayName = "InvoicesTableSkeletonComponent";
// #endregion --------------------------------------------------------------------------------------
export { InvoicesTableSkeleton };
