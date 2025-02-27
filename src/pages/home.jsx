import useApi from '../shared/api'
import SearchBar from "../components/searchbar";
import Videos from '../components/videos';


const Home = () => {

    const { isPending, error, data } = useApi.fetchVideos();

    if (isPending) return 'loading..';
    if (error) return 'Error';
    return (
        <div className="flex flex-col">
            <h1 data-test="hero-heading">enjoy videos</h1>
            <div className="flex justify-center search-bar">
                <SearchBar />
            </div>
            <Videos data={data} />
        </div>
    );
}

export default Home;