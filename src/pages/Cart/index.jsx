import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { useNavigate } from "react-router-dom";
 
export default function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        clearCart();
        navigate("/checkout");
    };

    return (
        <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                    <div className="flex justify-between items-center" key={item.id}>
                        <div className="flex gap-4">
                            <img src={item.imageUrl} alt={item.title} className="rounded-md h-24" />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-bold">{item.title}</h1>
                                <p className="text-gray-600">{item.discountedPrice}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                onClick={() => {
                                    addToCart(item)
                                }}
                            >
                                +
                            </button>
                            <p>{item.quantity}</p>
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                onClick={() => {
                                    removeFromCart(item)
                                }}
                            >
                                -
                            </button>
                        </div>
                    </div>
                ))}
                <p className="text-lg font-bold">Total: {getCartTotal()}</p>
            </div>
            {
                cartItems.length > 0 ? (
                    <div className="card-actions">

                        <button className="btn" onClick={() => clearCart()}>
                            Clear cart
                        </button>
                        <button className="btn btn-primary" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                ) : (
                    <h1>Your cart is empty</h1>
                )
            }
        </div>
    )
}