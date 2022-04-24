import { ExpenseContext } from "../Contexts/ExpenseContext"
import { useContext } from "react"

const Expenseform = (props) => {
    const {
        name,
        setName,
        liters,
        setLiters,
        price,
        setPrice,
        distance,
        setDistance
    } = useContext(ExpenseContext)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleLiterChange = (event) => {
        setLiters(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleDistanceChange = (event) => {
        setDistance(event.target.value)
    }


    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <th>Car name:</th>
                        <td><input value={name} onChange={handleNameChange} /></td>
                    </tr>
                    <tr>
                        <th>Liters:</th>
                        <td><input value={liters} onChange={handleLiterChange} /></td>
                    </tr>
                    <tr>
                        <th>Price:</th>
                        <td><input value={price} onChange={handlePriceChange} /></td>
                    </tr>
                    <tr>
                        <th>Distance:</th>
                        <td><input value={distance} onChange={handleDistanceChange} /></td>
                    </tr>
                    <tr>
                        <td><button type="submit">Add Refuel Expense</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default Expenseform