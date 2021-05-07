import React, {Component} from 'react';
import axios from 'axios'
import Flashcard from './Flashcard/flashcard';
import Collection from './Collection/collection';
import CardTable from './CardTable'

import './app.css'
import FilteredCards from './CardFilter';



class App extends Component {
    state = {
        collection: [],
        card: [],
        filteredCards: []
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
          filterCollectionById = {(collectionId) => this.filterCollectionById(collectionId)}
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

// mapFilterCards(){
//     return this.state.filteredCards.map(filteredCards =>
//         <FilteredCards
//         key={filteredCards.id}
//         filteredCards={filteredCards}
//         />
//     )
// }

filterCollectionById(collectionId){
    console.log("COLLECTION ID", collectionId);
    console.log('STATECARD',this.state.card)
    let card = this.state.card;
    
        let i=0;
        let filteredCards = this.state.card.filter((card) => {
            if (this.state.card[i].collection === collectionId){
                i++
                return true;    
        }
            else{
                i++
                return false;
            }
        })
            
        console.log('FILTERCards',filteredCards);
        
        return(
        filteredCards.map((FCards) =>{
            console.log(FCards)
           return <FilteredCards
            key={FCards.id}
            FCards={FCards}
            />}
        
        ))};
        
    
        


render(){
    return(
        <div>
        <CardTable 
            mapCollections={() => this.mapCollections()} 
            card={this.state.card}
        />
        
        </div>
    );
        
           

        
    
}
}


export default App;