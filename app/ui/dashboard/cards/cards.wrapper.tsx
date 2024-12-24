import { Cards } from "./cards.component";

import { fetchCardData } from "@/app/lib/data";
// #endregion --------------------------------------------------------------------------------------
// #region CARDS WRAPPER
// -----------------------------------------------------------------------------------------------*/
const CardsWrapper: React.FC = async () => {
  const {
    numberOfInvoices,
    totalPaidInvoices,
    numberOfCustomers,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <Cards
      numberOfInvoices={numberOfInvoices}
      totalPaidInvoices={totalPaidInvoices}
      numberOfCustomers={numberOfCustomers}
      totalPendingInvoices={totalPendingInvoices}
    />
  );
};
CardsWrapper.displayName = "CardsWrapper";
// #endregion --------------------------------------------------------------------------------------
export { CardsWrapper };
