import React, {Component} from 'react';
import axios from 'axios'
import Flashcard from './Flashcard/flashcard';
import CardTable from './CardTable'
import './app.css'


class App extends Component {
    state = {
        collection: [],
        card: {}
    }


componentDidMount(){
    console.log("component did mount");
    this.getAllCollections();

}
async getAllCollections(){
    let response = await axios.get('http://127.0.0.1:8000/collection/');
    console.log(response.data)
    this.setState({
        collection: response.data
    })
}

mapCollections(){
    return this.state.collection.map(flashcard =>
        <Flashcard
          key={flashcard.id}
          flashcard={flashcard}
        />
    )
}

render(){
    return(
        <div>
        <CardTable mapCollections={() => this.mapCollections()} />

        </div>
    );
        
           

        
    
}
}


export default App;