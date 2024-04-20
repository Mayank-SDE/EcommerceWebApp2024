import { useEffect, useState } from "react";
import { VscError } from 'react-icons/vsc';
import CartItem from "../components/CartItem";
import { Link } from 'react-router-dom';
const cartItems = [
    {
        productId: "sfsgsgsg",
        photo: "https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg",
        name: "Macbook",
        price: 3000,
        quantity: 4,
        stock: 10
    }
];
const subtotal = 4000;
const discount = 400;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const Cart = () => {
    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
    useEffect(() => {


        const timeoutId = setTimeout(() => {
            if (Math.random() > 0.5) {
                setIsValidCouponCode(true);
            } else {
                setIsValidCouponCode(false);
            }
        }, 1000)

        return () => {
            clearTimeout(timeoutId);
            setIsValidCouponCode(false);
        }
    }, [couponCode]);
    return (
        <div className="cart">
            <main>
                {cartItems.length > 0 ? cartItems.map((item, index) => <CartItem key={index} cartItem={item} />) : <h1>No items Added</h1>}
            </main>
            <aside>
                <p>Subtotal: ₹{subtotal}</p>
                <p>Shipping Charges: ₹{shippingCharges}</p>
                <p>Tax: ₹{tax}</p>
                <p>Discount  <em className="red"> -
                    ₹{discount}
                </em>
                </p>
                <p><b> Total : ₹{total}</b></p>
                <input placeholder="Coupon Code" type="text" value={couponCode} onChange={(event) => setCouponCode(event.target.value)} />
                {
                    couponCode && (isValidCouponCode ? <span className="green">₹{discount} off using the <code>{couponCode}</code></span> : <span className="red">Invalid Coupon <VscError /></span>)
                }

                {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
            </aside>
        </div>
    )
}

export default Cart