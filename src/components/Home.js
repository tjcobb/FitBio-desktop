import React, {Component} from "react";
import { API } from 'aws-amplify';
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            notes: []
        }
    }

    async componentDidMount() {
        const weights = await API.get("weights", "/weight/tyler");
        console.log(weights);
    }

    renderHome() {
        return <div className="lander">
            <h1>FitBio</h1>
            <p>Log your fitness!</p>
        </div>
    }

    renderLander() {
        return (
            <div className="lander">
                <h1>FitBio</h1>
                <p>A fitness tracking app</p>
                <div>
                    <Link to="/login" className="btn btn-info btn-lg">
                        Login
                    </Link>
                    <Link to="/signup" className="btn btn-success btn-lg">
                        Sign-Up
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Home">
                {this.props.isAuthenticated ?
                    this.renderHome() :
                    this.renderLander()
                }
            </div>
        );
    }
}