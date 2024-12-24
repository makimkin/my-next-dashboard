import { fetchRevenue } from "@/app/lib/data";
import { RevenueChart } from "./revenue-chart.component";
// #endregion --------------------------------------------------------------------------------------
// #region REVENUE CHART WRAPPER
// -----------------------------------------------------------------------------------------------*/
const RevenueChartWrapper: React.FC = async () => {
  const revenue = await fetchRevenue();

  return <RevenueChart revenue={revenue} />;
};
RevenueChartWrapper.displayName = "RevenueChartWrapper";
// #endregion --------------------------------------------------------------------------------------
export { RevenueChartWrapper };
