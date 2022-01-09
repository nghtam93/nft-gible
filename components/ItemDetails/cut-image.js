import ItemDetailsDescription from "./ItemDetailsDescription";
import ItemDetailsHistory from "./ItemDetailsHistory";
import ItemDetailsUser from "./ItemDetailsUser";
import React, { useState } from "react";

const CutImage = () => {
  const data = [
    {
      row: [
        {
          id: 1,
          child: "Part 1",
        },
        { id: 2, child: "Part 2" },
        { id: 3, child: "Part 5" },
      ],
    },
    {
      row: [
        { id: 4, child: "Part 3" },
        { id: 5, child: "Part 4" },
        { id: 6, child: "Part 6" },
      ],
    },
  ];

  const handleClickItem = (index) => {
    alert("click me" + index);
  };

  const [current, setCurrent] = useState(null);

  return (
    <div className="item-details-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="item-details-left-side pr-20">
              <div className="item-details-img">
                {/* <img src={item.src.src} alt="Images" /> */}
                <table className="background-table">
                  {data.map((item, index) => (
                    <tr key={index.toString()}>
                      {item.row.map((child, idx) => (
                        <th
                          onClick={() => setCurrent(child.id)}
                          className={child.id == current ? "border" : ""}
                        >
                          {child.child}
                        </th>
                      ))}
                    </tr>
                  ))}
                </table>
              </div>

              <ItemDetailsHistory />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="item-details-dsce">
              <ItemDetailsDescription />

              <ItemDetailsUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutImage;
