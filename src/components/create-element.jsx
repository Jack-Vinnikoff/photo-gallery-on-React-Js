import React from 'react';


class NewAlbum extends React.Component {

    render() {
        return (
            <div className="create-album">
                <div className="bg-box">
                    <button onClick={this.props.click}className="create-album-btn" >+</button>
                </div>
            </div>
        )
    }
}

export default NewAlbum;