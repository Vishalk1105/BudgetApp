import React from "react";
import { useBudgets } from "../context/BudgetContext";
import BudgetCard from "./BudgetCard";

export default function TotalBudgetCard(props) {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  if (amount === 0) return null;
  const max = budgets.reduce((total, budget) => total + budget.amount, 0);
  if (max === 0) return null;
  return <BudgetCard amount={amount} name="Total" gray max={max} hideButtons />;
}
