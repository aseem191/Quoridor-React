import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import Page from "./page.js"
import { updateGame, updateName, updateGameID } from "../redux/actions.js";

class Game extends React.Component{
	constructor(props){
		super(props);
		this.fetchGame = this.fetchGame.bind(this);
		this.brickMouseOver = this.brickMouseOver.bind(this);
		this.brickMouseLeave = this.brickMouseLeave.bind(this);
		this.clickBrick = this.clickBrick.bind(this);
		this.squareMouseOver = this.squareMouseOver.bind(this);
		this.squareMouseLeave = this.squareMouseLeave.bind(this);
		this.clickSquare = this.clickSquare.bind(this);


		this.props.dispatch(updateGame(null));
		var arr = [];
		for(var x = 0; x < 8; x++){
			arr[x] = [];
			for(var y = 0; y < 8; y++){
				arr[x][y] = "#4286f4";
			}
		}
		var arr2 = [];
		for(var x = 0; x < 8; x++){
			arr2[x] = [];
			for(var y = 0; y < 8; y++){
				arr2[x][y] = "#4286f4";
			}
		}
		var arr3 = [];
		for(var x = 0; x < 9; x++){
			arr3[x] = [];
			for(var y = 0; y < 9; y++){
				arr3[x][y] = 0;
			}
		}

		this.state = {
			squareColor: "#555",
			brickDefaultColor: "#4286f4",
			brickExistsColor: "#eda034",
			brickHighlightedColor: "#000863",
			player1Color: "#d30606",
			player2Color: "#30b500",
			playerArray: arr3.slice(),
			verticalBricks: arr.slice(),
			horizontalBricks: arr2.slice(),
		}

		var params = {uname: this.props.name}
		if(!this.props.gameID){
			fetch(urlname + "/player", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
				console.log("player response is " + JSON.stringify(data))
				if(!data.error){
					fetch(urlname + "/game/" + data.id).then(response => response.json()).then(data => {
						this.props.dispatch(updateGame(data));
						this.props.dispatch(updateGameID(data._id));
						console.log("game is " + JSON.stringify(data))
					})
				}
				
			})
			
		}
		
	}


	fetchGame(){
		if(this.props.gameID){
			fetch(urlname + "/game/" + this.props.gameID).then(response => response.json()).then(data => {
				this.props.dispatch(updateGame(data));
			})
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.fetchGame(), 2000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}


	squareMouseOver(event){
		if(this.props.game){
			if(this.props.game.PlayerTurn == this.props.name){
				
			}
		}
	}

	squareMouseLeave(event){
		if(this.props.game){
			if(this.props.game.PlayerTurn == this.props.name){
				
			}
		}
	}

	clickSquare(event){
		if(this.props.game){
			if(this.props.game.PlayerTurn == this.props.name){
				
			}
		}
	}

	clickBrick(event){
		if(this.props.game){
			if(this.props.game.PlayerTurn == this.props.name){
				
			}
		}
	}

	brickMouseOver(event){

		if(this.props.game){
			if(this.props.game.PlayerTurn == this.props.name){
				var x = event.currentTarget.getAttribute('x');
				var y = event.currentTarget.getAttribute('y');
				var orientation = event.currentTarget.getAttribute('orientation');
				if(orientation == "vertical"){
					var temparr = this.state.verticalBricks.slice();
					temparr[x][y] = this.state.brickHighlightedColor;
					this.setState({
						verticalBricks: temparr
					})
				}
				else if(orientation == "horizontal"){
					var temparr = this.state.horizontalBricks.slice();
					temparr[x][y] = this.state.brickHighlightedColor;
					this.setState({
						horizontalBricks: temparr
					})
				}
				else if(orientation == "middle"){
					var temparr = this.state.verticalBricks.slice();
					temparr[x][y] = this.state.brickHighlightedColor;
					this.setState({
						verticalBricks: temparr
					})
				}
			}
		}

		
	}

	brickMouseLeave(event){
		if(this.props.game){
			if(this.props.game.PlayerTurn == this.props.name){
				var x = event.currentTarget.getAttribute('x');
				var y = event.currentTarget.getAttribute('y');
				var orientation = event.currentTarget.getAttribute('orientation');
				console.log("mouseover" + x + y + orientation)
				if(orientation == "vertical"){
					var temparr = this.state.verticalBricks.slice();
					temparr[x][y] = this.state.brickDefaultColor;
					this.setState({
						verticalBricks: temparr
					})
				}
				else if(orientation == "horizontal"){
					var temparr = this.state.horizontalBricks.slice();
					temparr[x][y] = this.state.brickDefaultColor;
					this.setState({
						horizontalBricks: temparr
					})
				}
				else if(orientation == "middle"){
					var temparr = this.state.verticalBricks.slice();
					temparr[x][y] = this.state.brickDefaultColor;
					this.setState({
						verticalBricks: temparr
					})
				}
			}
		}
		
	}

	
	render(){
		return(
			<div>
				{this.props.game ?
				(
					<div>
					<div>
						<div x={0} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][0] == 1 ? this.state.player1Color : (this.state.playerArray[0][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][0] == 1 ? this.state.player1Color : (this.state.playerArray[1][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][0] == 1 ? this.state.player1Color : (this.state.playerArray[2][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][0] == 1 ? this.state.player1Color : (this.state.playerArray[3][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][0] == 1 ? this.state.player1Color : (this.state.playerArray[4][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][0] == 1 ? this.state.player1Color : (this.state.playerArray[5][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][0] == 1 ? this.state.player1Color : (this.state.playerArray[6][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][0] == 1 ? this.state.player1Color : (this.state.playerArray[7][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][0] == 1 ? this.state.player1Color : (this.state.playerArray[8][0] == 2 ? this.state.player2Color : this.state.squareColor)}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "315%"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={0} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][0] : this.state.verticalBricks[0][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][0] : this.state.horizontalBricks[1][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={0} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][0] : this.state.verticalBricks[1][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][0] : this.state.horizontalBricks[2][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={0} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][0] : this.state.verticalBricks[2][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][0] : this.state.horizontalBricks[3][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={0} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][0] : this.state.verticalBricks[3][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][0] : this.state.horizontalBricks[4][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={0} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][0] : this.state.verticalBricks[4][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][0] : this.state.horizontalBricks[5][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={0} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][0] : this.state.verticalBricks[5][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][0] : this.state.horizontalBricks[6][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={0} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][0] : this.state.verticalBricks[6][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][0] : this.state.horizontalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={0} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[7][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][0] : this.state.verticalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={0} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
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