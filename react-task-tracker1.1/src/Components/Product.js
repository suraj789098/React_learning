import React, { useState } from 'react';

let Product =()=>
{
    let [state, setState]= useState({
        product: {
            sno: 'AA01',
            name: 'Watch',
            price: 1200,
            qty: 2
        }
    });
    let {product}=state;

    let incrQty = () =>
    {
        setState((state)=>({
        product: {
            sno: 'AA01',
            name: 'Watch',
            price: 1200,
            qty: state.product.qty+1
    }} ));
    };

    let decrQty=()=>
    {
        setState((state)=>({
            product: {
            ...state.product,
            qty: state.product.qty-1 >0 ? state.product.qty-1 : 1
      }  }));
    };
    return(
        <>
        <div className='card'>
            <h1>Product Item</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='tables'>
                        <thead>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>qty</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.sno}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn1" onClick={incrQty}>+</button>
                                    {product.qty}
                                    <button className="btn2" onClick={decrQty}>-</button></td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
        </>
    )
};

export default Product;