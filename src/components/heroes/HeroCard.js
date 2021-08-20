import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 540, borderRadius: 5 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-image"
            alt={superhero}
            style={{ maxHeight: 200 }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title ml-2"> {superhero}</h5>
            <p className="card-text ml-3">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text ml-3">{characters} </p>
            )}
            <p className="card-text ml-3">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link className='ml-3' to={`./hero/${id}`}> More... </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
