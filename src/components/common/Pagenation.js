import React from "react";
import _ from "lodash";

const Pagenation = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page} style={{ cursor: "pointer" }}>
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>{" "}
            {/* 페이지 번호 클릭 이벤트 처리기 지정 */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagenation;
