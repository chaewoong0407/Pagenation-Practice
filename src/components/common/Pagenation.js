import React from "react";
import _ from "lodash";

const Pagenation = (props) => {
  const { itemsCount, pageSize } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page} style={{ cursor: "pointer" }}>
            <a>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagenation;
