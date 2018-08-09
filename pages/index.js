import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import { updateGame, updateName } from "../redux/actions.js";

class LoginPage extends React.Component{
	constructor(props){
		this.changeName = this.changeName.bind(this);
		this.startGame = this.startGame.bind(this);
	}

	this.changeName(event){
		this.props.dispatch(updateName(event.currentTarget.value));
	}

	this.startGame(event){

	}

	render(){
		return(
			<div>
				<h3>Enter your name:</h3>
				<form onSubmit={e => {e.preventDefault();}>
					<input type=”text” onChange={this.changeName}/>
				</form>

				<button onClick={this.startGame}>Start game!</button>
			</div>
		)
	}
}

export default Page(connect(state=>state)(LoginPage))