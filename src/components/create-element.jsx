import React from 'react';


class NewAlbum extends React.Component {

    render() {
        return (
            <div className="create-album">
                <button onClick={this.props.click}>+</button>

            </div>
        )
    }
}

export default NewAlbum;