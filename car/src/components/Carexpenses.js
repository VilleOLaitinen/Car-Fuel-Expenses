const Carexpenses = ({ expence }) => {

    return (
        <tr>
            <td>{expence.name}</td>
            <td>{expence.price}</td>
            <td>{expence.liters}</td>
            <td>{expence.distance}</td>
            <td>{Math.round(100 * expence.price / expence.distance * 100) / 100}</td>
            <td>{Math.round(100 * expence.liters / expence.distance * 100) / 100}</td>
        </tr>
    );
}

export default Carexpenses;