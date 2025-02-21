import VideoCover from "../components/videocover";
import SearchBar from "../components/searchbar";
import {
    useQuery,
} from '@tanstack/react-query'

const Videos = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['what-key'],
        queryFn: () =>
            fetch(`${import.meta.env.VITE_API_BASE_URL}/videos`).then((res) =>
                res.json()),
    })

    if (isPending) return 'Pending..';
    if (error) return 'Error';
    return (
        <div className="result-layout">
            {data.map((item, idx) => {
                return <VideoCover
                    key={idx}
                    title={item.title}
                    cover={item.src}
                    updateInformation={item.subtitle}
                    ref={"/"}
                />
            })}
        </div>
    );
}

const Home = () => {
    return (
        <div>
            <SearchBar />
            <Videos />
        </div>
    );
}

export default Home;