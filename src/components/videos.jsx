import VideoCover from "../components/videocover";

const Videos = ({data}) => {
    return (
        <div className="result-layout">
            {data.map((item, idx) => {
                return <VideoCover
                    key={idx}
                    title={item.title}
                    cover={item.src}
                    updateInformation={item.subtitle}
                    src={"/"}
                />
            })}
        </div>
    );
}

export default Videos;