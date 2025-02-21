const About = ()=> {

    const results = [];

    function handleClick() {
        results.push({});
        console.log("results length: " + results.length)
    }

    return (
        <>
            <p>This project is just a demo to practice some tech:</p>
            <ul>
                <li>react</li>
                <li>react-router</li>
                <li>elasticsearch</li>
            </ul> 
        </>
    );
}

export default About;