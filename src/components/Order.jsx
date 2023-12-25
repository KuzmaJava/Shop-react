import React, {Component} from "react";

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./images/" + this.props.item.image} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}₽</p>
            </div>
            )
    }
}

export default Order