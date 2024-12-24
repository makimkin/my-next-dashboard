import { DashboardSkeleton } from "@/app/ui/skeletons/dashboard-skeleton";
// #endregion --------------------------------------------------------------------------------------
// #region LOADING COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TLoadingProps = {};

const Loading: React.FC<TLoadingProps> = () => <DashboardSkeleton />;
Loading.displayName = "LoadingComponent";
// #endregion --------------------------------------------------------------------------------------
export default Loading;
