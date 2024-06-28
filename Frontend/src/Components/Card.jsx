import React from 'react';

const Card = (props) => {

    const addProductoCard = async (item)=>{
        console.log(item)
        props.addProductToCart(item);
    }

    return (
        <div className="container">
            <div className="row">
                {props.items.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card" onClick={()=>addProductoCard(item)}>
                            <img src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.productName}</h5>
                                <p className="card-text">
                                    {item.price}
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
