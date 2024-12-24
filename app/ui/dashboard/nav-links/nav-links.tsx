"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { NavLinksItem } from "./nav-links-item";
import { TLink } from "@/app/lib/definitions";

// #endregion --------------------------------------------------------------------------------------
// #region DATA
// -----------------------------------------------------------------------------------------------*/
const links: TLink[] = [
  { id: 1, name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    id: 2,
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    id: 3,
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
];

// #endregion --------------------------------------------------------------------------------------
// #region NAV LINKS COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TNavLinksProps = {};

const NavLinks: React.FC<TNavLinksProps> = () => (
  <>
    {links.map((link) => (
      <NavLinksItem link={link} key={link.id} />
    ))}
  </>
);
NavLinks.displayName = "NavLinksComponent";
// #endregion --------------------------------------------------------------------------------------
export { NavLinks };
