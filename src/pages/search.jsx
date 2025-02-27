import { useSearchParams } from "react-router";
import SearchBar from "../components/searchbar";
import Videos from '../components/videos';
import useApi from '../shared/api'

const Search = () => {

    const [searchParams] = useSearchParams();
    const {isPending, error, data} = useApi.searchVideos(searchParams.get('q'));

    if(isPending) {
        return <>searching..</>;
    }
    if(error) {
        return <>Error</>;
    }

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
                data={data}
            />
        </div>
    );
}

export default Search;