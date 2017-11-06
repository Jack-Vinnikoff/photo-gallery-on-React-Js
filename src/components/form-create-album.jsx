import React from 'react';

class FormNewAlbum extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <p>Name Album <input type="text"></input></p>
                    <p>Description<textarea></textarea></p>
                    <p><input type="submit" value="Done"></input>
                        <input type="submit" value="Cancel"></input>
                    </p>

                </form>
            </div>
        )
    }
}

export default FormNewAlbum;