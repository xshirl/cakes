import React, { Component } from 'react'
import Cake from './components/Cake';
import Cart from './components/Cart';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: [
      {
        id: 1,
        name: "Valentine's Day Cake",
        image: 'https://fayda.com/wp-content/uploads/2017/02/Vday-Cake-2019-1000x1000-310x310.jpg',
        price: 40.00,
        selected: false
      },
      {
        id: 2,
        name: "Fresh Mango Cake",
        image: 'https://fayda.com/wp-content/uploads/2016/04/C030-310x310.jpg',
        price: 35.00,
        selected: false
      },
      {
        id: 3,
        name: "Fresh Fruit Cake",
        image: "https://fayda.com/wp-content/uploads/2016/05/ff-310x310.jpg",
        price: 30.00,
        selected: false
      },
      {
        id: 4,
        name: "Chocolate Mixed Fruit Cake",
        image: "https://fayda.com/wp-content/uploads/2016/05/Chocolate-Mix-Fruit-310x310.jpg",
        price: 33.00,
        selected: false
      },
      {
        id: 5,
        name: "Pink Lady Cake",
        image: "https://fayda.com/wp-content/uploads/2016/04/C034-310x310.jpg",
        price: 36.00,
        selected: false
      },
      {
        id: 6,
        name: "Mocha Truffle Cake",
        image: "https://fayda.com/wp-content/uploads/2016/04/C045-310x310.jpg",
        price: 34.00,
        selected: false
      },
      {
        id: 7,
        name: "Black Forest Cake",
        image: "https://fayda.com/wp-content/uploads/2016/04/BF-zoomed-310x310.jpg",
        price: 32.00,
        selected: false
      },
      {
        id: 8,
        name: "Taro Cake",
        image: "https://fayda.com/wp-content/uploads/2016/05/taro2-310x310.jpg",
        price: 28.00,
        selected: false
      },
      {
        id: 9,
        name: "Chestnut Cake",
        image: "https://fayda.com/wp-content/uploads/2016/04/C02-310x310.jpg",
        price: 25.00,
        selected: false
      },
      {
        id: 10,
        name: "Mixed Fruit Cake",
        image: "https://fayda.com/wp-content/uploads/2016/04/C01-310x310.jpg",
        price: 30.00,
        selected: false
      },
      {
        id: 11,
        name: "Mango Mousse",
        image: "https://fayda.com/wp-content/uploads/2016/04/C86-310x310.jpg",
        price: 35.00,
        selected: false
      },
      {
        id: 12,
        name: "Chocolate Mousse",
        image: "https://fayda.com/wp-content/uploads/2016/04/C85-310x310.jpg",
        price: 35.00,
        selected: false
      },
      {
        id: 13,
        name: "Strawberry Mousse",
        image: "https://fayda.com/wp-content/uploads/2016/04/C84-310x310.jpg",
        price: 35.00,
        selected: false
      },
      {
        id: 14,
        name: "Tiramisu",
        image: "https://fayda.com/wp-content/uploads/2016/04/C83-310x310.jpg",
        price: 35.00,
        selected: false
      },
      {
        id: 15,
        name: "Japanese Cheesecake",
        image: "https://fayda.com/wp-content/uploads/2016/04/C08-310x310.jpg",
        price: 25.00,
        selected: false
      },
      {
        id: 16,
        name: "Japanese Matcha Cheesecake",
        image: "https://fayda.com/wp-content/uploads/2017/05/C08M-310x310.jpg",
        price: 25.00,
        selected: false
      },
      {
        id: 17,
        name: "Napoleon Roll",
        image: "https://fayda.com/wp-content/uploads/2016/04/C0515-310x310.jpg",
        price: 24.00,
        selected: false
      },
      {
        id: 18,
        name: "Neopolitan Roll",
        image: "https://fayda.com/wp-content/uploads/2016/04/C0510-310x310.jpg",
        price: 25.00,
        selected: false
      },
      {
        id: 19,
        name: "Coffee Roll",
        image: "https://fayda.com/wp-content/uploads/2016/04/C0514-310x310.jpg",
        price: 25.00,
        selected: false
      },
      {
        id: 20,
        name: "Chocolate Roll",
        image: "https://fayda.com/wp-content/uploads/2016/04/C0512-310x310.jpg",
        price: 25.00,
        selected: false
      },
      {
        id: 21,
        name: "Vanilla Roll",
        image: "https://fayda.com/wp-content/uploads/2016/04/C0513-310x310.jpg",
        price: 25.00,
        selected: false
      },
      ],
      selectedCakes: []
    }
  }

  updateCart = (e, index) => {
    e.preventDefault();
    const { cakes, totalPrice, selectedCakes } = this.state;
    const cakesCopy = [...cakes];
    console.log(cakesCopy);
    const selectedCopy = [...selectedCakes];
    cakesCopy.map(cake => {
      if(cake.id === index) {
        cake.selected = true;
      }
      if(cake.selected === true) {
        selectedCopy.push(cake);
        cake.selected = false;
      }
    });
        this.setState({
          cakes: cakesCopy,
          selectedCakes: selectedCopy
        });

  }



  render() {

    return (
      <div className="container">
        <div className="heading"> Welcome to SCakes! </div>

      <div className="grid-container">
<Cake cakes={this.state.cakes} updateCart={this.updateCart} />
<Cart selectedCakes= {this.state.selectedCakes} />
      </div>

      </div>
    )
  }
}

