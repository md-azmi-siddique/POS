import React from 'react';
export const ComponentToPrint = React.forwardRef((props, ref) => {
    const {cart, totalAmount} = props;
    return (
        <div ref={ref} className="pt-5">
            <table className="table">
                <thead>
                <tr>
                    <td>#</td>
                    <td>Name:</td>
                    <td>Price:</td>
                    <td>Quantity:</td>
                    <td>Total Amount:</td>

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
    );
});