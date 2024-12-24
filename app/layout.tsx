import "@/app/ui/global.scss";

import clsx from "clsx";

import { inter } from "./ui/fonts";
// #endregion --------------------------------------------------------------------------------------
// #region ROOT LAYOUT
// -----------------------------------------------------------------------------------------------*/
type TRootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<TRootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={clsx(inter.className, "antialiased")}>{children}</body>
  </html>
);
RootLayout.displayName = "RootLayout";
// #endregion --------------------------------------------------------------------------------------
export default RootLayout;
