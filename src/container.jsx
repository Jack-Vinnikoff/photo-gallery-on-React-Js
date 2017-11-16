import React from 'react';
import Album from './components/album.jsx'
import NewAlbum from './components/create-element.jsx'
import FormNewAlbum from './components/form-create-album.jsx'

class LogicApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //Массив объектов где хранятся все созданные альбомы с описанием и именем
            albums:[{id:1,name:'first Album',description:'this is me first Album'}],
            // элемент который сигнализирует об открытие модального окна с формой создания альбома
            isOpen:false,
            //Имя нового альбома
            albumName:'',
            // Опсиание для нового альбома
            albumDescription:'',
            // Проверка на ошибки в поле с именем нового альбома при создании
            errorName:false,
            // Проверка на ошибки в поле с описанием альбома при создании
            errorDescription:false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.finishedAlbum = this.finishedAlbum.bind(this);
    }

    handleNameChange(event){
        this.setState({albumName:event.target.value})

        this.removingSpacesInNameAlbum(event);
        this.checkNameAlbum(event);
        console.log(event.target.value);
    }

    checkNameAlbum (event) {

        this.state.albums.some((item,i) => {
            let nameAlbum = item.name.toLowerCase();
            if(nameAlbum === event.target.value.toLowerCase()) {
                this.setState({errorName:true},() => {console.log(this.state.errorName,i);})
                return true;
            }
            this.setState({errorName:false},()=>{console.log(this.state.errorName);})
        })
    }

    // Метод который удаляет пробелы в поле с именем Альбома
    removingSpacesInNameAlbum (event) {
        let nameAlbum = event.target.value;
        let arr = nameAlbum.split(' ');
        let newName = arr.filter((item) => item != '').join(' ');
        this.setState({albumName: newName})

    }

    handleDescriptionChange(event) {
        console.log(event.target.value);
        this.setState({albumDescription: event.target.value})
    }



    createAlbum () {
        this.setState({isOpen:!this.state.isOpen});
        this.setState({albumName:''})
        this.setState({albumDescription:''})
    }
    finishedAlbum (e) {
        e.preventDefault();
        if(this.state.errorDescription === false){
            let newAlbum = this.state.albums.concat()
            newAlbum.push({id : 2, name : this.state.albumName, description : this.state.albumDescription})
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