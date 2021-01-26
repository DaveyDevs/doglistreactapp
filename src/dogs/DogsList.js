import React, { useState, useEffect } from "react";

import { Dog } from "./Dog";
import { Filter } from "../Filter";

const API_URL = "https://api.thedogapi.com/v1/breeds";

export function DogsList() {
  const [filter, setFilter] = useState("");

  const [dogs, setDogs] = useState([]);
  //   const [dags, setDags] = useState([]);

  const [loading, setLoading] = useState(true);

  const getDogs = async () => {
    try {
      const res = await fetch(API_URL);
      const dogsResults = await res.json();
      setDogs(dogsResults);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const mergeForSearch = (dog) => {
    // console.log(dog.weight);

    const dogArray = Object.entries(dog).map((dogObj) => {
      // [dogObj[0]]: dogObj[1]

      let reformattedObj = {};
      // console.log(dogObj);

      if (dogObj[0] === "weight") {
        let topWeight = Number(
          dogObj[1].imperial.split(" ")[
            dogObj[1].imperial.split(" ").length - 1
          ]
        );

        if (topWeight < 20) {
          reformattedObj.key = `small`;
        } else if (topWeight < 70) {
          reformattedObj.key = `medium average size`;
        } else {
          reformattedObj.key = `large big`;
        }
      } else {
        reformattedObj.key = `${dogObj[1]}`;
      }

      return reformattedObj;
    });

    // console.log(dogArray);
    let dogForSearch = [];

    for (let dogArrayDog of dogArray) {
      dogForSearch.push(dogArrayDog.key);
    }

    // This gives us a string for each dog
    return dogForSearch.join(" ");
  };

  //   A version that seems to work and includes the key in "headers". The above works without it so maybe try this instead if I run into issues later?
  //   const getDags = async () => {
  //     try {
  //       console.log("IT WORKED!");
  //       const res = await fetch(API_URL, {
  //         headers: {
  //           "x-api-key": process.env.REACT_APP_DOG_API,
  //         },
  //       });

  //       const dags = await res.json();
  //       setDags(dags);
  //       setLoading(false);
  //       console.log(dags);
  //       console.log(dags[0].name);
  //     } catch (e) {
  //       console.error("ARRGHHH!");
  //       console.error(e);
  //     }
  //   };

  // Attempting custom search filter
  // Found a potential solution here - https://stackoverflow.com/questions/51801907/how-to-create-react-search-filter-for-search-multiple-object-key-values
  const applyFilter = (dog) => {
    // Okay, so first merge all the data into one object ->
    let dogString = mergeForSearch(dog);

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

    if (dogString.toLowerCase().includes(filter.toLowerCase())) {
      return dog;
    }
  };

  useEffect(() => {
    getDogs();
    // getDags();
  }, []);

  return (
    <div className="site-header">
      <h1 className="site-header__title">Dogs List!</h1>
      <h2 className="site-header__description">
        Scroll through a list of breeds or search by name or description word.
      </h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className="dogs-list">
        {!loading ? (
          dogs.filter(applyFilter).map((dog) => <Dog key={dog.id} dog={dog} />)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}
