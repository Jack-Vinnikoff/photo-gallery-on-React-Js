import React from 'react';
import Album from './components/album.jsx'
import NewAlbum from './components/create-element.jsx'
import FormNewAlbum from './components/form-create-album.jsx'

class LogicApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            albums:[{id:1,name:'first Album',description:'this is me first Album'}],
            isOpen:false,
            albumName:'',
            albumDescription:'',
            errors:false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.finishedAlbum = this.finishedAlbum.bind(this);
    }

    handleNameChange(event){
        console.log(event.target.value);
        this.setState({albumName:event.target.value})
        this.state.albums.forEach((item) => {
            let nameAlbum=item.name.toLowerCase();
            if(nameAlbum === event.target.value.toLowerCase()) {
                alert('double Name');
            }
            console.log(event.target.value);
            console.log(nameAlbum);
        })
    }

    handleDescriptionChange(event) {
        console.log(event.target.value);
        this.setState({albumDescription: event.target.value})
        console.log(this.state.albumDescription);
    }



    createAlbum () {
        this.setState({isOpen:!this.state.isOpen});
        this.setState({albumName:''})
        this.setState({albumDescription:''})
    }
    finishedAlbum (e) {
        e.preventDefault();
        if(this.state.errors === false){
            let newAlbum = this.state.albums.concat()
            newAlbum.push({id : 1, name : this.state.albumName, description : this.state.albumDescription})
            this.setState({albums : newAlbum})
            console.log(newAlbum);
            this.createAlbum();

        }
    }



    render () {
        console.log(223);
        const albums = this.state.albums;
        return (
            <div className="grid">
                {albums.map((item)=>{
                    return <Album key={item.id}
                                  name={item.name}
                                  description={item.description}
                    />
                })}
                <NewAlbum
                    click = {this.createAlbum.bind(this)}
                />
                {this.state.isOpen ?<FormNewAlbum
                        nameAlbum={this.state.albumName}
                        description={this.state.albumDescription}
                        onChangeName={this.handleNameChange}
                        onChangeDescription={this.handleDescriptionChange}
                        btnDone={this.finishedAlbum}
                    />:''}

            </div>
        )
    }

}

export default LogicApp;