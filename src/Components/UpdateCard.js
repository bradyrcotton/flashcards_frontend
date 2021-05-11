import React, {Component} from 'react';



class UpdateCard extends Component {
    constructor(props) {
    super(props);
    this.state = {
        id: 0,
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
    // debugger;
    const Id ={id: this.state.id,}
    const card = {
        word: this.state.title,
        definition: this.state.artist,
        collection: this.state.album,
        
    }
    this.props.updateCard(Id,card);
    this.setState({
        word: '',
        definition: '',
        collection: '',
       
    });
}

render() {
    console.log('idididid',this.state.id)
    return(
        <div>
            <hr />
            <center>
                <h3>Update Card</h3>
            </center>
            <form onSubmit={this.handleSubmit}>
            <div className="row col align" >
            <div className="col-md-4">
                        <label>ID:</label>
                        <input type="number" name="id" 
                        onChange={this.handleChange} />
                        
                <div className="row col align">
                    
                        <label style={{marginLeft: "50px"}}>Word:</label>
                        <input type="text" name="word" 
                        onChange={this.handleChange} />
                    </div>
                    <div className="row col align" >
                        <label>Definition:</label>
                        <input type="text" name="definition" 
                        onChange={this.handleChange} />
                    
                    
                        <label style={{marginLeft: "190px"}}>Collection #:</label>
                        <input type="text" name="collection" 
                        onChange={this.handleChange} />
                    </div>
                    <div className="col-md-4" style={{marginLeft: "600px", top: "50px"}}>
                        <input  type="submit" value="Add"  />
                    </div>    
                </div>
                </div>
            </form>
        </div>
        
    );
    
}
}
export default UpdateCard;