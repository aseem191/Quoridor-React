import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import Page from "./page.js"
import { updateGame, updateName } from "../redux/actions.js";

class Game extends React.Component{
	constructor(props){
		super(props);
		var arr = [];
		for(var x = 0; x < 8; x++){
			arr[x] = [];
			for(var y = 0; y < 8; y++){
				arr[x][y] = "#4286f4";
			}
		}


		this.state = {
			pieceColor: "#555",
			verticalBricks: arr.slice(),
			horizontalBricks: arr.slice(),
		}

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
					<div>
					<div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][0]}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][1]}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][2]}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][3]}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][4]}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][5]}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][6]}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][7]}}></div>
						<div style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
					</div>
					<div style={{lineHeight: "320%"}}>
						<br/>
					</div>
					<div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.verticalBricks[0][0]}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.verticalBricks[0][1]}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.verticalBricks[0][2]}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.verticalBricks[0][3]}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.verticalBricks[0][4]}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.verticalBricks[0][5]}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.verticalBricks[0][6]}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.verticalBricks[0][7]}}></div>
						<div style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.pieceColor}}></div>
					</div>
					</div>
				)
				: <h3>Loading game...</h3>
				}
				
			</div>
		)
	}
}

export default Page(connect(state=>state)(Game))