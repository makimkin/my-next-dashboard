import { fetchCustomers } from "@/app/lib/data";
import { Breadcrumbs } from "@/app/ui/invoices/breadcrumbs";
import { CreateForm } from "@/app/ui/invoices/create-form";
// #endregion --------------------------------------------------------------------------------------
// #region PAGE COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TPageProps = {};

const Page: React.FC<TPageProps> = async () => {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <CreateForm customers={customers} />
    </main>
  );
};
Page.displayName = "PageComponent";
// #endregion --------------------------------------------------------------------------------------
export default Page;
