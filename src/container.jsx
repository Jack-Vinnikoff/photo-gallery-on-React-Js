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

            albumName:'', //Имя нового альбома

            albumDescription:'', // Опсиание для нового альбома

            errorName:false,  // Проверка на ошибки в поле с именем нового альбома при создании

            errorDescription:false // Проверка на ошибки в поле с описанием альбома при создании
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.finishedAlbum = this.finishedAlbum.bind(this);
        this.removingSpacesInNameAlbum = this.removingSpacesInNameAlbum.bind(this);
        this.autoFocusInInput = this.autoFocusInInput.bind(this);
    }


    // Фокусировка на Input с названием нового альбома
    autoFocusInInput(event) {
        if (this.state.isOpen) {
            document.getElementById('albumN').focus()
            console.log(document.activeElement);

            //Когда input Album Name выходит из фокуса, корректируются пробелы, чтоб в конце слова не было лишних пробелов
            albumN.onblur = () =>{
                let newNameAlbum = this.state.albumName.trim();
                this.setState({albumName:newNameAlbum})
            }
        }
    }

    handleNameChange(event){

        this.setState({albumName:event.target.value})
        this.checkNameAlbum(event);
        console.log('====',this.state.albumName);
        //console.log(event.target.value);

    }

    checkNameAlbum (event) {
        this.state.albums.some((item,i) => {
            let nameAlbum = item.name.toLowerCase();
            //console.log(nameAlbum);
            if(nameAlbum === event.target.value.toLowerCase()) {
                this.setState({errorName:true},() => {console.log(this.state.errorName,i);})
                return true;
            }
            this.setState({errorName:false},()=>{console.log(this.state.errorName);})
        })
    }

    //Метод который убирает пробел в самом начале поля Album Name
    removingSpacesInNameAlbum (event) {
        if(this.state.albumName.length === 1 && event.keyCode === 32){
            this.setState({albumName:''});
        }
        console.log(document.activeElement);

    }

    handleDescriptionChange(event) {
        console.log(event.target.value);
        console.log(document.activeElement);
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
                        removingSpaces={this.removingSpacesInNameAlbum}
                        autoFocus={this.autoFocusInInput}
                    />:''}

            </div>
        )
    }

}

export default LogicApp;