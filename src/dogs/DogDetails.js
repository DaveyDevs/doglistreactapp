import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import AppContext from "../AppContext";

// const API_URL = "https://api.thedogapi.com/v1/breeds";

export function DogDetails() {
  // Get the global variables & functions via context
  const myContext = useContext(AppContext);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <div className="dog-detail">
      {!myContext.loading ? (
        <div>
          <h1 className="dog-detail__name">
            {
              myContext.dogs.find(function (ourId) {
                return ourId.id === Number(id);
              }).name
            }
          </h1>
          <div className="dog-detail__wiki">
            <a
              href={`https://en.wikipedia.org/wiki/${myContext.dogs
                .find(function (ourId) {
                  return ourId.id === Number(id);
                })
                .name.split(" ")
                .join("_")}`}
            >
              Wikipedia page
            </a>
          </div>
          <div className="dog-detail__img-desc-container">
            <img
              className="dog-detail__img"
              src={
                myContext.dogs.find(function (ourId) {
                  return ourId.id === Number(id);
                }).image.url
              }
              alt={
                "Photo of " +
                myContext.dogs.find(function (ourId) {
                  return ourId.id === Number(id);
                }).name
              }
            />

            <div className="dog-detail__desc-container">
              {myContext.dogs.find(function (ourId) {
                return ourId.id === Number(id);
              }).origin && (
                <div className="dog-detail__desc-item">
                  <p>Origin:</p>
                  <p>
                    {
                      myContext.dogs.find(function (ourId) {
                        return ourId.id === Number(id);
                      }).origin
                    }
                  </p>
                </div>
              )}

              {myContext.dogs.find(function (ourId) {
                return ourId.id === Number(id);
              }).temperament && (
                <div className="dog-detail__desc-item">
                  <p>Temperament:</p>
                  <p>
                    {
                      myContext.dogs.find(function (ourId) {
                        return ourId.id === Number(id);
                      }).temperament
                    }
                  </p>
                </div>
              )}
              {myContext.dogs.find(function (ourId) {
                return ourId.id === Number(id);
              }).bred_for && (
                <div className="dog-detail__desc-item">
                  <p>Bred for:</p>
                  <p>
                    {
                      myContext.dogs.find(function (ourId) {
                        return ourId.id === Number(id);
                      }).bred_for
                    }
                  </p>
                </div>
              )}
              {myContext.dogs.find(function (ourId) {
                return ourId.id === Number(id);
              }).weight.imperial && (
                <div className="dog-detail__desc-item">
                  <p>Size:</p>
                  <p>
                    {
                      myContext.dogs.find(function (ourId) {
                        return ourId.id === Number(id);
                      }).weight.imperial
                    }{" "}
                    lbs
                  </p>
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
