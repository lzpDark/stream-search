const VideoCover = ({
    title, updateInformation, cover, src
})=> {
    return (
        <div>
            <img src={cover} alt={title}>
            </img>
            <p>{updateInformation}</p>
            <a href={src}>{title}</a>
        </div>
    );
}

export default VideoCover;