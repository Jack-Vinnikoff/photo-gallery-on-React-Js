import React from 'react';
import ReactDom from 'react-dom';

class FormNewAlbum extends React.Component {
    componentDidMount () {
        this.props.autoFocus();
    }

    test (id) {
        this.props.removingSpaces(id)
    }

    render() {
        return ReactDom.createPortal (
            <div className="modal-window">
                <div className="bg-window">
                </div>
                <div className="modal-window-form">
                <form>

                    <ul className="flex-outer">
                        <li>
                            <label>Album Name</label>
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
                            <label>Description</label>
                            <textarea
                                rows="6"
                                id="description-album"
                                placeholder="Album description"
                                value={this.props.description}
                                onKeyUp={this.props.removingSpaces}
                                onChange={this.props.onChangeDescription}

                            ></textarea>
                        </li>
                        <li>
                            <button
                                onClick={this.props.btnDone}
                                disabled={this.props.nameAlbum ===''||this.props.errorName?'disabled':''}
                            >Done
                            </button>
                        </li>
                        <li>
                            <button>Cancel</button>
                        </li>
                    </ul>

                </form>
                </div>
            </div>,
            document.getElementById('root')
        );
    }
}

export default FormNewAlbum;