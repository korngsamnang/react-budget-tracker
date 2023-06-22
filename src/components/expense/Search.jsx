const Search = ({ setSearch }) => {
    return (
        <div className="mb-4 rounded border">
            <input
                className="w-full rounded px-2 py-1 text-black focus:outline-none"
                type="text"
                placeholder="Type to search..."
                onChange={event => setSearch(event.target.value)}
            />
        </div>
    );
};

export default Search;
