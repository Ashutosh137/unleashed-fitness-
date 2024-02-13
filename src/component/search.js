import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../api/context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Search = (props) => {
  const { toggleload } = useContext(MyContext);
  const n = props.n;
  const [pre, setpre] = useState(0);
  const [next, setnext] = useState(n);
  const [skeleton, setskeleton] = useState(true);
  const data = props.exercise;
  const [search, setsearch] = useState([]);
  const slider =
    search.length % n === 0 ? search.length / n : search.length / n + 1;
  const myList = Array.from({ length: slider }, (_, index) => index);

  useEffect(() => {
    toggleload();
    setsearch(data);
    setpre(0);
    setnext(n);
    toggleload();
  }, [data, n]);

  return (
    <>
      {search[0] ? (
        <div className=" rounded bg-light py-4 text-responsive text-capitalize">
          <div className="text-center m-auto py-3">
            <h2 className="h5">
              showing results :{" "}
              <span className="fw-semmibold"> {search.length}</span>
            </h2>
          </div>
          <div className="d-flex mb-5 flex-wrap justify-content-around rounded ">
            {search.slice(pre, next).map((item, index) => {
              return (
                <Link
                  key={index}
                  className="text-dark bg-white curser-pointer btn p-3 shadow border-bottom border-3 border-dark text-decoration-none"
                  to={`/exercises/${item.id}`}
                >
                  {skeleton && <Skeleton height={400} width={300} />}
                  <img
                    style={{ display: skeleton ? "none" : "block" }}
                    onLoadCapture={() => {
                      setskeleton(false);
                    }}
                    src={item.gifUrl}
                    className="w-100 rounded"
                    alt="gif"
                  />
                  <div className="d-flex mt-4 mb-2 flex-wrap">
                    <button className="m-2 btn p-1  text-capitalize m-auto rounded border px-3 border-2 border-dark bg-light">
                      {item.bodyPart}
                    </button>
                    <button className="btn m-auto my-2  text-capitalize rounded border border-2 px-3 p-1 border-dark bg-light">
                      {item.target}
                    </button>
                  </div>
                  <button className="my-3 text-capitalize text-center bg-custum rounded p-2 m-auto h5">
                    {item.name}
                  </button>
                </Link>
              );
            })}
          </div>
          <div className="w-100 m-auto">
            <ul className="pagination width mb-3 overflow-hidden border-2 border-danger border rounded justify-content-center">
              <li className="page-item m-2">
                {pre <= 0 ? (
                  <button className="page-link disabled">
                    <i className="bi bi-arrow-left"></i>
                  </button>
                ) : (
                  <button
                    className="page-link"
                    onClick={() => {
                      setpre(pre - n);
                      setnext(next - n);
                    }}
                  >
                    <i className="bi bi-arrow-left"></i>
                  </button>
                )}
              </li>
              <li className="m-2 m-auto overflow-scroll d-flex">
                {myList.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="text-primary mx-1 p-2 h5 bg-white curser-pointer border-0 rounded px-3"
                      onClick={() => {
                        setpre(item * n);
                        setnext((item + 1) * n);
                      }}
                    >
                      {item + 1}
                    </button>
                  );
                })}
              </li>
              <li className="page-item m-2">
                {next >= search.length ? (
                  <button className="page-link disabled">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                ) : (
                  <button
                    className="page-link "
                    onClick={() => {
                      setpre(pre + n);
                      setnext(next + n);
                    }}
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
