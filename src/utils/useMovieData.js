import { useEffect, useState } from "react";
import { DATA_API } from "./constants";

const useMovieData = () => {
    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetch(DATA_API);
        const json = await data.json();
        setMovieInfo(json);
    };
    if (!movieInfo) return;

    return movieInfo;
}

export default useMovieData;