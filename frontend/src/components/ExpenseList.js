// File: frontend/src/components/ExpenseList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../store/expenseSlice';

function ExpenseList({ expenses }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <ul className="divide-y divide-gray-200">
        {expenses.map((expense) => (
          <li key={expense._id} className="py-4 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-900">{expense.description}</p>
              <p className="text-sm text-gray-500">{expense.category}</p>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900 mr-4">
                Rs. {expense.amount.toFixed(2)}
              </span>
              <button
                onClick={() => dispatch(deleteExpense(expense._id))}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;