import { fetchRevenue } from "@/app/lib/data";
import { RevenueChart } from "./revenue-chart.component";
// #endregion --------------------------------------------------------------------------------------
// #region REVENUE CHART WRAPPER
// -----------------------------------------------------------------------------------------------*/
type TRevenueChartWrapperProps = {};

const RevenueChartWrapper: React.FC<TRevenueChartWrapperProps> = async () => {
  const revenue = await fetchRevenue();

  return <RevenueChart revenue={revenue} />;
};
RevenueChartWrapper.displayName = "RevenueChartWrapper";
// #endregion --------------------------------------------------------------------------------------
export { RevenueChartWrapper };
