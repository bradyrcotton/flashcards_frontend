import Collection from './Collection/collection';
import Flashcard from './Flashcard/flashcard';
import FilteredCards from './CardFilter';
import CardCreator from './CardCreator';
import React, {Component} from 'react';
import UpdateCard from './UpdateCard';
import CardTable from './CardTable'
import axios from 'axios'
import './app.css'



class App extends Component {
    state = {
        collection: [],
        card: [],
        filteredCards: [],
        answer: true,
        
    }


componentDidMount(){
    console.log("component did mount");
    this.getAllCollections();
    this.getAllCards();

}
lip(){
        this.setState({
            
            answer: false
        })    
}
flip(){
        this.setState({
            
            answer: true
        })    
}
async getAllCollections(){
    let response = await axios.get('http://127.0.0.1:8000/collection/');
    this.setState({
        collection: response.data
    })
}
async getAllCards(){
    let response = await axios.get('http://127.0.0.1:8000/flash_cards/');
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
            
        
        this.setState({
            filteredCards: filteredCards
        })
    }
        
    async addNewCard(card){ 
        await axios.post('http://127.0.0.1:8000/flash_cards/', card)
         this.getAllCards();
    }

    async updateCard(cardId,card){
        await axios.put('http://127.0.0.1:8000/flash_cards/'+cardId.id+'/', card)
        
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
            lip={() => this.lip()}
            flip={() => this.flip()}
            answer={this.state.answer}
            />
        <CardCreator addNewCard={this.addNewCard.bind(this)}/>
        <UpdateCard updateCard={this.updateCard.bind(this)}/>
        </div>
    );
        
           

        
    
}
}


export default App;