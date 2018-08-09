import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import Page from "./page.js"
import { updateGame, updateName } from "../redux/actions.js";

class Game extends React.Component{
	constructor(props){
		super(props);
		
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
	}

	render(){
		return(
			<div>
				<h3>Enter your name:</h3>
				<form onSubmit={e => {e.preventDefault();}}>
					<input type='text' onChange={this.changeName}/>
				</form>
				
				<button onClick={this.startGame}>Start game!</button>
				
			</div>
		)
	}
}

export default Page(connect(state=>state)(Game))