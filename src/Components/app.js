import React, {Component} from 'react';
import axios from 'axios'
import Flashcard from './Flashcard/flashcard';
import Collection from './Collection/collection';
import CardTable from './CardTable'
import CardFilter from './CardFilter'
import './app.css'



class App extends Component {
    state = {
        collection: [],
        card: {}
    }


componentDidMount(){
    console.log("component did mount");
    this.getAllCollections();
    this.getAllCards();

}
async getAllCollections(){
    let response = await axios.get('http://127.0.0.1:8000/collection/');
    console.log(response.data)
    this.setState({
        collection: response.data
    })
}
async getAllCards(){
    let response = await axios.get('http://127.0.0.1:8000/flash_cards/');
    console.log('allcards',response.data)
    this.setState({
        card: response.data
    })
}

mapCollections(){
    return this.state.collection.map(collection =>
        <Collection
          key={collection.id}
          collection={collection}
        />
    )
}

mapCards(){
    return this.state.card.map(flashcard =>
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