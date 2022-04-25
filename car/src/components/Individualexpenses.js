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
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Liters</th>
                    <th>Distance</th>
                    <th>Avg €/100km</th>
                    <th>Avg L/100km</th>
                </tr>
                {expences.map(expence =>
                    <Carexpenses expence={expence} />
                )}
            </tbody>
        </table>
    )
}

export default Individualexpenses