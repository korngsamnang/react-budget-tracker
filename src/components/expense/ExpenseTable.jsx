import ExpenseRow from "./ExpenseRow.jsx";

const ExpenseTable = ({ ExpenseList }) => {
    return (
        <>
            <div className="overflow-x-auto">
                <div className="border-x ">
                    <table className="w-full">
                        <thead className="text-black">
                            <tr>
                                <th className="bg-gray-200 px-4 py-2 text-left ">
                                    Name
                                </th>
                                <th className="bg-gray-200 px-4 py-2 text-center">
                                    Cost
                                </th>
                                <th className="bg-gray-200 px-4 py-2 text-right ">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ExpenseList.map(ex => (
                                <ExpenseRow key={ex.id} expense={ex} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ExpenseTable;
