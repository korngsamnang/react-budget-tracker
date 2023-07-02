import { TiDelete } from "react-icons/ti";
import { useApp } from "../../context/AppContext.jsx";

const ExpenseRow = ({ expense }) => {
    const { handleDelete } = useApp();

    return (
        <tr className="border-b">
            <td className="px-4 py-2 text-left">{expense.name}</td>
            <td className="px-4 py-2 text-center">
                {expense.cost.toFixed(2)}$
            </td>
            <td className="px-4 py-2 text-right ">
                <button
                    className="mr-4 rounded bg-red-500 px-1 py-1 text-white"
                    onClick={() => handleDelete(expense.id)}
                >
                    <TiDelete />
                </button>
            </td>
        </tr>
    );
};

export default ExpenseRow;
