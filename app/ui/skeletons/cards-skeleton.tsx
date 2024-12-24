import { CardsSkeletonItem } from "./cards-skeleton-item";
// #endregion --------------------------------------------------------------------------------------
// #region CARDS SKELETON COMPONENT
// -----------------------------------------------------------------------------------------------*/
const CardsSkeleton: React.FC = () => (
  <>
    <CardsSkeletonItem />
    <CardsSkeletonItem />
    <CardsSkeletonItem />
    <CardsSkeletonItem />
  </>
);
CardsSkeleton.displayName = "CardsSkeletonComponent";
// #endregion --------------------------------------------------------------------------------------
export { CardsSkeleton };
