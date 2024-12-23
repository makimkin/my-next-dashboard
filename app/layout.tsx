import "@/app/ui/global.scss";
// #endregion --------------------------------------------------------------------------------------
// #region ROOT LAYOUT
// -----------------------------------------------------------------------------------------------*/
type TRootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<TRootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);
RootLayout.displayName = "RootLayout";
// #endregion --------------------------------------------------------------------------------------
export default RootLayout;
