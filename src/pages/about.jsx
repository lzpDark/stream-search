import FakeView from "../components/fake";

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

            <FakeView value={results.length}/>
            <button onClick={handleClick}>Click</button>
        </>
    );
}

export default About;