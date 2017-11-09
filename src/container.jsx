import React from 'react';
import Album from './components/album.jsx'
import NewAlbum from './components/create-element.jsx'
import FormNewAlbum from './components/form-create-album.jsx'

class LogicApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            albums:[{id:1,name:'first Album',description:'this is me first Album'},{id:2,name:'second Album',
            description:'this is my second Album'},{id:3,name:'first Album',description:'this is me first Album'},{id:4,name:'second Album',
                description:'this is my second Album'},{id:5,name:'first Album',description:'this is me first Album'},{id:6,name:'second Album',
                description:'this is my second Album'},{id:5,name:'first Album',description:'this is me first Album'},{id:6,name:'second Album',
            description:'this is my second Album'},{id:5,name:'first Album',description:'this is me first Album'},{id:6,name:'second Album',
    description:'this is my second Albumasdsad  dsaas asd asas sd asdas adas asds sad '},{id:5,name:'first Album',description:'this is me first Album'},{id:6,name:'second Album',
                description:'this is my second Albumasdsad  dsaas asd asas sd asdas adas asds sad '}],
            isOpen:false
        }
    }

    test() {
        alert(23);
    }

    createAlbum () {
        this.setState({isOpen:!this.state.isOpen});
        console.log(this.state.isOpen);
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
                {this.state.isOpen ?<FormNewAlbum />:''}

            </div>
        )
    }

}

export default LogicApp;