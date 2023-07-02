import { useApp } from "../../context/AppContext.jsx";

const Search = () => {
    const { search, dispatch } = useApp();

    return (
        <div className="mb-4 rounded border">
            <input
                className="w-full rounded px-2 py-1 text-black focus:outline-none"
                type="text"
                placeholder="Type to search..."
                value={search}
                onChange={event =>
                    dispatch({
                        type: "expenses/search",
                        payload: event.target.value,
                    })
                }
            />
        </div>
    );
};

export default Search;
