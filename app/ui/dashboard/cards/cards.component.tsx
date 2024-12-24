import { CardsItem } from "./cards-item.component";
// #endregion --------------------------------------------------------------------------------------
// #region CARDS COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TCardsProps = {
  numberOfInvoices: number;
  totalPaidInvoices: string;
  numberOfCustomers: number;
  totalPendingInvoices: string;
};

const Cards: React.FC<TCardsProps> = ({
  numberOfInvoices,
  totalPaidInvoices,
  numberOfCustomers,
  totalPendingInvoices,
}) => (
  <>
    <CardsItem title="Collected" value={totalPaidInvoices} type="collected" />
    <CardsItem title="Pending" value={totalPendingInvoices} type="pending" />
    <CardsItem
      title="Total Invoices"
      value={numberOfInvoices}
      type="invoices"
    />
    <CardsItem
      title="Total Customers"
      value={numberOfCustomers}
      type="customers"
    />
  </>
);
Cards.displayName = "CardsComponent";
// #endregion --------------------------------------------------------------------------------------
export { Cards };
