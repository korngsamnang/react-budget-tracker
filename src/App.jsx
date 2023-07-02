import Header from "./components/header/Header.jsx";
import BudgetInfo from "./components/budget/BudgetInfo.jsx";
import Expense from "./components/expense/Expense.jsx";
import AddExpense from "./components/AddExpense/AddExpense.jsx";
import { useApp } from "./context/AppContext.jsx";

const App = () => {
    const { darkMode } = useApp();

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
