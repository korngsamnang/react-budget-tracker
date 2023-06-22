import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { AppContext } from "../../context/AppProvider.jsx";

const AddExpense = () => {
    const { setExpenses } = useContext(AppContext);
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const handleAdd = event => {
        event.preventDefault();
        if (!name || !cost) return;
        const expense = {
            id: uuid(),
            name,
            cost: parseFloat(cost),
        };
        setExpenses(prev => [expense, ...prev]);
        setName("");
        setCost("");
    };
    return (
        <div className="mt-6">
            <header className="mb-2 text-2xl font-semibold">
                <h3>Add Expense</h3>
            </header>
            <form onSubmit={handleAdd}>
                <div className="md:flex">
                    <div className="mb-2 md:mb-0 md:mr-4">
                        <label htmlFor="name" className="mb-1 inline-block">
                            Name
                        </label>
                        <br />
                        <input
                            className="w-full rounded border px-2 py-1 text-black md:w-auto lg:w-80"
                            type="text"
                            autoFocus
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="cost" className="mb-1 inline-block">
                            Cost
                        </label>
                        <br />
                        <input
                            className="w-full rounded border px-2 py-1 text-black md:w-auto lg:w-80"
                            type="number"
                            value={cost}
                            onChange={event => setCost(event.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mb-8 mt-4 rounded bg-blue-600 px-3 py-1 font-normal text-white hover:bg-blue-700"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddExpense;
