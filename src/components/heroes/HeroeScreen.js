import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

import "./styles.css";

const heroesImages = require.context("../../assets/heroes", true);

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  //   const hero = getHeroById(heroId);

  //Optimizacion
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  const { superhero, alter_ego, publisher, first_appearance, characters } =
    hero;
  return (
    <div className="heroScreenCard row mt-5 animate__animated animate__fadeInUp">
      <div className="col-4">
        <img
          // src={`../assets/heroes/${heroId}.jpg`}  desde /public/assets
          src={heroesImages(`./${heroId}.jpg`).default}
          className="img-thumbnail animate__animated animate__zoomIn"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h1 className="mb-3 heroScreenTitle">{superhero}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego:</strong> <p>{alter_ego}</p>
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> <p>{publisher}</p>
          </li>
          <li className="list-group-item">
            <strong>Fist Appearance:</strong> <p>{first_appearance}</p>
          </li>
        </ul>
        <h5 className="mt-3 ml-2">Characters</h5>
        <p className="ml-3">{characters}</p>
        <button
          onClick={handleReturn}
          className="btn btn-dark btn-lg ml-2 mt-4 animate__animated animate__backInUp"
        >
          Return
        </button>
      </div>
    </div>
  );
};
