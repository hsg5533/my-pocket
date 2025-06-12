import React, { useContext } from "react";
import { FilterContext } from "../Pocket/PocketContainer";
import "./Filter.css";

const year = new Date().getFullYear();

const Filter = () => {
  const { onChangeFilter, filterBaseYear } = useContext(FilterContext);

  const handleChangeFilter = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <select
      className="filter fw-light"
      id="filter"
      name="filter"
      value={filterBaseYear}
      onChange={handleChangeFilter}
      title="년도"
      aria-label="내역을 보고 싶은 년도를 선택하세요."
    >
      <option value={year}>{year}</option>
      <option value={year - 1}>{year - 1}</option>
      <option value={year - 2}>{year - 2}</option>
    </select>
  );
};

export default Filter;
