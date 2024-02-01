/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BUTTON_CSS } from "../utils/constants";

const Card = ({ info }) => {
  const { image, name, genres, rating } = info;
  const singleGenres = genres.map((gen) => gen.split(", "));

  if (!info || info === null || !image) return;
  return (
    <div className="w-72 text-white shadow-md hover:shadow-xl container mx-auto sm:m-0">
      <img
        className="w-72 rounded-sm rounded-b-none h-96"
        src={image.original}
        alt={name}
      />
      <div className="bg-blue-950  p-2">
        <p className="font-bold text-xl">{name}</p>
        <p className="flex justify-between">
          <span className="flex">{singleGenres + " "}</span>
          <span>
            Ratings: <b>{rating.average}</b>
          </span>
        </p>
      </div>
      <Link to={"/movie/" + info.id}>
        <button className={BUTTON_CSS}>Book Tickets</button>
      </Link>
    </div>
  );
};

export default Card;
