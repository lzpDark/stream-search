import {
    useQuery,
} from '@tanstack/react-query';
import SearchBar from "../components/searchbar";
import Videos from '../components/videos';



const Home = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['videos'],
        queryFn: () =>
            fetch(`${import.meta.env.VITE_API_BASE_URL}/videos`).then((res) =>
                res.json()),
    })

    return (
        <div className="flex flex-col">
            <div className="flex justify-center search-bar">
                <SearchBar />
            </div>
            <Videos isPending={isPending}
                error={error}
                data={data}  
            />
        </div>
    );
}

export default Home;