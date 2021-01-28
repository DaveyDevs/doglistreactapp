import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";

import { Dog } from "./Dog";
import { Filter } from "../Filter";
import { ScrollToTop } from "../ScrollToTop";

export function DogsList() {
  // Get the global variables & functions via context
  const myContext = useContext(AppContext);

  const [filter, setFilter] = useState("");

  //   const [dags, setDags] = useState([]);

  // Can possibly be used for more complex filter functionality in future. Currently, this takes all the values from the object and puts it in a single searchable string.
  // const mergeForSearch = (dog) => {

  //   // console.log(dog.weight);

  //   const dogArray = Object.entries(dog).map((dogObj) => {
  //     // [dogObj[0]]: dogObj[1]

  //     let reformattedObj = {};
  //     // console.log(dogObj);

  //     if (dogObj[0] === "weight") {
  //       let topWeight = Number(
  //         dogObj[1].imperial.split(" ")[
  //           dogObj[1].imperial.split(" ").length - 1
  //         ]
  //       );

  //       if (topWeight < 20) {
  //         reformattedObj.key = `small`;
  //       } else if (topWeight < 70) {
  //         reformattedObj.key = `medium average size`;
  //       } else {
  //         reformattedObj.key = `large big`;
  //       }
  //     } else {
  //       reformattedObj.key = `${dogObj[1]}`;
  //     }

  //     return reformattedObj;
  //   });

  //   // console.log(dogArray);
  //   let dogForSearch = [];

  //   for (let dogArrayDog of dogArray) {
  //     dogForSearch.push(dogArrayDog.key);
  //   }

  //   // This gives us a string for each dog
  //   return dogForSearch.join(" ");
  // };

  // Attempting custom search filter
  // Found a potential solution here - https://stackoverflow.com/questions/51801907/how-to-create-react-search-filter-for-search-multiple-object-key-values

  const applyFilter = (dog) => {
    if (dog.name.toLowerCase().includes(filter.toLowerCase())) {
      return dog;
    }
    // Okay, so first merge all the data into one object ->
    // let dogString = mergeForSearch(dog);

    // Then, make it all lower case and see if it includes the filter. Now, how do I make it so the filter includes multiple strings if the user types multiple words.

    // let filterSquish = filter.split(" ").join("");
    // console.log(filterSquish);

    // if (dogString.toLowerCase().includes(filterSquish.toLowerCase())) {
    //   return dog;
    // }

    // filterToArray.forEach((word) => {
    //   if (dogString.toLowerCase().includes(word.toLowerCase())) {
    //     console.log(word);
    //     return dog;
    //   } else {
    //     return;
    //   }
    // });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-header">
      <h1 className="site-header__title">Dogs List!</h1>
      <h2 className="site-header__description">
        Scroll through a list of breeds or search by name.
      </h2>
      <Filter filter={filter} setFilter={setFilter} />

      <ul className="dogs-list">
        {!myContext.loading ? (
          myContext.dogs
            .filter(applyFilter)
            .map((dog) => <Dog key={dog.id} dog={dog} />)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <ScrollToTop />
    </div>
  );
}
