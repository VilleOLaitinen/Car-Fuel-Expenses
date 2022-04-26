import { ExpenseContext } from "../Contexts/ExpenseContext";
import { useContext } from "react";

const Expenseform = () => {
    const {
        name,
        setName,
        liters,
        setLiters,
        price,
        setPrice,
        distance,
        setDistance,
        expences,
        setExpences
    } = useContext(ExpenseContext);

    const addExpense = (event) => {
        event.preventDefault();

        const isPositiveNumber = (n) => {
            return !isNaN(parseFloat(n)) && !isNaN(n - 0) && parseFloat(n) > 0;
        }

        if (isPositiveNumber(liters) && isPositiveNumber(price) && isPositiveNumber(distance)) {
            const expenceObject = {
                name: name,
                liters: Math.round(parseFloat(liters) * 100) / 100,
                price: Math.round(parseFloat(price) * 100) / 100,
                distance: Math.round(parseFloat(distance) * 100) / 100,
                id: expences.length + 1
            };

            const carIndex = expences.findIndex(expence => {
                return expence.name === name;
            });

            if (carIndex === -1) {
                setExpences(expences.concat(expenceObject));
            } else {
                const expencesCopy = expences.slice();
                expencesCopy[carIndex].liters = Math.round((parseFloat(expencesCopy[carIndex].liters) + parseFloat(liters)) * 100) / 100;
                expencesCopy[carIndex].price = Math.round((parseFloat(expencesCopy[carIndex].price) + parseFloat(price)) * 100) / 100;
                expencesCopy[carIndex].distance = Math.round((parseFloat(expencesCopy[carIndex].distance) + parseFloat(distance)) * 100) / 100;

                setExpences(expencesCopy);
            }

        } else {
            alert("You must enter proper positive values for liter, price and distance fields!");
        }

        setName('');
        setPrice('');
        setDistance('');
        setLiters('');
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleLiterChange = (event) => {
        setLiters(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    }


    return (
        <form onSubmit={addExpense}>
            <table>
                <tbody>
                    <tr>
                        <th>Car name:</th>
                        <td><input value={name} onChange={handleNameChange} /></td>
                    </tr>
                    <tr>
                        <th>Liters:</th>
                        <td><input value={liters} onChange={handleLiterChange} /></td>
                        <td>L</td>
                    </tr>
                    <tr>
                        <th>Price:</th>
                        <td><input value={price} onChange={handlePriceChange} /></td>
                        <td>€</td>
                    </tr>
                    <tr>
                        <th>Distance:</th>
                        <td><input value={distance} onChange={handleDistanceChange} /></td>
                        <td>km</td>
                    </tr>
                    <tr>
                        <td><button type="submit">Add Refuel Expense</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default Expenseform;