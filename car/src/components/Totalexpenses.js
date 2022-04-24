import { ExpenseContext } from "../Contexts/ExpenseContext"
import { useContext } from "react"

const Totalexpenses = (props) => {
    const { expences } = useContext(ExpenseContext)
    const totalsum = expences.reduce((sum, expense) => parseInt(sum) + parseInt(expense.price), 0)

    if (expences.length === 0) {
        return (
            <p>No expenses added yet</p>
        )
    }

    return (
        <>
            <p>Total price: {totalsum}</p>
        </>
    )

}


export default Totalexpenses