import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // axios.get('/auth/checkLogging').
        //     then((response) => {
        //         console.log('hello world', response.data.acceptedRequests)
        //         this.setState({
        //             requests: response.data.acceptedRequests,
        //             teacherid: response.data._id,
        //             image: response.data.image
        //         })
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    render() {
        return (
            <h1>Helllllo</h1>
        )
    }    
}

export default Home;
