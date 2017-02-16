import React from 'react';
import * as get_actions from '../../actions/get_request.js'; 
import {connect} from 'react-redux';

let emailOrUsername, password; 

class SignInForm extends React.Component {

	constructor (props) {
		super(props); 
	}

	sendSignUpInfo (event) {
		event.preventDefault(); 
		let user = { 
			emailOrUsername: emailOrUsername.value, 
			password: password.value
		}
		this.props.dispatch(get_actions.signInUser(user));
	}

	render () {

		return (
			<div className="signin-form-container">
				<h2>Sign In</h2>
				<form className="signin-form" onSubmit={this.sendSignUpInfo.bind(this)}>
		  			Email or Username:<br/>
		  		<input type="text" name="emailOrUsername" placeholder="" ref={element =>  emailOrUsername = element}/>
		  			<br/>
		  			Password:<br />
		  		<input type="text" name="lastname" placeholder="" ref={element => password = element}/>
		  			<br/>
		  			<br />
		  		<input type="submit" value="Sign In" />
				</form> 
			</div>
		)
	}

}

export default connect()(SignInForm);



	