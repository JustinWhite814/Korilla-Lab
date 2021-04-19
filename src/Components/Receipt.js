// assisted by Max Walker
import React from 'react';
import '../Receipt.css'

function Receipt({ receipt, setReceipts }) {

    const handleClick = (e) => {
    const newReceipts = receipt.map(receipt => {
   if(e.target.id == receipt.id){
       receipt.paid=true
   }return receipt 
})
   setReceipts(newReceipts) 
}
    return (
        <div class='container'>
            {receipt.map(receipt => (!receipt.paid && 
            <div className="receipt" id={receipt.id} key={receipt.id} onClick={handleClick}>
            <p>{receipt.person}</p>
            <p>main: {receipt.order.main}</p>
            <p>Protein: {receipt.order.protein}</p>
            <p>Rice: {receipt.order.rice}</p>
            <p>Sauce: {receipt.order.sauce}</p>
            <p>Drink: {receipt.order.drink}</p>
            <p>Cost: {receipt.order.cost}</p>
          
            </div> 
        
         ))}
</div>
        
    )
}
    


export default Receipt