import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import Page from "./page.js"
import { updateGame, updateName, updateGameID } from "../redux/actions.js";

class LoginPage extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: ""
		}

		this.changeName = this.changeName.bind(this);
		this.startGame = this.startGame.bind(this);
	}

	changeName(event){
		this.setState({
			name: event.currentTarget.value
		})
	}

	startGame(event){
		this.props.dispatch(updateName(this.state.name));
		console.log("done")
	}

	render(){
		return(
			<div>
				<h3>Enter your name:</h3>
				<form onSubmit={e => {e.preventDefault();}}>
					<input type='text' onChange={this.changeName}/>
				</form>
				<Link  href={{ pathname: '/game' }}>
					<button onClick={this.startGame}>Start game!</button>
				</Link>
			</div>
		)
	}
}

export default Page(connect(state=>state)(LoginPage))