import Search from "./Search.jsx";
import Sort from "./Sort.jsx";
import ExpenseTable from "./ExpenseTable.jsx";

const Expense = () => {
    return (
        <section>
            <div className="mb-1 mt-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Expenses</h3>
                <Sort />
            </div>
            <Search />
            <ExpenseTable />
        </section>
    );
};

export default Expense;
