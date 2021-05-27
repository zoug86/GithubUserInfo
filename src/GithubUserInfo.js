import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "",
            name: ""
        }
    }

    async componentDidMount() {
        let url = `https://api.github.com/users/`;
        let response = await axios.get(`${url}${this.props.username}`);
        this.setState({
            imgUrl: response.data.avatar_url,
            name: response.data.name
        })
    }
    render() {
        return (
            <div>
                <h1>Github Name: {this.state.name}</h1>
                <img src={this.state.imgUrl} alt="" />
            </div>
        )
    }
}

export default GithubUserInfo;