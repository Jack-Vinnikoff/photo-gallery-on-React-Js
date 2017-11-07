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
                            <label for="album-name">Album Name</label>
                            <input type="text"  id="album-name" placeholder="Enter your album name"/>
                        </li>
                        <li>
                            <label for="description-album">Description</label>
                            <textarea rows="6" id="description-album" placeholder="Description your album"></textarea>
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