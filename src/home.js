import React from 'react';




class Home extends React.Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    
    render() {
        console.log(this.props)
        return (
            <>
            <h1>Home page</h1>
            <button onClick={() => { this.props.history.goBack() }}>Go Back </button>
            </>
        )
    }
}

export default Home;