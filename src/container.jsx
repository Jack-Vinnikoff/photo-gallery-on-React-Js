import React from 'react';
import Album from './components/album.jsx'

class LogicApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            albums:[{id:1,name:'first Album',description:'this is me first Album'},{id:2,name:'second Album',
            description:'this is my second Album'}]
        }
    }



    render () {
        const albums = this.state.albums;
        return (
            <div>
                {albums.map((item)=>{
                    return <Album key={item.id}
                                  name={item.name}
                                  description={item.description}
                    />
                })}

            </div>
        )
    }

}

export default LogicApp;