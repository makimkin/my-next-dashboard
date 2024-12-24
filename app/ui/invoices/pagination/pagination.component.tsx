"use client";
// #endregion --------------------------------------------------------------------------------------
// #region PAGINATION COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TPaginationProps = {
  totalPages: number;
};

const Pagination: React.FC<TPaginationProps> = ({ totalPages }) => (
  <>
    {/*  NOTE: Uncomment this code in Chapter 11 */}

    {/* <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div> */}
  </>
);
Pagination.displayName = "PaginationComponent";
// #endregion --------------------------------------------------------------------------------------
export { Pagination };
