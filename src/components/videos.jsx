import VideoCover from "../components/videocover";

const Videos = ({isPending, error, data}) => {
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

export default Videos;