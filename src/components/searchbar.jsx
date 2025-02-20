const SearchBar = ()=> { 
    return (
        <div className="p-3">
            <form action="search" method="get">
                <input type="search" name="q" placeholder="search what you want"/>
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;