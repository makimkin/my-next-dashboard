import { Suspense } from "react";

import { RevenueChart } from "@/app/ui/dashboard/revenue-chart";
import { Invoices } from "@/app/ui/dashboard/invoices";
import { Card } from "@/app/ui/dashboard/cards";

import { InvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";

import { lusitana } from "@/app/ui/fonts";

import { fetchCardData } from "@/app/lib/data";
// #endregion --------------------------------------------------------------------------------------
// #region PAGE COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TPageProps = {};

const Page: React.FC<TPageProps> = async () => {
  const {
    numberOfInvoices,
    totalPaidInvoices,
    numberOfCustomers,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoicesSkeleton />}>
          <Invoices />
        </Suspense>
      </div>
    </main>
  );
};
Page.displayName = "PageComponent";
// #endregion --------------------------------------------------------------------------------------
export default Page;
