import React, {Component} from "react";
import "./Home.css";

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            notes: []
        }
    }

    renderLander() {
        return <div className="lander">
            <h1>FitBio</h1>
            <p>Log your fitness!</p>
        </div>
    }

    renderHome() {
        return (
            <div className="home">
                <p>Logged in!</p>
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