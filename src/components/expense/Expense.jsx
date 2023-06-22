import Search from "./Search.jsx";
import { useContext, useState } from "react";
import Sort from "./Sort.jsx";
import { AppContext } from "../../context/AppProvider.jsx";
import ExpenseTable from "./ExpenseTable.jsx";

const Expense = () => {
    const { sortItems } = useContext(AppContext);
    const [search, setSearch] = useState("");
    const searchList = sortItems.filter(ex =>
        ex.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <section>
            <div className="mb-1 mt-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Expenses</h3>
                <Sort />
            </div>
            <Search setSearch={setSearch} />
            <ExpenseTable ExpenseList={searchList} />
        </section>
    );
};

export default Expense;
