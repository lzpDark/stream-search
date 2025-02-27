const Header = () => {

    return (
        <div className="flex justify-between items-baseline bg-stone-700 text-white px-0 mx-0">
            <div className="flex flex-row justify-start items-baseline  px-0 mx-0">
                <a href='/' className="text-base">StreamSearch</a>
            </div>
            <div className="grow">
                <div className="flex flex-row justify-center text-sm">
                    <nav>
                        <ul className="flex gap-10 ml-4">
                            <li>
                                <a data-test="data-trends" href="/trends">Trends</a>
                            </li>
                            <li>
                                <a data-test="data-recent" href="/recent">Recent</a>
                            </li>
                            <li>
                                <a data-test="data-about" href="/about">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="flex gap-1 mx-2 py-2">
                <button className="mx-auto rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-500 focus:outline-none"><a href="/login">Login</a></button>
                <button className="mx-auto rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-500 focus:outline-none"><a href="/signup">Signup</a></button>
            </div>
        </div>
    );
}

export default Header;