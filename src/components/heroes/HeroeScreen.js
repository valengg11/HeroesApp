import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { Redirect } from "react-router-dom";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  //   const hero = getHeroById(heroId);

  //Optimizacion
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    if (history.length >= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  const { superhero, alter_ego, publisher, first_appearance, characters } =
    hero;
  return (
    <div className="row mt-5 animate__animated animate__fadeInUp">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          className="img-thumbnail"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3 className="mb-3">{superhero}</h3>
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
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button onClick={handleReturn} className="btn btn-outline-info mt-4">
          Return
        </button>
      </div>
    </div>
  );
};
