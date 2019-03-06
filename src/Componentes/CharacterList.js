import React, { Component, Fragment } from 'react';
import Characters from './Characters';
import axios from 'axios';
import Details from './Details';
import NavBar from './Navbar';



const api_rickandmorty = `https://rickandmortyapi.com/api/character`;



class CharacterList extends Component {
  constructor(){
    super();
    this.state = {
        items: [],
    }
}

componentDidMount(){
    // console.log(pages)
    axios.get('https://rickandmortyapi.com/api/character/?page=1')
    .then(res =>{
        
        const characterData = res.data.results;
        this.setState({
           items: characterData,
        })
      }).catch(console.log('error'))
}
  render(){
    const { items } = this.state;
    // console.log(items);
    return(
    <div>

    <NavBar/> 
    </div>
     );
  }
}

 export default CharacterList;



// import React, { Component } from "react";
// import CardList from "./CardList";
// import { Button } from 'react-bootstrap';


// // const api_key = "Yrk3AZ1yOT7PIBbWJNrkB541cLBnff5w6cSZH9qr";
// const api_rickandmorty = `https://rickandmortyapi.com/api/character`;

// const newCard = element => {
//   console.log(element);
//   const names = Object.values(element);
//   names.forEach(name => {
//     console.log(name);
//     // this.setState = ({
//     //   name
//     // })
//   });
// };

// const newPage = rickandmorty_data => {
//   const info = Object.values(rickandmorty_data);
//   info.forEach(element => {
//     const card = newCard(element);
//     const nextPage = element.next;
//     fetch(nextPage).then(data2 => {
//       return data2;
//     });
//   });
// };

// class CharacterList extends Component {
//   constructor({id, name, image}) {
//     super();
//     this.state = {
//       id, 
//       name,
//       image,
//       data: null
//     };
//   }

//   componentWillMount() {
//     fetch(api_rickandmorty)
//       .then(data => {
//         return data.json();
//       })
//       .then(rickandmorty_data => {
//         const data = newPage(rickandmorty_data);
//         this.setState({ data });
//       });
//   }

//   render(){
//     const {name} = this.setState;
//     console.log('hola');
//     console.log(name)
//     return(
//       <CardList ></CardList>
//     )
//   }


// }

// export default CharacterList;