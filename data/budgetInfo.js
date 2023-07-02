import { v4 as uuid } from "uuid";

export const budgetInfo = {
    budget: 2500,
    expenses: [
        { id: uuid(), name: "Groceries", cost: 300 },
        { id: uuid(), name: "Dining Out", cost: 200 },
        { id: uuid(), name: "Rent", cost: 500 },
        { id: uuid(), name: "Utilities", cost: 100 },
        { id: uuid(), name: "Entertainment", cost: 100 },
    ],
};
