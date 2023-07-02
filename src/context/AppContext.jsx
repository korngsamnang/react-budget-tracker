import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { budgetInfo } from "../../data/budgetInfo.js";

const AppContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "expenses/sort":
            return {
                ...state,
                sortBy: action.payload,
            };
        case "expenses/budget":
            return { ...state, budget: action.payload };
        case "expenses/add":
            return { ...state, expenses: [action.payload, ...state.expenses] };
        case "expenses/delete":
            return {
                ...state,
                expenses: state.expenses.filter(ex => ex.id !== action.payload),
            };
        case "expenses/search":
            return {
                ...state,
                search: action.payload,
            };
        default:
            throw new Error("Unknown action");
    }
};

const initialState = {
    budget: budgetInfo.budget,
    expenses: budgetInfo.expenses,
    sortBy: "input",
    search: "",
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, undefined);
    const { budget, expenses, sortBy, search } = state;

    const [darkMode, setDarkMode] = useLocalStorage(false, "mode");

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
        dispatch({
            type: "expenses/delete",
            payload: id,
        });
    };

    return (
        <AppContext.Provider
            value={{
                sortBy,
                dispatch,
                darkMode,
                setDarkMode,
                budget,
                expenses,
                handleDelete,
                search,
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
