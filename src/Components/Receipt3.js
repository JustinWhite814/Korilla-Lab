import React from 'react';

function Receipt3({ receipt }) {
 if(receipt.paid === false){
    return (
        <div className="receipt">
            <ul>
            <p>{receipt.person}</p>
            <p>main: {receipt.order.main}</p>
            <p>Protein: {receipt.order.protein}</p>
            <p>Rice: {receipt.order.rice}</p>
            <p>Sauce: {receipt.order.sauce}</p>
            <p>Drink: {receipt.order.drink}</p>
            <p>Cost: {receipt.order.cost}</p>
            </ul>
           
    </div>
    );
} else {
    return null
}
}

export default Receipt3