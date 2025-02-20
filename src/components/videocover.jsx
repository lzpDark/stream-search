const VideoCover = ({
    title, updateInformation, cover, ref
})=> {
    return (
        <div>
            <img src={cover} alt={title}>
            </img>
            <p>{updateInformation}</p>
            <a href={ref}>{title}</a>
        </div>
    );
}

export default VideoCover;