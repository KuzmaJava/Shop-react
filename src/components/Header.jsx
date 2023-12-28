import React, {useState} from 'react'
import {FaShoppingCart} from "react-icons/fa"
import Order from "./Order";

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(element => sum+= Number.parseFloat(element.price))
    return (<div>
        {props.orders.map(element => (
            <Order onDelete={props.onDelete} key={element.id} item={element} />
        ))}
        <p className='sum'>Sum is : {new Intl.NumberFormat().format(sum)}₽</p>
    </div>)
}

const showNothing = () => {
    return <div className='empty'>
        <h2>No goods :(</h2>
    </div>
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>House Stuff</span>
                <ul className='nav'>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                className={`shop-cart-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}