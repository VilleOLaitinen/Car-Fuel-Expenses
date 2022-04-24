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
            <label>
                Car name:
                <input value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Liters:
                <input value={liters} onChange={handleLiterChange} />
            </label>
            <br />
            <label>
                Price:
                <input value={price} onChange={handlePriceChange} />
            </label>
            <br />
            <label>
                Distance:
                <input value={distance} onChange={handleDistanceChange} />
            </label>
            <br />
            <button type="submit">Add Refuel Expense</button>
        </form>
    )
}

export default Expenseform