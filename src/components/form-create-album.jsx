import React from 'react';

class FormNewAlbum extends React.Component {

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
                                id="album-name"
                                placeholder="Enter your album name"
                                maxLength="20"
                                value={this.props.nameAlbum}
                                onChange={this.props.onChangeName}
                            />
                        </li>
                        <li>
                            <label>Description</label>
                            <textarea
                                rows="6"
                                id="description-album"
                                placeholder="Description your album"
                                value={this.props.description}
                                onChange={this.props.onChangeDescription}
                            ></textarea>
                        </li>
                        <li>
                            <button>Done</button>
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