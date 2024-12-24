import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// #endregion --------------------------------------------------------------------------------------
// #region DATA
// -----------------------------------------------------------------------------------------------*/
type TLink = {
  id: number;
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

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
// #region NAV LINKS ITEM COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TNavLinksItemProps = {
  link: TLink;
};

const NavLinksItem: React.FC<TNavLinksItemProps> = ({ link }) => {
  const LinkIcon = link.icon;

  return (
    <Link
      key={link.name}
      href={link.href}
      className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <LinkIcon className="w-6" />
      <p className="hidden md:block">{link.name}</p>
    </Link>
  );
};
NavLinksItem.displayName = "NavLinksItemComponent";
// #endregion --------------------------------------------------------------------------------------
export { NavLinks };
