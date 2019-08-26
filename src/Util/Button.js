import React, {Component} from 'react';
import BSButton from 'react-bootstrap/Button';

class Button extends Component {
    render(){
        return (
            <BSButton variant={this.props.variant} 
            onClick={this.props.onClick} 
            size={this.props.size}
            active={this.props.isActive}>
                {this.props.text}
            </BSButton>
        );
    }
}

export default Button;