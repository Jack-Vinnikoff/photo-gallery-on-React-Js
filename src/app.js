import React from 'react';
import ReactDom from 'react-dom';
import LogicApp from './container.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <div className="top"><span>Photo Gallery</span></div>
                <LogicApp />
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('container')
);