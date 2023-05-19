import { useState } from "react";

export const usePagination = (items: any, itemCount: number) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage,] = useState(itemCount);

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const totalItems = items?.length;

   const paginate = (pageNum: number) => setCurrentPage(pageNum);

   let pageNums = [];
   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNums.push(i);
   }

   let currentItems = null;
   currentItems = items?.slice(indexOfFirstItem, indexOfLastItem);

   return { paginate, currentItems, pageNums };
};