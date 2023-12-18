import { Link } from "react-router-dom";

const CheckoutPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/assets/checkout.jpeg)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Checkout successful!</h1>
                    <p className="mb-5">Thank you for your purchase. Soon you will receive the delivery details.</p>

                    <Link to="/" className='btn btn-primary'>
                        Back to shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage;