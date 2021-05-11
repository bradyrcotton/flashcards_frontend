import React, {Component} from 'react';



class CardCreator extends Component {
    constructor(props) {
    super(props);
    this.state = {
        word: '',
        definition: '',
        collection: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}




handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });

}

handleSubmit(event) {
    event.preventDefault();
    const card = {
        word: this.state.title,
        definition: this.state.artist,
        collection: this.state.album,
        
    }
    this.props.addNewCard(card);
    this.setState({
        word: '',
        definition: '',
        collection: '',
       
    });
}

render() {
    return(
        <div>
            <hr />
            <center>
                <h3>Add New Card!</h3>
            </center>
            <form onSubmit={this.handleSubmit}>
                <div className="row col align">
                    <div className="col-md-4">
                        <label style={{marginLeft: "50px"}}>Word:</label>
                        <input type="text" name="title" 
                        onChange={this.handleChange} />
                    </div>
                    <div className="row col align" >
                        <label>Definition:</label>
                        <input type="text" name="artist" 
                        onChange={this.handleChange} />
                    
                    
                        <label style={{marginLeft: "190px"}}>Collection #:</label>
                        <input type="text" name="album" 
                        onChange={this.handleChange} />
                    </div>
                    <div className="col-md-4" style={{marginLeft: "600px", top: "50px"}}>
                        <input  type="submit" value="Add"  />
                    </div>    
                </div>
            </form>
        </div>
    );
}
}
export default CardCreator;