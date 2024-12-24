import { SideNav } from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true;
// #endregion --------------------------------------------------------------------------------------
// #region LAYOUT COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TLayoutProps = { children: React.ReactNode };

const Layout: React.FC<TLayoutProps> = ({ children }) => (
  <div className={"flex h-screen flex-col md:flex-row md:overflow-hidden"}>
    <div className={"w-full flex-none md:w-64"}>
      <SideNav />
    </div>
    <div className={"flex-grow p-6 md:overflow-y-auto md:p-12"}>{children}</div>
  </div>
);
Layout.displayName = "LayoutComponent";
// #endregion --------------------------------------------------------------------------------------
export default Layout;
