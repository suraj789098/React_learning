import React, { useState } from 'react';

let ShopCart =()=>
{
    let [state, setState]= useState({
        products:[{
            sno: 'AA01',
            name: 'Samsung Watch',
            price: 1200,
            qty: 2
        },
        {
            sno: 'AA02',
            name: 'Apple Watch',
            price: 1500,
            qty: 2
        },
        {
            sno: 'AA03',
            name: 'MIWatch',
            price: 1300,
            qty: 2
        },
        {
            sno: 'AA04',
            name: 'Realme Watch',
            price: 1400,
            qty: 2
        },
        {
            sno: 'AA05',
            name: 'Nokia Watch',
            price: 1000,
            qty: 2
        }

    ]});
    let {products}=state;

    let incrQty = (prodId) =>
    {
        let items=products.map(product => {
            if(product.sno=== prodId)
            {
                return{
                    ...product,
                    qty:product.qty+1
                }
            }
            return product;
        });
        setState((state)=>({
            products: [...items]
     } ));
    };

    let decrQty=(prodId)=>
{
    let items=products.map(product => {
        if(product.sno=== prodId)
        {
            return{
                ...product,
                qty: product.qty-1 >0 ? product.qty-1 : 1
            }
        }
        return product;
    });
    setState((state)=>({
        products: [...items]
    }));
};

    return(
        <>
        <div className='card'>
            <h1>Shopping Cart </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='tables'>
                        <thead>
                            <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>qty</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                products.map((product)=> {
                                    return (
                                        <tr key={product.sno}>
                                            <td>{product.sno}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <button className="btn1" onClick={() =>incrQty(product.sno)}>+</button>
                                                {product.qty}
                                                <button className="btn2" onClick={() => decrQty(product.sno)}>-</button>
                                            </td>
                                            <td>{product.qty * product.price}</td>
                                        </tr>
                                )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
};

export default ShopCart;