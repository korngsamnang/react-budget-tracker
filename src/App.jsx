import Header from "./components/header/Header.jsx";
import BudgetInfo from "./components/budget/BudgetInfo.jsx";
import Expense from "./components/expense/Expense.jsx";
import { useContext } from "react";
import AddExpense from "./components/AddExpense/AddExpense.jsx";
import { AppContext } from "./context/AppProvider.jsx";

const App = () => {
    const { darkMode } = useContext(AppContext);

    return (
        <main
            className={`${darkMode ? "bg-[#081023]" : "bg-white"} min-h-screen`}
        >
            <div
                className={`mx-auto w-full px-4 py-0 md:w-7/12 md:p-0 ${
                    darkMode && "text-white"
                }`}
            >
                <Header />
                <BudgetInfo />
                <Expense />
                <AddExpense />
            </div>
        </main>
    );
};

export default App;
