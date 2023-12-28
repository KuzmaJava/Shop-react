import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Gray chair',
                    image: 'chair-gray.webp',
                    desc: 'Fabulous gray chair',
                    category: 'chairs',
                    price: '50000'
                },
                {
                    id: 2,
                    title: 'Table',
                    image: 'programming-table.webp',
                    desc: 'Programming table',
                    category: 'tables',
                    price: '26000'
                },
                {
                    id: 3,
                    title: 'Sofa',
                    image: 'sofa.avif',
                    desc: 'Sofa for couple',
                    category: 'sofa',
                    price: '39000'
                },
                {
                    id: 4,
                    title: 'Lamp',
                    image: 'children-lamp.webp',
                    desc: 'Lamp for children',
                    category: 'lamps',
                    price: '2600'
                },
                {
                    id: 5,
                    title: 'Yellow wallpapers',
                    image: 'yellow-wallpapers.webp',
                    desc: 'Yellow wallpapers',
                    category: 'wallpapers',
                    price: '4500'
                }
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder} />
                <Items items={this.state.items} onAdd={this.addToOrder} />
                <Footer/>
            </div>
        );
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(element => element.id != id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(element => {
            if (element.id === item.id) {
                isInArray = true
            }
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
