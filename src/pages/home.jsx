import VideoCover from "../components/videocover";
import SearchBar from "../components/searchbar";
import { useEffect, useState } from "react";

const Home = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/videos`);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const jsonData = await response.json();
              setVideos(jsonData); 
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
         fetchData();
    }, []);

    return (
        <div>
            <SearchBar />
            <div className="result-layout">
                {
                    videos.map((item, idx)=>{
                        return <VideoCover 
                            key={idx}
                            title={item.title}
                            cover={item.src}
                            updateInformation={item.subtitle}
                            ref={"/"}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default Home;