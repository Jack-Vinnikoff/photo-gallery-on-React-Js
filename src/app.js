import React from 'react';
import ReactDom from 'react-dom';
import LogicApp from './container.jsx';

class App extends React.Component {
    render () {
        return (
            <div className="field">
                <LogicApp />
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);