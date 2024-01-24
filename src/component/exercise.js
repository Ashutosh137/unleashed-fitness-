import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Search } from "./search";
import MyContext from "../api/context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Exercise = () => {
  var { id } = useParams();
  const {
    data: { allexercise },
    favourite,
    setfavourite,
    toggleload,
  } = useContext(MyContext);
  const [exercise, setexercise] = useState([]);
  const [similar_target, setsimilar_target] = useState([]);
  const [similar_equipment, setsimilar_equipment] = useState([]);
  const [skeleton, setskeleton] = useState(true);

  useEffect(() => {
    const fetchExerciseData = async () => {
      toggleload();

      try {
        const exercisedata = allexercise.find((item) => item.id === id);
        const similar_equipment1 = allexercise.filter(
          (item) => item.equipment === exercisedata.equipment
        );
        const similar_target1 = allexercise.filter(
          (item) => item.target === exercisedata.target
        );
        setexercise(exercisedata);
        setsimilar_equipment(similar_equipment1);
        setsimilar_target(similar_target1);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        toggleload();
      }
    };

    fetchExerciseData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="mx-5  p-5 text-responsive rounded py-5 bg-white text-capitalize m-auto">
      <div className="text-center h3 py-3">
        <h3 className="h4 fw-bold border-bottom border-1  border-dark py-3">
          {exercise?.name}
        </h3>
      </div>

      <div className="d-flex felx justify-content-center">
        <div className=" felx-1 w-25 m-auto py-5 rounded">
          {skeleton && <Skeleton height={20} width={200} />}
          <img
            style={{ display: skeleton ? "none" : "block" }}
            onLoadCapture={() => {
              setskeleton(false);
            }}
            src={exercise?.gifUrl}
            className="rounded w-100 img-fluid"
            alt="gif"
          />
        </div>
        <div className="m-auto  w-sm-50 felx-1 px-4 text-res">
          <p className="h5">
            exercise keep you strong and increase muscles in{" "}
            <b>{exercise?.target || <Skeleton />}</b> ,this is one of the best
            exercise to target your <b>{exercise?.bodyPart || <Skeleton />}</b>{" "}
            using <b>{exercise?.equipment || <Skeleton />}</b> <br /> <hr />
            it will help you to improve your mood and energy{" "}
          </p>
        </div>
      </div>
      {favourite.includes(id) ? (
        <i
          className="bi bi-bookmark-heart-fill relative"
          onClick={() => {
            setfavourite(favourite?.filter((item) => item !== id));
          }}
        ></i>
      ) : (
        <i
          className="bi bi-bookmark-heart relative"
          onClick={() => {
            setfavourite([...favourite, id]);
          }}
        ></i>
      )}

      <div className=" mt-5">
        <h1 className=" m-3 h3 border-2 border-bottom border-danger p-1">
          similar target muscles exercise
        </h1>
        <Search exercise={similar_target} n={2} />
        <h1 className="m-3 h3 border-2 border-bottom border-danger p-1">
          similar equipments exercise
        </h1>
        <Search exercise={similar_equipment} n={2} />
      </div>
    </div>
  );
};

export default Exercise;
