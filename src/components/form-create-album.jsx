import React from 'react';
import ReactDom from 'react-dom';

class FormNewAlbum extends React.Component {
    componentDidMount () {
        this.props.autoFocus();
    }


    render() {
        return ReactDom.createPortal (
            <div className="popup">
                <a href="#" className="close">X</a>
                <form>
                    <ul className="flex-outer">
                        <li>
                            <label htmlFor="albumN">Album Name</label>
                            <input
                                type="text"
                                id="albumN"
                                placeholder="Enter your album name"
                                maxLength="20"
                                value={this.props.nameAlbum}
                                onKeyUp={this.props.removingSpaces}
                                onChange={this.props.onChangeName}
                            />
                            <br />
                            <span
                                className={this.props.errorName ?'':'testnone'}

                            >Имя уже существует</span>
                        </li>
                        <li>
                            <label htmlFor="description-album">Description</label>
                            <textarea
                                rows="6"
                                id="description-album"
                                placeholder="Album description"
                                value={this.props.description}
                                onChange={this.props.onChangeDescription}

                            ></textarea>
                        </li>
                        <li>
                            <button
                                onClick={this.props.btnDone}
                                disabled={this.props.nameAlbum ===''||this.props.errorName?'disabled':''}
                            >Create
                            </button>
                        </li>
                    </ul>
                </form>
            </div>,
            document.getElementById('root')
        );
    }
}

export default FormNewAlbum;