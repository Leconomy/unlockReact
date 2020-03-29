import React from 'react';

import Modal from './portal/portal';
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="app">
                <Modal>
                    <p>这是modal内容</p>
                </Modal>
            </div>
        );
    }
}

export default App;