import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import Page from "./page.js"
import { updateGame, updateName } from "../redux/actions.js";

class Game extends React.Component{
	constructor(props){
		super(props);
		var params = {uname: this.props.name}
		if(!this.props.game){
			fetch(urlname + "/player", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
				console.log("player response is " + JSON.stringify(data))
				if(!data.error){
					fetch(urlname + "/game/" + data.id).then(response => response.json()).then(data => {
						this.props.dispatch(updateGame(data));
						console.log("game is " + JSON.stringify(data))
					})
				}
				
			})
		}
		
	}

	
	render(){
		//Has game pieces
		return(
			<div>
				{this.props.game ?
				(
					<div style={{display: "inline"}}><div style={{height: "50px", width: "50px", backgroundColor: "#555"}}></div> <div style={{height: "50px", width: "50px", backgroundColor: "#555"}}></div></div>
				)
				: <h3>Loading game...</h3>
				}
				
			</div>
		)
	}
}

export default Page(connect(state=>state)(Game))