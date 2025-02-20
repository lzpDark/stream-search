import { useSearchParams } from "react-router";
import SearchBar from "../components/searchbar";
import { useEffect, useState } from "react";
import VideoCover from "../components/videocover";

const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    let [result, setResult] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/search?q=${searchParams.get('q')}`)
            .then(response => response.json())
            .then(data => {
                setResult(data);
            });
    }, []);

    return (
        <div className="flex flex-col">
            <SearchBar />
            <div className="p-5">
                <h4>Search "{searchParams.get('q')}":</h4>
                <p>Found: {result.length} videos...</p>
            </div>
            <div className="result-layout">
                {
                    result.map((item) => {
                        return <VideoCover key={item.id}
                            title={item.title}
                            cover={item.src}
                            updateInformation={item.subtitle}
                            ref="/"
                        />
                    })
                }
            </div>
        </div>
    );
}

export default Search;