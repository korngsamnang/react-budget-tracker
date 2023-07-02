import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const AppContext = createContext(null);

const initialState = {
    budget: 2500,
    expenses: [
        { id: uuid(), name: "Groceries", cost: 300 },
        { id: uuid(), name: "Dining Out", cost: 200 },
        { id: uuid(), name: "Rent", cost: 500 },
        { id: uuid(), name: "Utilities", cost: 100 },
        {
            id: uuid(),
            name: "Entertainment",
            cost: 100,
        },
    ],
};
export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useLocalStorage(false, "mode");
    const [budget, setBudget] = useState(initialState.budget);
    const [expenses, setExpenses] = useState(initialState.expenses);
    const [sortBy, setSortBy] = useState("input");
    const [search, setSearch] = useState("");

    let sortItems;
    if (sortBy === "input") sortItems = expenses;
    if (sortBy === "cost") {
        sortItems = expenses.slice().sort((a, b) => b.cost - a.cost);
    }
    if (sortBy === "name") {
        sortItems = expenses
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    const searchList = sortItems.filter(ex =>
        ex.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = id => {
        setExpenses(expenses => expenses.filter(ex => ex.id !== id));
    };

    return (
        <AppContext.Provider
            value={{
                sortBy,
                setSortBy,
                darkMode,
                setDarkMode,
                budget,
                setBudget,
                expenses,
                setExpenses,
                handleDelete,
                search,
                setSearch,
                expenseList: searchList,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    return useContext(AppContext);
};
