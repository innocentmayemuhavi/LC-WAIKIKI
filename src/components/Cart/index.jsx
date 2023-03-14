import { useContext } from "react"
import { AuthContext } from "../Context"
import Header from "../Header"
import './index.css'


const CartPage =()=>{
const {Cart}=useContext(AuthContext)


    return<main className="fade">
        <Header/>
<section className="cart-header">
    <h3>Your Cart</h3>
    <p>({Cart.clothes.length} items)</p>

</section>

    </main>

}

export default CartPage


