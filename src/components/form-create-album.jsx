import React from 'react';

class FormNewAlbum extends React.Component {
    constructor(props) {
        super(props)
        //
    }
    componentDidMount () {
        this.props.autoFocus();
    }


    render() {
        return (
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
                        </li>
                        <li>
                            <label>Description</label>
                            <textarea
                                rows="6"
                                id="description-album"
                                placeholder="Album description"
                                value={this.props.description}
                                onChange={this.props.onChangeDescription}
                            ></textarea>
                        </li>
                        <li>
                            <button onClick={this.props.btnDone} disabled={this.props.nameAlbum ==''?'disabled':''}>Done</button>
                        </li>
                        <li>
                            <button>Cancel</button>
                        </li>
                    </ul>

                </form>
                </div>
            </div>
        )
    }
}

export default FormNewAlbum;