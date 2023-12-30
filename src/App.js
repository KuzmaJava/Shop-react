import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
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
                    category: 'light',
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
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder} />
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

                {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
                <Footer/>
            </div>
        );
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem
        })
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({
                currentItems: this.state.items
            })
            return
        }
        this.setState({
            currentItems: this.state.items.filter(element => element.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(element => element.id !== id)})
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
