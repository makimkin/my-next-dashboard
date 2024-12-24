"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// #endregion --------------------------------------------------------------------------------------
// #region SEARCH COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TSearchProps = { placeholder: string };

const Search: React.FC<TSearchProps> = ({ placeholder }) => {
  // #endregion ------------------------------------------------------------------------------------
  // #region HOOKS
  // ---------------------------------------------------------------------------------------------*/
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // #endregion ------------------------------------------------------------------------------------
  // #region HANDLERS
  // ---------------------------------------------------------------------------------------------*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    const term = e.target.value;

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        onChange={handleChange}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
};
Search.displayName = "SearchComponent";
// #endregion --------------------------------------------------------------------------------------
export { Search };
