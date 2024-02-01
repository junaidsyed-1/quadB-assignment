/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useMovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetch("https://api.tvmaze.com/shows/" + id);
        const json = await data.json();
        setMovieDetails(json);
    };
    return movieDetails;
};

export default useMovieDetails;