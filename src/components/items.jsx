import React, {Component} from "react";
import Item from "./item";

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map( element => (
                    <Item key={element.id} item={element} />
                ))}
            </main>
        )
    }
}

export default Items