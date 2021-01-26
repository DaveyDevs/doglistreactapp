import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "https://api.thedogapi.com/v1/breeds";

export function DogDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [ourDog, setOurDog] = useState({});

  // const foundDog = async () => {
  //   try {
  //     const theDog = await dogs.find(function (ourId) {
  //       return ourId.id === Number(id);
  //     });
  //     console.log(theDog);
  //     setOurDog(theDog);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const getDog = async () => {
    try {
      const res = await fetch(API_URL);
      const dogsResults = await res.json();
      const theDog = dogsResults.find(function (ourId) {
        return ourId.id === Number(id);
      });

      setOurDog(theDog);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  // const foundDog = () => {
  //   try {
  //     const theDog = dogs.find(function (ourId) {
  //       return ourId.id === Number(id);
  //     });
  //     console.log(theDog);
  //     setOurDog(theDog);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  useEffect(() => {
    getDog();
  }, []);

  // if (!loading) {
  //   console.log(dogs);
  //   console.log(id);
  //   const theDog = dogs.find(function (ourId) {
  //     return ourId.id === Number(id);
  //   });
  //   console.log(theDog);
  //   setOurDog(theDog);
  // }

  // if (loading) return null;

  return (
    <div className="dog-detail">
      {!loading ? (
        <div>
          <h1 className="dog-detail__name">{ourDog.name}</h1>
          <div className="dog-detail__wiki">
            <a
              href={`https://en.wikipedia.org/wiki/${ourDog.name
                .split(" ")
                .join("_")}`}
            >
              Wikipedia page
            </a>
          </div>
          <div className="dog-detail__img-desc-container">
            <img
              className="dog-detail__img"
              src={ourDog.image.url}
              alt={"Photo of " + ourDog.name}
            />

            <div className="dog-detail__desc-container">
              {ourDog.origin && (
                <div className="dog-detail__desc-item">
                  <p>Origin:</p>
                  <p>{ourDog.origin}</p>
                </div>
              )}

              {ourDog.temperament && (
                <div className="dog-detail__desc-item">
                  <p>Temperament:</p>
                  <p>{ourDog.temperament}</p>
                </div>
              )}
              {ourDog.bred_for && (
                <div className="dog-detail__desc-item">
                  <p>Bred for:</p>
                  <p>{ourDog.bred_for}</p>
                </div>
              )}
              {ourDog.weight.imperial && (
                <div className="dog-detail__desc-item">
                  <p>Size:</p>
                  <p>{ourDog.weight.imperial} lbs</p>
                </div>
              )}
            </div>
          </div>
          <div className="dog-detail__back-link-container">
            <Link className="dog-detail__back-link" to={"/"}>
              Back to list
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
