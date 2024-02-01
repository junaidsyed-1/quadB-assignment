import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MoviePage = ({ details }) => {
  const { image, name, summary, rating } = details;
  if (!image) return;
  return (
    <div className=" w-full flex shadow-md">
      <div className="w-[40%] ">
        <img
          src={image.original}
          alt={name}
          className="w-full object-cover rounded-b-sm h-svh sm:h-auto"
        />
      </div>
      <div className="w-full p-7 bg-[#0F0F0F] text-slate-200 rounded-br-sm">
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="text-lg mt-5">
          <b className="text-xl">Summary :</b> <br />
          {summary}
        </p>
        <p className="text-lg mt-5">
          <b>Ratings :</b> {rating.average}
        </p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline px-10 mt-10">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MoviePage;
