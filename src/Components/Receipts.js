// assisted by Max Walker
import React from 'react';
import '../Receipt.css'

function Receipts({ receipt, setReceipts }) {

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
            <p><span>Main:</span> {receipt.order.main}</p>
            <p><span>Protein:</span> {receipt.order.protein}</p>
            <p><span>Rice:</span> {receipt.order.rice}</p>
            <p><span>Sauce:</span> {receipt.order.sauce}</p>
            <p><span>Drink:</span> {receipt.order.drink}</p>
            <p><span>Cost:</span> {receipt.order.cost}</p>
          
            </div> 
        
         ))}
</div>
        
    )
}
    


export default Receipts