import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    desc: 'Comfortable programming table',
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
    }
    render() {
    return (
        <div className="wrapper">
            <Header/>
            <Items items={this.state.items} />
            <Footer/>
        </div>
    );
    }
}

export default App;
