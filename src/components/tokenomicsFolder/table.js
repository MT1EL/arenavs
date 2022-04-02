import React from "react";

function Table({
  data,
  headerNames,
  footerNames,
  active,
  setActive,
  setBackgroundColor,
  tabledata,
}) {
  function handleClick(obj) {
    tabledata.map((item) => {
      return item.symbol === obj.symbol ? setEverything(item, obj) : "";
    });
  }
  function setEverything(item, obj) {
    setActive(item);
    setBackgroundColor(item.color);
  }
  console.log(active);
  return (
    <div className="fullTable">
      {data.length > 0 && (
        <table cellSpacing="0" className="Table">
          <thead className="tableHead">
            <tr className="tableHeadRow">
              {headerNames.map((headerItem, index) => {
                return (
                  <th key={index} classNametable="tableHeaderElements">
                    {headerItem.toUpperCase()}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((obj, index) => {
              return (
                <tr
                  key={index}
                  className={
                    obj.symbol === active.symbol ? "bodyTr active" : "bodyTr"
                  }
                  onClick={() => handleClick(obj)}
                >
                  {Object.values(obj).map((value, index2) => {
                    return <td key={index2}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="tableFoot">
              {footerNames.map((footerItem, index) => {
                return <th key={index}>{footerItem}</th>;
              })}
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default Table;
