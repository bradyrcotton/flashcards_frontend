import React, {Component} from 'react';
import axios from 'axios'
import Flashcard from './Flashcard/flashcard';
import CardTable from './CardTable'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";


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
    let response = await axios.get('http://127.0.0.1:8000/flash_cards/');
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