import { CardsSkeletonItem } from "./cards-skeleton-item";
import { RevenueChartSkeleton } from "./revenue-chart-skeleton";
import { LatestInvoicesSkeleton } from "./latest-invoices-skeleton";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

// #endregion --------------------------------------------------------------------------------------
// #region DASHBOARD SKELETON COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TDashboardSkeletonProps = {};

const DashboardSkeleton: React.FC<TDashboardSkeletonProps> = () => (
  <>
    <div
      className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
    />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <CardsSkeletonItem />
      <CardsSkeletonItem />
      <CardsSkeletonItem />
      <CardsSkeletonItem />
    </div>
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <RevenueChartSkeleton />
      <LatestInvoicesSkeleton />
    </div>
  </>
);
DashboardSkeleton.displayName = "DashboardSkeletonComponent";
// #endregion --------------------------------------------------------------------------------------
export { DashboardSkeleton };
