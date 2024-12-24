import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";

import { Breadcrumbs } from "@/app/ui/invoices/breadcrumbs";
import { EditForm } from "@/app/ui/invoices/edit-form";
// #endregion --------------------------------------------------------------------------------------
// #region PAGE COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TPageProps = {
  params: Promise<{ id: string }>;
};

const Page: React.FC<TPageProps> = async ({ params }) => {
  // #endregion ------------------------------------------------------------------------------------
  // #region PARAMS
  // ---------------------------------------------------------------------------------------------*/
  const { id } = await params;

  // #endregion ------------------------------------------------------------------------------------
  // #region FETCH
  // ---------------------------------------------------------------------------------------------*/
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm invoice={invoice} customers={customers} />
    </main>
  );
};
Page.displayName = "PageComponent";
// #endregion --------------------------------------------------------------------------------------
export default Page;
