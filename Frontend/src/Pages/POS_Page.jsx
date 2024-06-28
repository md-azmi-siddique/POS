import MasterLayout from "../Components/MasterLayout.jsx";
import {useEffect, useRef, useState} from "react";
import { productsPOS } from "../Api Requests/api_request.js";
import Card from "../Components/Card.jsx";
import {ComponentToPrint} from "../Components/ComponentToPrint.jsx";
import {useReactToPrint} from "react-to-print";

const PosPage = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const componentRef = useRef(null);

    const addProductToCart = async (item) => {
        const findProduct = cart.find(cartItem => cartItem.id === item.id);

        if (findProduct) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    const newItem = {
                        ...cartItem,
                        quantity: cartItem.quantity + 1,
                        totalAmount: cartItem.price * (cartItem.quantity + 1)
                    };
                    return newItem;
                } else {
                    return cartItem;
                }
            });
            setCart(newCart);
        } else {
            const addProduct = {
                ...item,
                quantity: 1,
                totalAmount: item.price
            };
            setCart([...cart, addProduct]);
        }
    };

    useEffect(() => {
        (async () => {
            let res = await productsPOS();
            setProducts(res);
        })();
    }, []);

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.totalAmount, 0);
        setTotalAmount(total);
    }, [cart]);

    const removeProduct = (item) => {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
        setCart(newCart);
    };

    const handleReactToPrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handlePrint = () =>{
        handleReactToPrint()
    }

    return (
        <MasterLayout>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-7">
                        {products.length === 0 ? (
                            <h1>No Data</h1>
                        ) : (
                            <Card items={products} addProductToCart={addProductToCart} />
                        )}
                    </div>

                    <div className="col-lg-5">
                        <div style={{ display: "none"}}>
                            <ComponentToPrint cart={cart} totalAmount={totalAmount}
                            ref={componentRef}/>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-responsive">
                                <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Name:</td>
                                    <td>Price:</td>
                                    <td>Quantity:</td>
                                    <td>Total Amount:</td>
                                    <td>Action:</td>
                                </tr>
                                </thead>
                                <tbody>
                                {cart.length > 0 ? (
                                    cart.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.productName}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.totalAmount}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => removeProduct(item)}>
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No Items</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                            <h2>Total Amount: BDT {totalAmount}</h2>
                        </div>
                        <div className="mt-3">
                            {
                                totalAmount > 0 ? (
                                        <button className="btn btn-success btn-block mt-2"
                                                            onClick={handlePrint}>
                                            Pay Now
                                        </button>
                                    ) :
                                    (<h2>Add Product</h2>)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </MasterLayout>
    );
};

export default PosPage;
