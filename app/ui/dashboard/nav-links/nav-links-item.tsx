"use client";

import { TLink } from "@/app/lib/definitions";
import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";

// #endregion --------------------------------------------------------------------------------------
// #region NAV LINKS ITEM COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TNavLinksItemProps = {
  link: TLink;
};

const NavLinksItem: React.FC<TNavLinksItemProps> = ({ link }) => {
  const pathname = usePathname();

  const LinkIcon = link.icon;

  return (
    <Link
      key={link.name}
      href={link.href}
      className={clsx(
        "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
        {
          "bg-sky-100 text-blue-600": pathname === link.href,
        }
      )}
    >
      <LinkIcon className="w-6" />
      <p className="hidden md:block">{link.name}</p>
    </Link>
  );
};
NavLinksItem.displayName = "NavLinksItemComponent";
// #endregion --------------------------------------------------------------------------------------
export { NavLinksItem };
