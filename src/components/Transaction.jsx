import {BiCheckCircle} from 'react-icons/bi'
import { useAuthContext } from '../utils/AuthContextProvider';
import { Navigate } from 'react-router';

const Transaction = () => {
    const {userData} = useAuthContext()

    if (!userData) return <Navigate replace history="cart" to="/login" />

    return ( 
        <div className="transaction-container">
            <div className="transaction">
                <div>
                    <BiCheckCircle size='44px' />
                    <h3>Thanks dear {userData.username}!</h3>
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