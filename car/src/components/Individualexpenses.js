import { ExpenseContext } from "../Contexts/ExpenseContext"
import { useContext } from "react"
import Carexpenses from "./Carexpenses"

const Individualexpenses = (props) => {
    const { expences } = useContext(ExpenseContext)

    if (expences.length === 0) {
        return (
            <p>No expenses added yet</p>
        )
    }


    return (
        <ul>
            {expences.map(expence =>
                <Carexpenses expence={expence} />
            )}
        </ul>
    )
}

export default Individualexpenses