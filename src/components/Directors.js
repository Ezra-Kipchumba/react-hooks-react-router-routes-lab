import React from "react";
import { directors } from "../data";

function Directors() {
  // { directors.map((director, index) =>return <ol key={index}>{director}</ol>)}
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return (
          <div key={index}>
            <h1>{director.name}</h1>
            <ul>
              {director.movies.map((movie, index) => {
                return <li key={index}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Directors;
