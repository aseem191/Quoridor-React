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
				arr3[x][y] = "#555";
			}
		}

		this.state = {
			squareColor: "#555",
			brickDefaultColor: "#4286f4",
			brickExistsColor: "#eda034",
			brickHighlightedColor: "#000863",
			squareHighlightedColor: "#000000",
			player1Color: "#d30606",
			player2Color: "#30b500",
			playerArray: arr3.slice(),
			verticalBricks: arr.slice(),
			horizontalBricks: arr2.slice(),
			player1BricksLeft: 10,
			player2BricksLeft: 10,
			errorMsg: ""
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

				for(var i = 0; i < data.Player1Bricks.length; i++){
					if(data.Player1Bricks[i].vertical){
						var temparr = this.state.verticalBricks.slice();
						temparr[data.Player1Bricks[i].x][data.Player1Bricks[i].y] = this.state.brickExistsColor;
						this.setState({
							verticalBricks: temparr
						})
					}
					else{
						var temparr = this.state.horizontalBricks.slice();
						temparr[data.Player1Bricks[i].x][data.Player1Bricks[i].y] = this.state.brickExistsColor;
						this.setState({
							horizontalBricks: temparr
						})
					}
				}

				for(var i = 0; i < data.Player2Bricks.length; i++){
					if(data.Player2Bricks[i].vertical){
						var temparr = this.state.verticalBricks.slice();
						temparr[data.Player2Bricks[i].x][data.Player2Bricks[i].y] = this.state.brickExistsColor;
						this.setState({
							verticalBricks: temparr
						})
					}
					else{
						var temparr = this.state.horizontalBricks.slice();
						temparr[data.Player2Bricks[i].x][data.Player2Bricks[i].y] = this.state.brickExistsColor;
						this.setState({
							horizontalBricks: temparr
						})
					}
				}

				var temparr = this.state.playerArray.slice();
				temparr[data.Player1x][data.Player1y] = this.state.player1Color;
				temparr[data.Player2x][data.Player2y] = this.state.player2Color;

				this.setState({
					player1BricksLeft: 10 - data.Player1Bricks.length,
					player2BricksLeft: 10 - data.Player2Bricks.length,
					playerArray: temparr
				})


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

		var playing = "";
		if(this.props.game.PlayerTurn == 1){
			playing = this.props.game.Player1;
		}
		else{
			playing = this.props.game.Player2;
		}

		if(this.props.game){
			if(playing == this.props.name){
				if(playing == this.props.game.Player1){
					if(event.currentTarget.getAttribute('x') != this.props.game.Player2x && event.currentTarget.getAttribute('y') != this.props.game.Player2y){
						if(Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 1){
							if(Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 0){
								var temparr = this.state.playerArray.slice();
								temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareHighlightedColor;
								this.setState({
									playerArray: temparr
								})
								console.log(this.state.playerArray[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')])
							}
						}
						else if(Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 1){
							if(Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 0){
								var temparr = this.state.playerArray.slice();
								temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareHighlightedColor;
								this.setState({
									playerArray: temparr
								})
							}
						}
					}
				}
				else{
					if(event.currentTarget.getAttribute('x') != this.props.game.Player1x && event.currentTarget.getAttribute('y') != this.props.game.Player1y){
						if(Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 1){
							if(Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 0){
								var temparr = this.state.playerArray.slice();
								temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareHighlightedColor;
								this.setState({
									playerArray: temparr
								})
							}
						}
						else if(Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 1){
							if(Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 0){
								var temparr = this.state.playerArray.slice();
								temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareHighlightedColor;
								this.setState({
									playerArray: temparr
								})
							}
						}
					}
				}
			}
		}
	}

	squareMouseLeave(event){
		var playing = "";
		if(this.props.game.PlayerTurn == 1){
			playing = this.props.game.Player1;
		}
		else{
			playing = this.props.game.Player2;
		}

		if(this.props.game){
			if(playing == this.props.name){
				if(playing == this.props.game.Player1){
					if(event.currentTarget.getAttribute('x') != this.props.game.Player2x && event.currentTarget.getAttribute('y') != this.props.game.Player2y){
						if(Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 1){
							if(Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 0){
								var temparr = this.state.playerArray.slice();
								temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareColor;
								this.setState({
									playerArray: temparr
								})
								console.log(this.state.playerArray[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')])
							}
						}
						else if(Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 1){
							if(Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 0){
								var temparr = this.state.playerArray.slice();
								temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareColor;
								this.setState({
									playerArray: temparr
								})
							}
						}
					}
				}
				else{
					if(event.currentTarget.getAttribute('x') != this.props.game.Player1x && event.currentTarget.getAttribute('y') != this.props.game.Player1y){
						if(Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 1){
							if(Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 0){
								var temparr = this.state.playerArray.slice();
								temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareColor;
								this.setState({
									playerArray: temparr
								})
							}
						}
						else if(Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 1){
							if(Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 0){
								var temparr = this.state.playerArray.slice();
								temparr[event.currentTarget.getAttribute('x')][event.currentTarget.getAttribute('y')] = this.state.squareColor;
								this.setState({
									playerArray: temparr
								})
							}
						}
					}
				}
			}
		}
	}

	clickSquare(event){
		var playing = "";
		if(this.props.game.PlayerTurn == 1){
			playing = this.props.game.Player1;
		}
		else{
			playing = this.props.game.Player2;
		}

		if(this.props.game){
			if(playing == this.props.name){
				if(this.props.game.Player2){
					if(playing == this.props.game.Player1){
						if(event.currentTarget.getAttribute('x') != this.props.game.Player2x && event.currentTarget.getAttribute('y') != this.props.game.Player2y){
							if(Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 1){
								if(Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 0){
									var params = {
										id: this.props.gameID,
										player: playing,
										isBrick: false,
										x: event.currentTarget.getAttribute('x'),
										y: event.currentTarget.getAttribute('y')
									}

									fetch(urlname + "/move", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
										console.log("move response is " + JSON.stringify(data))
										if(!data.error){
											this.setState({
												errorMsg: ""
											})
										}
										else{
											this.setState({
												errorMsg: data.response
											})
										}
									})
								}
							}
							else if(Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 1){
								if(Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 0){
									var params = {
										id: this.props.gameID,
										player: playing,
										isBrick: false,
										x: event.currentTarget.getAttribute('x'),
										y: event.currentTarget.getAttribute('y')
									}

									fetch(urlname + "/move", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
										console.log("move response is " + JSON.stringify(data))
										if(!data.error){
											this.setState({
												errorMsg: ""
											})
										}
										else{
											this.setState({
												errorMsg: data.response
											})
										}
									})
								}
							}
						}
					}
					else{
						if(event.currentTarget.getAttribute('x') != this.props.game.Player1x && event.currentTarget.getAttribute('y') != this.props.game.Player1y){
							if(Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 1){
								if(Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 0){
									var params = {
										id: this.props.gameID,
										player: playing,
										isBrick: false,
										x: event.currentTarget.getAttribute('x'),
										y: event.currentTarget.getAttribute('y')
									}

									fetch(urlname + "/move", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
										console.log("move response is " + JSON.stringify(data))
										if(!data.error){
											this.setState({
												errorMsg: ""
											})
										}
										else{
											this.setState({
												errorMsg: data.response
											})
										}
									})
								}
							}
							else if(Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 1){
								if(Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 0){
									var params = {
										id: this.props.gameID,
										player: playing,
										isBrick: false,
										x: event.currentTarget.getAttribute('x'),
										y: event.currentTarget.getAttribute('y')
									}

									fetch(urlname + "/move", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
										console.log("move response is " + JSON.stringify(data))
										if(!data.error){
											this.setState({
												errorMsg: ""
											})
										}
										else{
											this.setState({
												errorMsg: data.response
											})
										}
									})
								}
							}
						}
					}
				}
				
			}
		}
	}

	clickBrick(event){
		var playing = "";
		if(this.props.game.PlayerTurn == 1){
			playing = this.props.game.Player1;
		}
		else{
			playing = this.props.game.Player2;
		}

		if(this.props.game){
			if(playing == this.props.name){
				if(this.props.game.Player2){
					var Vertical = true;
					if(event.currentTarget.getAttribute('orientation') == "vertical"){
					}
					else{
						Vertical = false;
					}

					var params = {
						id: this.props.gameID,
						player: playing,
						isBrick: true,
						brick: {
							vertical: Vertical,
							x: event.currentTarget.getAttribute('x'),
							y: event.currentTarget.getAttribute('y')
						}
					}

					fetch(urlname + "/move", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
						console.log("move response is " + JSON.stringify(data))
						if(!data.error){
							this.setState({
								errorMsg: ""
							})
						}
						else{
							this.setState({
								errorMsg: data.response
							})
						}
					})
				}
			}
		}
	}

	brickMouseOver(event){
		var playing = "";
		if(this.props.game.PlayerTurn == 1){
			playing = this.props.game.Player1;
		}
		else{
			playing = this.props.game.Player2;
		}

		if(this.props.game){
			if(playing == this.props.name){
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
		var playing = "";
		if(this.props.game.PlayerTurn == 1){
			playing = this.props.game.Player1;
		}
		else{
			playing = this.props.game.Player2;
		}

		if(this.props.game){
			if(playing == this.props.name){
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

					{this.state.errorMsg == "" ?
						null
						: <h4>this.state.errorMsg</h4>
					}

					{this.props.game.Player2 ?
						(this.props.game.PlayerTurn == 1 ?
						<div><h2>It's {this.props.game.Player1}'s turn! </h2> <br/> <br/></div>
						: <div><h2>It's {this.props.game.Player2}'s turn! </h2> <br/> <br/></div>)
						: <h4> Waiting for player to play against... you could also open another tab, create another player, and play against yourself if you'd like 😉 </h4>
					}
					
					<div style={{backgroundColor: this.state.brickDefaultColor, width: "650px"}}>
					<div>
						<div x={0} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={0} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={0} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
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
					<div style={{lineHeight: "25px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={1} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][0] != this.state.brickDefaultColor ? this.state.verticalBricks[0][0] : this.state.verticalBricks[0][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={1} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][0] != this.state.brickDefaultColor ? this.state.verticalBricks[1][0] : this.state.verticalBricks[1][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={1} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][0] != this.state.brickDefaultColor ? this.state.verticalBricks[2][0] : this.state.verticalBricks[2][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={1} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][0] != this.state.brickDefaultColor ? this.state.verticalBricks[3][0] : this.state.verticalBricks[3][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={1} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][0] != this.state.brickDefaultColor ? this.state.verticalBricks[4][0] : this.state.verticalBricks[4][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={1} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][0] != this.state.brickDefaultColor ? this.state.verticalBricks[5][0] : this.state.verticalBricks[5][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={1} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][0] != this.state.brickDefaultColor ? this.state.verticalBricks[6][0] : this.state.verticalBricks[6][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={1} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][0] != this.state.brickDefaultColor ? this.state.verticalBricks[7][0] : this.state.verticalBricks[7][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={1} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={1} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][1] : this.state.verticalBricks[0][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][1] : this.state.horizontalBricks[1][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={1} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][1] : this.state.verticalBricks[1][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][1] : this.state.horizontalBricks[2][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={1} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][1] : this.state.verticalBricks[2][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][1] : this.state.horizontalBricks[3][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={1} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][1] : this.state.verticalBricks[3][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][1] : this.state.horizontalBricks[4][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={1} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][1] : this.state.verticalBricks[4][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][1] : this.state.horizontalBricks[5][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={1} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][1] : this.state.verticalBricks[5][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][1] : this.state.horizontalBricks[6][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={1} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][1] : this.state.verticalBricks[6][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][1] : this.state.horizontalBricks[7][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={1} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[7][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][1] : this.state.verticalBricks[7][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={1} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[7][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "25px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={2} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][1] != this.state.brickDefaultColor ? this.state.verticalBricks[0][1] : this.state.verticalBricks[0][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={2} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][1] != this.state.brickDefaultColor ? this.state.verticalBricks[1][1] : this.state.verticalBricks[1][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={2} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][1] != this.state.brickDefaultColor ? this.state.verticalBricks[2][1] : this.state.verticalBricks[2][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={2} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][1] != this.state.brickDefaultColor ? this.state.verticalBricks[3][1] : this.state.verticalBricks[3][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={2} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][1] != this.state.brickDefaultColor ? this.state.verticalBricks[4][1] : this.state.verticalBricks[4][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={2} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][1] != this.state.brickDefaultColor ? this.state.verticalBricks[5][1] : this.state.verticalBricks[5][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={2} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][1] != this.state.brickDefaultColor ? this.state.verticalBricks[6][1] : this.state.verticalBricks[6][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={2} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][1] != this.state.brickDefaultColor ? this.state.verticalBricks[7][1] : this.state.verticalBricks[7][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={2} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={2} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][2] : this.state.verticalBricks[0][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][2] : this.state.horizontalBricks[1][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={2} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][2] : this.state.verticalBricks[1][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][2] : this.state.horizontalBricks[2][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={2} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][2] : this.state.verticalBricks[2][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][2] : this.state.horizontalBricks[3][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={2} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][2] : this.state.verticalBricks[3][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][2] : this.state.horizontalBricks[4][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={2} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][2] : this.state.verticalBricks[4][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][2] : this.state.horizontalBricks[5][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={2} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][2] : this.state.verticalBricks[5][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][2] : this.state.horizontalBricks[6][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={2} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][2] : this.state.verticalBricks[6][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][2] : this.state.horizontalBricks[7][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={2} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[7][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][2] : this.state.verticalBricks[7][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={2} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[7][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "25px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={3} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][2] != this.state.brickDefaultColor ? this.state.verticalBricks[0][2] : this.state.verticalBricks[0][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={3} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][2] != this.state.brickDefaultColor ? this.state.verticalBricks[1][2] : this.state.verticalBricks[1][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={3} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][2] != this.state.brickDefaultColor ? this.state.verticalBricks[2][2] : this.state.verticalBricks[2][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={3} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][2] != this.state.brickDefaultColor ? this.state.verticalBricks[3][2] : this.state.verticalBricks[3][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={3} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][2] != this.state.brickDefaultColor ? this.state.verticalBricks[4][2] : this.state.verticalBricks[4][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={3} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][2] != this.state.brickDefaultColor ? this.state.verticalBricks[5][2] : this.state.verticalBricks[5][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={3} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][2] != this.state.brickDefaultColor ? this.state.verticalBricks[6][2] : this.state.verticalBricks[6][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={3} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][2] != this.state.brickDefaultColor ? this.state.verticalBricks[7][2] : this.state.verticalBricks[7][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={3} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={3} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][3] : this.state.verticalBricks[0][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][3] : this.state.horizontalBricks[1][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={3} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][3] : this.state.verticalBricks[1][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][3] : this.state.horizontalBricks[2][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={3} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][3] : this.state.verticalBricks[2][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][3] : this.state.horizontalBricks[3][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={3} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][3] : this.state.verticalBricks[3][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][3] : this.state.horizontalBricks[4][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={3} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][3] : this.state.verticalBricks[4][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][3] : this.state.horizontalBricks[5][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={3} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][3] : this.state.verticalBricks[5][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][3] : this.state.horizontalBricks[6][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={3} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][3] : this.state.verticalBricks[6][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][3] : this.state.horizontalBricks[7][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={3} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[7][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][3] : this.state.verticalBricks[7][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={3} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[7][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "25px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={4} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][3] != this.state.brickDefaultColor ? this.state.verticalBricks[0][3] : this.state.verticalBricks[0][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={4} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][3] != this.state.brickDefaultColor ? this.state.verticalBricks[1][3] : this.state.verticalBricks[1][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={4} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][3] != this.state.brickDefaultColor ? this.state.verticalBricks[2][3] : this.state.verticalBricks[2][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={4} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][3] != this.state.brickDefaultColor ? this.state.verticalBricks[3][3] : this.state.verticalBricks[3][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={4} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][3] != this.state.brickDefaultColor ? this.state.verticalBricks[4][3] : this.state.verticalBricks[4][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={4} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][3] != this.state.brickDefaultColor ? this.state.verticalBricks[5][3] : this.state.verticalBricks[5][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={4} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][3] != this.state.brickDefaultColor ? this.state.verticalBricks[6][3] : this.state.verticalBricks[6][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={4} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][3] != this.state.brickDefaultColor ? this.state.verticalBricks[7][3] : this.state.verticalBricks[7][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={4} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={4} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][4] : this.state.verticalBricks[0][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][4] : this.state.horizontalBricks[1][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={4} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][4] : this.state.verticalBricks[1][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][4] : this.state.horizontalBricks[2][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={4} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][4] : this.state.verticalBricks[2][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][4] : this.state.horizontalBricks[3][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={4} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][4] : this.state.verticalBricks[3][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][4] : this.state.horizontalBricks[4][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={4} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][4] : this.state.verticalBricks[4][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][4] : this.state.horizontalBricks[5][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={4} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][4] : this.state.verticalBricks[5][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][4] : this.state.horizontalBricks[6][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={4} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][4] : this.state.verticalBricks[6][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][4] : this.state.horizontalBricks[7][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={4} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[7][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][4] : this.state.verticalBricks[7][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={4} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[7][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "25px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={5} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][4] != this.state.brickDefaultColor ? this.state.verticalBricks[0][4] : this.state.verticalBricks[0][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={5} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][4] != this.state.brickDefaultColor ? this.state.verticalBricks[1][4] : this.state.verticalBricks[1][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={5} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][4] != this.state.brickDefaultColor ? this.state.verticalBricks[2][4] : this.state.verticalBricks[2][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={5} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][4] != this.state.brickDefaultColor ? this.state.verticalBricks[3][4] : this.state.verticalBricks[3][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={5} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][4] != this.state.brickDefaultColor ? this.state.verticalBricks[4][4] : this.state.verticalBricks[4][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={5} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][4] != this.state.brickDefaultColor ? this.state.verticalBricks[5][4] : this.state.verticalBricks[5][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={5} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][4] != this.state.brickDefaultColor ? this.state.verticalBricks[6][4] : this.state.verticalBricks[6][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={5} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][4] != this.state.brickDefaultColor ? this.state.verticalBricks[7][4] : this.state.verticalBricks[7][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={5} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={5} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][5] : this.state.verticalBricks[0][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][5] : this.state.horizontalBricks[1][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={5} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][5] : this.state.verticalBricks[1][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][5] : this.state.horizontalBricks[2][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={5} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][5] : this.state.verticalBricks[2][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][5] : this.state.horizontalBricks[3][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={5} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][5] : this.state.verticalBricks[3][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][5] : this.state.horizontalBricks[4][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={5} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][5] : this.state.verticalBricks[4][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][5] : this.state.horizontalBricks[5][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={5} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][5] : this.state.verticalBricks[5][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][5] : this.state.horizontalBricks[6][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={5} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][5] : this.state.verticalBricks[6][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][5] : this.state.horizontalBricks[7][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={5} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[7][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][5] : this.state.verticalBricks[7][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={5} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[7][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "25px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={6} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][5] != this.state.brickDefaultColor ? this.state.verticalBricks[0][5] : this.state.verticalBricks[0][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={6} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][5] != this.state.brickDefaultColor ? this.state.verticalBricks[1][5] : this.state.verticalBricks[1][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={6} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][5] != this.state.brickDefaultColor ? this.state.verticalBricks[2][5] : this.state.verticalBricks[2][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={6} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][5] != this.state.brickDefaultColor ? this.state.verticalBricks[3][5] : this.state.verticalBricks[3][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={6} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][5] != this.state.brickDefaultColor ? this.state.verticalBricks[4][5] : this.state.verticalBricks[4][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={6} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][5] != this.state.brickDefaultColor ? this.state.verticalBricks[5][5] : this.state.verticalBricks[5][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={6} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][5] != this.state.brickDefaultColor ? this.state.verticalBricks[6][5] : this.state.verticalBricks[6][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={6} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][5] != this.state.brickDefaultColor ? this.state.verticalBricks[7][5] : this.state.verticalBricks[7][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={6} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={6} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][6] : this.state.verticalBricks[0][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][6] : this.state.horizontalBricks[1][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={6} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][6] : this.state.verticalBricks[1][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][6] : this.state.horizontalBricks[2][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={6} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][6] : this.state.verticalBricks[2][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][6] : this.state.horizontalBricks[3][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={6} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][6] : this.state.verticalBricks[3][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][6] : this.state.horizontalBricks[4][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={6} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][6] : this.state.verticalBricks[4][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][6] : this.state.horizontalBricks[5][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={6} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][6] : this.state.verticalBricks[5][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][6] : this.state.horizontalBricks[6][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={6} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][6] : this.state.verticalBricks[6][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][6] : this.state.horizontalBricks[7][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={6} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[7][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][6] : this.state.verticalBricks[7][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={6} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[7][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "25px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={7} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][6] != this.state.brickDefaultColor ? this.state.verticalBricks[0][6] : this.state.verticalBricks[0][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={7} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][6] != this.state.brickDefaultColor ? this.state.verticalBricks[1][6] : this.state.verticalBricks[1][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={7} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][6] != this.state.brickDefaultColor ? this.state.verticalBricks[2][6] : this.state.verticalBricks[2][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={7} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][6] != this.state.brickDefaultColor ? this.state.verticalBricks[3][6] : this.state.verticalBricks[3][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={7} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][6] != this.state.brickDefaultColor ? this.state.verticalBricks[4][6] : this.state.verticalBricks[4][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={7} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][6] != this.state.brickDefaultColor ? this.state.verticalBricks[5][6] : this.state.verticalBricks[5][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={7} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][6] != this.state.brickDefaultColor ? this.state.verticalBricks[6][6] : this.state.verticalBricks[6][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={7} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][6] != this.state.brickDefaultColor ? this.state.verticalBricks[7][6] : this.state.verticalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={7} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={7} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][7] : this.state.verticalBricks[0][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][7] : this.state.horizontalBricks[1][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={7} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][7] : this.state.verticalBricks[1][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][7] : this.state.horizontalBricks[2][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={7} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][7] : this.state.verticalBricks[2][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][7] : this.state.horizontalBricks[3][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={7} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][7] : this.state.verticalBricks[3][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][7] : this.state.horizontalBricks[4][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={7} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][7] : this.state.verticalBricks[4][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][7] : this.state.horizontalBricks[5][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={7} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][7] : this.state.verticalBricks[5][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][7] : this.state.horizontalBricks[6][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={7} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][7] : this.state.verticalBricks[6][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][7] : this.state.horizontalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={7} style={{float: "left", display: "inline", height: "25px", width: "25px", backgroundColor: this.state.horizontalBricks[7][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][7] : this.state.verticalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={7} style={{float: "left", display: "inline", height: "25px", width: "50px", backgroundColor: this.state.horizontalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "25px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[0][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={8} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[0][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[1][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={8} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[1][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[2][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={8} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[2][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[3][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={8} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[3][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[4][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={8} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[4][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[5][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={8} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[5][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[6][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={8} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[6][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[7][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={8} style={{float: "left", display: "inline", height: "50px", width: "25px", backgroundColor: this.state.verticalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={8} style={{float: "left", display: "inline", height: "50px", width: "50px", backgroundColor: this.state.playerArray[8][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "50px"}}>
						<br/>
					</div>


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