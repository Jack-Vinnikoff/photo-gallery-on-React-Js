import React from 'react';

class Album extends React.Component {
    render () {
        return (
            <div className="album-item">
                <p className="album-name">{this.props.name}</p>
                <p className="album-description"> {this.props.description}</p>
            </div>
        )
    }
}

export default Album;