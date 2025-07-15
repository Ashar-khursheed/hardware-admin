// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// const Pagination = ({ current_page, total, per_page, setPage }) => {

//   let pages = [];
//   let totalPages = Math.ceil(total / per_page);
//   let startpage = totalPages === 4 ? 1 : current_page === 1 || current_page - 2 === 0 ? 1 : current_page === totalPages ? current_page - 2 : current_page - 1;
//   let endPage = totalPages === 4 ? 4 : current_page === 1 ? current_page + 2 : current_page + 1 <= totalPages ? current_page + 1 : current_page;
//   for (let i = startpage; i <= endPage; i++) {
//     i <= totalPages && pages.push(i);
//   }
//   return (
//     <div className="pagination-box">
//       <nav className="mx-auto custom-pagination">
//         {total / per_page > 1 ? (
//           <ul className="pagination pagination-primary justify-content-center">
//             <li className={`page-item ${current_page === 1 ? "disabled" : ""}`}>
//               <a
//                 className="page-link"
//                 onClick={() => {
//                   setPage(current_page - 1);
//                 }}>
//                 <RiArrowLeftSLine />
//               </a>
//             </li>
//             {totalPages - 2 <= current_page && totalPages > 4 && (
//               <>
//                 <li className="page-item ">
//                   <a className="page-link" onClick={() => setPage(1)}>
//                     1
//                   </a>
//                 </li>
//                 <li className="page-item ">
//                   <a className="page-link ">...</a>
//                 </li>
//               </>
//             )}
//             {pages.map((i) => (
//               <li className="page-item " key={i}>
//                 <a className={`page-link ${current_page === i ? "active" : ""}`} onClick={() => setPage(i)}>
//                   {i}
//                 </a>
//               </li>
//             ))}
//             {current_page + 1 < totalPages && totalPages > 4 && (
//               <>
//                 {current_page + 2 < totalPages && (
//                   <li className="page-item ">
//                     <a className="page-link ">...</a>
//                   </li>
//                 )}
//                 <li className="page-item ">
//                   <a className="page-link" onClick={() => setPage(totalPages)}>
//                     {totalPages}
//                   </a>
//                 </li>
//               </>
//             )}

//             <li className={`page-item ${current_page === totalPages ? "disabled" : ""}`}>
//               <a
//                 className="page-link"
//                 onClick={() => {
//                   setPage(current_page + 1);
//                 }}>
//                 <RiArrowRightSLine />
//               </a>
//             </li>
//           </ul>
//         )
//           :
//           <ul className="pagination pagination-primary">
//             <li className={`page-item disabled`}>
//               <a
//                 className="page-link">
//                 <RiArrowLeftSLine />
//               </a>
//             </li>
//             <li className="page-item ">
//               <a className={`page-link active`} >
//                 1
//               </a>
//             </li>
//             <li className={`page-item disabled`}>
//               <a
//                 className="page-link">
//                 <RiArrowRightSLine />
//               </a>
//             </li>
//           </ul>
//         }
//       </nav>
//     </div>
//   );
// };

// export default Pagination;

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Pagination = ({ current_page, total, per_page, setPage }) => {
  const totalPages = Math.ceil(total / per_page);
  const pages = [];

  const maxVisible = 5;
  let startPage = Math.max(1, current_page - Math.floor(maxVisible / 2));
  let endPage = startPage + maxVisible - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-box mt-4">
      <nav className="mx-auto custom-pagination">
        <ul className="pagination pagination-primary justify-content-center">
          <li className={`page-item ${current_page === 1 ? "disabled" : ""}`}>
            <a className="page-link" onClick={() => current_page > 1 && setPage(current_page - 1)}>
              <RiArrowLeftSLine />
            </a>
          </li>

          {startPage > 1 && (
            <>
              <li className="page-item">
                <a className="page-link" onClick={() => setPage(1)}>1</a>
              </li>
              {startPage > 2 && (
                <li className="page-item">
                  <span className="page-link">...</span>
                </li>
              )}
            </>
          )}

          {pages.map((i) => (
            <li key={i} className="page-item">
              <a
                className={`page-link ${current_page === i ? "active" : ""}`}
                onClick={() => setPage(i)}
              >
                {i}
              </a>
            </li>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <li className="page-item">
                  <span className="page-link">...</span>
                </li>
              )}
              <li className="page-item">
                <a className="page-link" onClick={() => setPage(totalPages)}>
                  {totalPages}
                </a>
              </li>
            </>
          )}

          <li className={`page-item ${current_page === totalPages ? "disabled" : ""}`}>
            <a className="page-link" onClick={() => current_page < totalPages && setPage(current_page + 1)}>
              <RiArrowRightSLine />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
