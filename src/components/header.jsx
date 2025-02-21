const Header = () => {

    return (
        <div className="flex justify-between ">
            <div className="flex flex-row gap-2">
                <a href="/">
                    <img src="/brand.svg"
                        alt="brand"
                        width={30}
                        height={30}
                    />
                    <div className="brand-text">StreamSearch</div>
                </a>
            </div>
            <div>
                <nav>
                    <ul className="flex gap-1 ml-4">
                        <li>
                            <a href="/trends">Trends</a>
                        </li>
                        <li>
                            <a href="/recent">Recent</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex gap-1">
                <button className="bg-blue-400 rounded-lg text-white"><a href="/login">Login</a></button>
                <button className="bg-blue-400 rounded-lg text-white"><a href="/signup">Signup</a></button>
            </div>
        </div>
    );
}

export default Header;