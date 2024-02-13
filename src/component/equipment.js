import React, { useState, useContext } from "react";
import Fetchdata1 from "../api/fetchdata";
import { Search } from "./search";
import MyContext from "../api/context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Equipment = () => {
  const {
    data: { equipmentList },
    toggleload,
  } = useContext(MyContext);

  const [pre1, setpre1] = useState(0);
  const [next1, setnext1] = useState(4);
  const [search, setsearch] = useState([]);
  const slider =
    equipmentList.length % 4 === 0
      ? equipmentList.length / 4
      : equipmentList.length / 4 + 1;
  const myList = Array.from({ length: slider }, (_, index) => index);
  async function fetch(item) {
    toggleload();
    const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${item}`;
    const data1 = await Fetchdata1(url).catch((err) => {
      console.log(err);
    });
    setsearch(data1);
    toggleload();
  }

  return (
    <div className="m-auto bg-light rounded">
      <div className="d-flex justify-content-center flex-wrap p-3">
        {equipmentList.slice(pre1, next1).map((item, index) => {
          return (
            <div key={index} className="w-25 my-4 card border-2 p-4">
              <img
                className="img-fluid mb-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwICRzybiwjOclTsg2xuiBTYr2q6dHdKEKHA&usqp=CAU"
                alt=""
              />
              <button
                onClick={() => {
                  fetch(item);
                }}
                className="text-center w-100 m-auto text-capitalize text-responsive p-1 border-1 border-danger border"
              >
                {item || <Skeleton />}
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-75 m-auto">
        <ul className="pagination width mb-3 border-2 border-danger border rounded justify-content-center">
          <li className="page-item m-2">
            {pre1 <= 0 ? (
              <button className="page-link disabled">
                <i className="bi bi-arrow-left"></i>
              </button>
            ) : (
              <button
                className="page-link"
                onClick={() => {
                  setpre1(pre1 - 4);
                  setnext1(next1 - 4);
                }}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
            )}
          </li>
          <li className="m-auto overflow-scroll d-flex">
            {myList.map((item, index) => {
              return (
                <button
                  key={index}
                  className="text-primary mx-1 p-2 h5 bg-white curser-pointer border-0 rounded px-3"
                  onClick={() => {
                    setpre1(item * 4);
                    setnext1((item + 1) * 4);
                  }}
                >
                  {item + 1}
                </button>
              );
            })}
          </li>
          <li className="page-item m-2">
            {next1 >= equipmentList.length ? (
              <button className="page-link disabled">
                <i className="bi bi-arrow-right"></i>
              </button>
            ) : (
              <button
                className="page-link "
                onClick={() => {
                  setpre1(pre1 + 4);
                  setnext1(next1 + 4);
                }}
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            )}
          </li>
        </ul>
      </div>
      <div className=" py-1">
        <Search exercise={search} n={2} />
      </div>
    </div>
  );
};

export default Equipment;
