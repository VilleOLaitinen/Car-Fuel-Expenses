import { ExpenseContext } from "../Contexts/ExpenseContext";
import { useContext } from "react";

const Totalexpenses = () => {
    const { expences } = useContext(ExpenseContext);
    const totalsum = Math.round(expences.reduce((sum, expense) => parseFloat(sum) + parseFloat(expense.price), 0) * 100) / 100;
    const totalLiters = Math.round(expences.reduce((liters, expense) => parseFloat(liters) + parseFloat(expense.liters), 0) * 100) / 100;
    const totalDistance = Math.round(expences.reduce((distance, expense) => parseFloat(distance) + parseFloat(expense.distance), 0) * 100) / 100;
    const averageExpence = Math.round(100 * totalsum / totalDistance * 100) / 100;
    const averageConsumption = Math.round(100 * totalLiters / totalDistance * 100) / 100;

    if (expences.length === 0) {
        return (<p>No expenses added yet</p>);
    }

    return (
        <>
            <p class='border-bottom'>Total sum in euros: {totalsum} €</p>
            <p class='border-bottom'>Total consumption in liters: {totalLiters} L</p>
            <p class='border-bottom'>Total distance: {totalDistance} km</p>
            <p class='border-bottom'>Average expenses per 100 km: {averageExpence} € </p>
            <p class='border-bottom'>Average consumption per 100 km: {averageConsumption} L</p>
        </>
    );

}


export default Totalexpenses;
