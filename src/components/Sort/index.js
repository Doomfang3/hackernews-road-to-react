import React from "react";
import classNames from 'classnames';

import Button from "../Button";

const Sort = ({ sortKey, activeSortKey, onSort, children }) => {
  const sortClass = classNames(
    'button-inline',
    { 'button-active': sortKey === activeSortKey }
  );

  return (
    <Button onClick={() => onSort(sortKey)} className={sortClass}>
      {`${children} `}
      <i className="fas fa-sort"></i>
    </Button>
  );
};

export default Sort;
