"use client";

import { useId } from "react";

import { UserCircleIcon } from "@heroicons/react/24/outline";

import { TCustomerField } from "@/app/lib/definitions";
// #endregion --------------------------------------------------------------------------------------
// #region CREATE FORM CUSTOMER COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TCreateFormCustomerProps = {
  customers: TCustomerField[];
  errors?: string[];
};

const CreateFormCustomer: React.FC<TCreateFormCustomerProps> = ({
  customers,
  errors,
}) => {
  const inputId = useId();
  const inputErrorId = useId();

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="mb-2 block text-sm font-medium">
        Choose customer
      </label>
      <div className="relative">
        <select
          id={inputId}
          name="customerId"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          aria-describedby={inputErrorId}
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
      <div id={inputErrorId} aria-live="polite" aria-atomic="true">
        {errors &&
          errors.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>
  );
};
CreateFormCustomer.displayName = "CreateFormCustomerComponent";
// #endregion --------------------------------------------------------------------------------------
export { CreateFormCustomer };
