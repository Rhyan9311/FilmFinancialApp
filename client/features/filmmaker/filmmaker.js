import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilmmaker } from "./filmmakerSlice";

const Filmmaker = () => {
  const { filmmakerId } = useParams();
  const dispatch = useDispatch();
  const filmmaker = useSelector((state) => state.filmmaker.filmmaker);

  useEffect(() => {
    dispatch(fetchFilmmaker(filmmakerId));
  }, [dispatch, filmmakerId]);

  return (
    <div>
      {filmmaker ? (
        <>
          <h2>{filmmaker.name}</h2>
          <p>Email: {filmmaker.email}</p>
          <p>Years of experience: {filmmaker.yearsOfExperience}</p>
          <img src={filmmaker.image} alt={filmmaker.name} />
          <h3>Film project history:</h3>
          <ul>
            {filmmaker.projects.length > 0 ? (
              filmmaker.projects.map((project) => (
                <li key={project.id}>
                  {project.title} ({project.year})
                </li>
              ))
            ) : (
              <li>No film projects found.</li>
            )}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Filmmaker;
