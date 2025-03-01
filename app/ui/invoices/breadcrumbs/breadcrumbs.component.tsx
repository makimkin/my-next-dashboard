import Link from "next/link";

import clsx from "clsx";

import { lusitana } from "@/app/ui/fonts";
// #endregion --------------------------------------------------------------------------------------
// #region BREADCRUMBS COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TBreadcrumb = {
  label: string;
  href: string;
  active?: boolean;
};

type TBreadcrumbsProps = {
  breadcrumbs: TBreadcrumb[];
};

const Breadcrumbs: React.FC<TBreadcrumbsProps> = ({ breadcrumbs }) => (
  <nav aria-label="Breadcrumb" className="mb-6 block">
    <ol className={clsx(lusitana.className, "flex text-xl md:text-2xl")}>
      {breadcrumbs.map((breadcrumb, index) => (
        <li
          key={breadcrumb.href}
          aria-current={breadcrumb.active}
          className={clsx(
            breadcrumb.active ? "text-gray-900" : "text-gray-500"
          )}
        >
          <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
          {index < breadcrumbs.length - 1 ? (
            <span className="mx-3 inline-block">/</span>
          ) : null}
        </li>
      ))}
    </ol>
  </nav>
);
Breadcrumbs.displayName = "BreadcrumbsComponent";
// #endregion --------------------------------------------------------------------------------------
export { Breadcrumbs };
