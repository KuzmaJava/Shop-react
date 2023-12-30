import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'sofa',
                    name: 'Sofa'
                },
                {
                    key: 'light',
                    name: 'Light'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(element => (
                    <div key={element.key} onClick={() => this.props.chooseCategory(element.key)}>{element.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories