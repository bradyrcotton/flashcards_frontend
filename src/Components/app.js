import React, {Component} from 'react';
import axios from 'axios'
import Flashcard from './Flashcard/flashcard';
import Collection from './Collection/collection';
import CardTable from './CardTable'
import CardCreator from './CardCreator';
import './app.css'
import FilteredCards from './CardFilter';



class App extends Component {
    state = {
        collection: [],
        card: [],
        filteredCards: [],
        answer: true
    }


componentDidMount(){
    console.log("component did mount");
    this.getAllCollections();
    this.getAllCards();

}
flip(answer){
    // debugger;
    let newAnswer = answer
        this.setState({
            answer: newAnswer
        })    
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
        
        this.setState({
            filteredCards: filteredCards
        })
    }
        
    async addNewCard(card){ 
        console.log(card)
        await axios.post('http://127.0.0.1:8000/flash_cards/', card)
         this.getAllCards();
    }


render(){
    return(
        <div>
        <CardTable 
            mapCollections={() => this.mapCollections()} 
            card={this.state.card}
        />
        <FilteredCards
            filteredCards={this.state.filteredCards}
            flip={() => this.flip(this.state.answer)}
            answer={this.state.answer}
            />
        <CardCreator addNewCard={this.addNewCard.bind(this)}/>
        </div>
    );
        
           

        
    
}
}


export default App;