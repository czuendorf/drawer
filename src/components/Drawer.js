import React from 'react';

class Drawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    open() {
        this.setState({
            isOpen: true
        });
    }

    toggle() {
        if (this.state.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    close() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        let className = 'drawer';
        if (this.state.isOpen) {
            className += ' open';
        }

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default Drawer;