import {BiCheckCircle} from 'react-icons/bi'

const Transaction = () => {
    return ( 
        <div className="transaction-container">
            <div className="transaction">
                <div>
                    <BiCheckCircle size='44px' />
                    <h3>Thanks for your order!</h3>
                    <p>the order confirmation has been sent</p>
                </div>
                <div>
                    <h4>transaction Date</h4>
                    <p>Thursday, July 3, 2023</p>
                    <br/>
                    <h4>Payment Method</h4>
                    <p>Mastercard ending with 3426</p>
                    <br/>
                    <p>Track order</p>
                </div>
            </div>
        </div>
     );
}
 
export default Transaction;