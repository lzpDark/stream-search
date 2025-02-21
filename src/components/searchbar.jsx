const SearchBar = ()=> { 
    return (
        <div className="search-bar">
            <form action="search" method="get">
                <input type="search" name="q" placeholder="search what you want"/>
                <button className="mx-auto rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-500 focus:outline-none">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;