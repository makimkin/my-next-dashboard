import { CardsSkeletonItem } from "./cards-skeleton-item";
// #endregion --------------------------------------------------------------------------------------
// #region CARDS SKELETON COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TCardsSkeletonProps = {};

const CardsSkeleton: React.FC<TCardsSkeletonProps> = () => (
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
