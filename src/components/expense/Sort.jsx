import { useApp } from "../../context/AppContext.jsx";

const Sort = () => {
    const { dispatch, sortBy } = useApp();

    return (
        <div className="flex gap-1">
            <label htmlFor="sort">Sort By:</label>
            <div>
                <select
                    className="rounded text-black focus:outline-none"
                    id="sortDropdown"
                    value={sortBy}
                    onChange={e =>
                        dispatch({
                            type: "expenses/sort",
                            payload: e.target.value,
                        })
                    }
                >
                    <option value="input">Input</option>
                    <option value="cost">Cost</option>
                    <option value="name">Name</option>
                </select>
            </div>
        </div>
    );
};

export default Sort;
