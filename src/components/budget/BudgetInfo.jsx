import { useState } from "react";
import { useApp } from "../../context/AppContext.jsx";
import Box from "./Box.jsx";

const BudgetInfo = () => {
    const { budget, expenses, dispatch } = useApp();
    const [editBudgetMode, setEditBudgetMode] = useState(false);
    const [editBudget, setEditBudget] = useState(+budget);

    //Derived state
    const spent = expenses.reduce((acc, ex) => acc + ex.cost, 0);

    const saveEditBudget = () => {
        if (!editBudget) {
            alert("Input some value");
            return;
        }
        dispatch({ type: "expenses/budget", payload: editBudget });
        setEditBudgetMode(prevState => !prevState);
    };

    return (
        <div className="grid grid-cols-1 gap-4 font-semibold text-black lg:grid-cols-3">
            <Box>
                <div className="flex items-center justify-between rounded bg-fuchsia-200 px-5 py-3">
                    {!editBudgetMode ? (
                        <p>Budget: {Number(budget).toFixed(2)}$</p>
                    ) : (
                        <div>
                            <span>Budget: </span>
                            <input
                                type="text"
                                autoFocus
                                value={editBudget}
                                onChange={event =>
                                    setEditBudget(event.target.value)
                                }
                                className="w-[100px] border-b border-black bg-fuchsia-200 focus:outline-none"
                            />
                        </div>
                    )}
                    {editBudgetMode ? (
                        <button
                            className="rounded bg-blue-600 px-3 py-1 font-normal text-white hover:bg-blue-700"
                            onClick={saveEditBudget}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="rounded bg-blue-600 px-3 py-1 font-normal text-white hover:bg-blue-700"
                            onClick={() =>
                                setEditBudgetMode(prevState => !prevState)
                            }
                        >
                            Edit
                        </button>
                    )}
                </div>
            </Box>
            <Box>
                <div className="flex items-center rounded  bg-stone-200 px-5 py-4">
                    Remaining: {(budget - spent).toFixed(2)}$
                </div>
            </Box>
            <Box>
                <div className="flex items-center rounded  bg-emerald-200 px-5 py-4">
                    Spent: {spent.toFixed(2)}$
                </div>
            </Box>
        </div>
    );
};

export default BudgetInfo;
