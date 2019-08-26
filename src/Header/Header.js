import React, {Component} from 'react';
import JumboTron from 'react-bootstrap/Jumbotron';

class Header extends Component {
    render(){
        return (
            <header className="Header">
                <JumboTron>
                    <h1>My App :)</h1>
                </JumboTron>
            </header>
        );
    }
}
export default Header;
