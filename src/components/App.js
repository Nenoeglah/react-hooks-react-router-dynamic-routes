// import React, { useState } from "react";
// import { Route, Switch } from "react-router-dom";
// import NavBar from "./NavBar";
// import MoviesPage from "./MoviesPage";

// function App() {
//   const [movies, setMovies] = useState([
//     { id: 1, title: "A River Runs Through It" },
//     { id: 2, title: "Se7en" },
//     { id: 3, title: "Inception" }
//   ]);

//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route path="/movies">
//           <MoviesPage movies={movies} />
//         </Route>
//         <Route exact path="/">
//           <div>Home</div>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies] = useState([
    { id: 1, title: "A River Runs Through It" },
    { id: 2, title: "Se7en" },
    { id: 3, title: "Inception" }
  ]);

  // Use setMovies to update the state of movies in the future
  // setMovies([...movies, { id: 4, title: "New Movie" }]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
