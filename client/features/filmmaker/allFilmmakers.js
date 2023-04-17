import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectFilmmakers, fetchFilmmakers } from "./allFilmmakersSlice";

// The AllFilmmakers component displays a list of all filmmakers
const AllFilmmakers = () => {
  const dispatch = useDispatch();
  // const filmmakers = useSelector(selectFilmmakers);
  const filmmakers = useSelector((state) => state.Filmmakers);

  // When the component mounts, dispatch the fetchFilmmakers action
  useEffect(() => {
    dispatch(fetchFilmmakers());
  }, [dispatch]);

  // Display the filmmakers in an unordered list
  return (
    <ul>
      <h1>All Filmmakers</h1>
      {Array.isArray(filmmakers) &&
        filmmakers.map((filmmaker) => (
          <li key={filmmaker.id}>
            <Link to={`/filmmakers/${filmmaker.id}`}>
              <h3>{filmmaker.fullName}</h3>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default AllFilmmakers;

// return (
//     <div>
//       {filmmakers && filmmakers.length
//         ? filmmakers.map((filmmaker) => (
//             <NavLink
//               to={`/filmmakers/${filmmaker.id}`}
//               key={`All filmmakers: ${filmmaker.id}`}
//             >
//               <div className="filmmaker row">
//                 <img src={filmmaker.imageUrl} />
//                 <p>{filmmaker.name}</p>
//               </div>
//             </NavLink>
//           ))
//         : null}
//     </div>
//   );
// };
