import React from "react";
import { tokeonmicsData } from "./tokenomicsData";
import { UserData } from "./Data";
import PieChart from "./PieChart";

function Table({ list, header, footer }) {
  const [userData, setUserData] = React.useState({
    labels: { default: false },
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.sizze),
        backgroundColor: UserData.map((data) => data.color),
      },
    ],
    options: {
      tooltips: false,
    },
  });
  const [activeItem, setActiveItem] = React.useState(tokeonmicsData);
  console.log(activeItem);
  function handleClick(obj) {
    activeItem.map((item) => {
      return item.active === true && item.pool !== obj.pool
        ? setActiveItem((item.active = false))
        : "";
    });
    setActiveItem([...activeItem, (obj.active = true)]);
  }
  //   setActiveItem([...activeItem, (obj.active = true)]);
  return (
    <div className="tableContainer">
      {tokeonmicsData.length > 0 && (
        <table cellSpacing="0" className="table">
          <thead className="tableHeader">
            <tr>
              {header.map((item, index) => {
                return (
                  <th key={index} className="headerItems">
                    {item.toUpperCase()}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {Object.values(tokeonmicsData).map((obj, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => handleClick(obj)}
                  className={
                    obj.active === true ? "contentTr active" : "contentTr"
                  }
                >
                  {Object.values(obj).map((value, index2) => {
                    return <td key={index2}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              {footer.map((footerItem, index) => {
                return (
                  <th className="tableFooter" key={index}>
                    {footerItem}
                  </th>
                );
              })}
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default Table;
