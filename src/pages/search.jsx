import { useSearchParams } from "react-router";
import SearchBar from "../components/searchbar";
import Videos from '../components/videos';
import { useQuery } from "@tanstack/react-query";

const Search = () => {

    const [searchParams] = useSearchParams();

    const {isPending, error, data} = useQuery({
        queryKey: ['search'],
        queryFn: ()=> fetch(`${import.meta.env.VITE_API_BASE_URL}/search?q=${searchParams.get('q')}`).then((res) =>
            res.json()),
    });

    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <SearchBar />
            </div>
            {!isPending && !error && <div className="p-5">
                <h4>Search "{searchParams.get('q')}":</h4>
                <p>Found: {data.length} videos...</p>
            </div>}
            <Videos 
                isPending={isPending}
                error={error}
                data={data}
            />
        </div>
    );
}

export default Search;