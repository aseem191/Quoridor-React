import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import Page from "./page.js"
import Layout from '../components/layout.js'
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
		var arr4 = [];
		for(var x = 0; x < 8; x++){
			arr4[x] = [];
			for(var y = 0; y < 8; y++){
				arr4[x][y] = "#4286f4";
			}
		}
		var arr5 = [];
		for(var x = 0; x < 8; x++){
			arr5[x] = [];
			for(var y = 0; y < 8; y++){
				arr5[x][y] = "#4286f4";
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
			verticalBricksStrat: arr4.slice(),
			horizontalBricksStrat: arr5.slice(),
			player1BricksLeft: 10,
			player2BricksLeft: 10,
			errorMsg: "",
			gameExists: true,
			stratAlert: false
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
				else{
					this.setState({
						gameExists: false,
						errorMsg: "Player already exists. Try again."
					})
				}
				
			})
			
		}
		
	}





	fetchGame(){
		if(this.props.gameID){
			fetch(urlname + "/game/" + this.props.gameID).then(response => response.json()).then(data => {
				console.log("fetching" + JSON.stringify(data))
				var x1 = this.props.game.Player1x;
				var y1 = this.props.game.Player1y;
				var x2 = this.props.game.Player2x;
				var y2 = this.props.game.Player2y;

				if(this.props.game.PlayerTurn != data.PlayerTurn){
					if((data.PlayerTurn == 1 && this.props.name == this.props.game.Player2) || (data.PlayerTurn == 2 && this.props.name == this.props.game.Player1)){
						var brickList = [];

						if(this.props.name == this.props.game.Player1){
							brickList = data.Player2Bricks;
						}
						else{
							brickList = data.Player2Bricks;
						}

						var params = {
							bricks: brickList
						}

						console.log("changed");
						fetch(urlname + "/strategy", {method: 'PUT', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.text()).then(data => {

							console.log("strategy response: " + JSON.stringify(data))
							/*if(data.length == 0){
								this.setState({
									stratAlert: false
								})
							}
							else{

								var vert2 = this.state.verticalBricksStrat.slice();
								var horiz2 = this.state.horizontalBricksStrat.slice();

								for(var x = 0; x < 8; x++){
									for(var y = 0; y < 8; y++){
										vert2[x][y] = this.state.brickDefaultColor;
									}
								}
								for(var x = 0; x < 8; x++){
									for(var y = 0; y < 8; y++){
										horiz2[x][y] = this.state.brickDefaultColor;
									}
								}

								for(var i = 0; i < data.length; i++){
									if(data[i].vertical){
										vert2[data[i].x][data[i].y] = this.state.brickHighlightedColor;
									}
									else{
										horiz2[data[i].x][data[i].y] = this.state.brickHighlightedColor;
									}
								}

								this.setState({
									stratAlert: true,
									verticalBricksStrat: vert2,
									horizontalBricksStrat: horiz2
								})
							}*/
						})

					}
					
				}

				this.props.dispatch(updateGame(data));
				if(data.ToDestroy){
					var tempID = this.props.gameID;
					this.props.dispatch(updateGameID(null));
					this.props.dispatch(updateGame(null));
					console.log("ending game" + this.props.gameID)

					this.setState({
						errorMsg: "Game has ended.",
						gameExists: false
					})

					var params = {
						winner: this.props.name
					}

					fetch(urlname + "/gameNoStrat/" + tempID, {method: 'DELETE', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
						console.log("ended game")
					})
				}

				if(data.Player1y == 8 || data.Player2y == 0){
					var tempID = this.props.gameID;
					this.props.dispatch(updateGameID(null));
					this.props.dispatch(updateGame(null));
					console.log("ending game" + this.props.gameID)
					var winner = "";
					if(data.Player1y == 8){
						winner = data.Player1;
					}
					else{
						winner = data.Player2;
					}

					this.setState({
						errorMsg: "Game has ended. Winner: " + winner,
						gameExists: false
					})

					if(this.props.name == winner){
						var params = {
							winner: winner
						}

						fetch(urlname + "/game/" + tempID, {method: 'DELETE', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
							console.log("ended game")
						})
					}
					
				}

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
				temparr[x1][y1] = this.state.squareColor;
				temparr[x2][y2] = this.state.squareColor;
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
		this.interval = setInterval(this.fetchGame, 2000);

		window.addEventListener("beforeunload", (ev) => 
		{
			//ev.preventDefault();
			ev.returnValue = "Game has ended."

			if(this.props.game){
				
				this.setState({
					errorMsg: "Game has ended.",
					gameExists: false
				})
				if(this.props.game.Player2){
					var params = {
						id: this.props.gameID
					}

					this.props.dispatch(updateGameID(null));
					this.props.dispatch(updateGame(null));
					fetch(urlname + "/destroy", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
						
						return "Game has ended."
					})
				}
				else{
					var gameID = this.props.gameID;
					
					var params = {
						winner: this.props.name
					}

					this.props.dispatch(updateGameID(null));
					this.props.dispatch(updateGame(null));
					fetch(urlname + "/gameNoStrat/" + gameID, {method: 'DELETE', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
						console.log("ended game")

						return "Game has ended."
					})
				}
				
			}
			
			
		});
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
					if(!(event.currentTarget.getAttribute('x') == this.props.game.Player2x && event.currentTarget.getAttribute('y') == this.props.game.Player2y)){
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
					if(!(event.currentTarget.getAttribute('x') == this.props.game.Player1x && event.currentTarget.getAttribute('y') == this.props.game.Player1y)){
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
					if(!(event.currentTarget.getAttribute('x') == this.props.game.Player2x && event.currentTarget.getAttribute('y') == this.props.game.Player2y)){
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
					if(!(event.currentTarget.getAttribute('x') == this.props.game.Player1x && event.currentTarget.getAttribute('y') == this.props.game.Player1y)){
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
						if(!(event.currentTarget.getAttribute('x') == this.props.game.Player2x && event.currentTarget.getAttribute('y') == this.props.game.Player2y)){
							if(Math.abs(this.props.game.Player1x - event.currentTarget.getAttribute('x')) == 1){
								if(Math.abs(this.props.game.Player1y - event.currentTarget.getAttribute('y')) == 0){
									var params = {
										id: this.props.gameID,
										player: playing,
										isBrick: false,
										x: event.currentTarget.getAttribute('x'),
										y: event.currentTarget.getAttribute('y')
									}

									clearInterval(this.interval);

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

										this.interval = setInterval(() => this.fetchGame(), 2000);
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

									clearInterval(this.interval);

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

										this.interval = setInterval(() => this.fetchGame(), 2000);
									})
								}
							}
						}
					}
					else{
						if(!(event.currentTarget.getAttribute('x') == this.props.game.Player1x && event.currentTarget.getAttribute('y') == this.props.game.Player1y)){
							if(Math.abs(this.props.game.Player2x - event.currentTarget.getAttribute('x')) == 1){
								if(Math.abs(this.props.game.Player2y - event.currentTarget.getAttribute('y')) == 0){
									var params = {
										id: this.props.gameID,
										player: playing,
										isBrick: false,
										x: event.currentTarget.getAttribute('x'),
										y: event.currentTarget.getAttribute('y')
									}

									clearInterval(this.interval);

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

										this.interval = setInterval(() => this.fetchGame(), 2000);
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

									clearInterval(this.interval);

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

										this.interval = setInterval(() => this.fetchGame(), 2000);
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
					var Vertical = false;
					if(event.currentTarget.getAttribute('orientation') == "horizontal"){
					}
					else{
						Vertical = true;
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

					clearInterval(this.interval);

					fetch(urlname + "/move", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
						console.log("brick response is " + JSON.stringify(data))
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

						this.interval = setInterval(() => this.fetchGame(), 2000);
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
					if(this.state.verticalBricks[x][y] == this.state.brickExistsColor){
						return;
					}
					var temparr = this.state.verticalBricks.slice();
					temparr[x][y] = this.state.brickHighlightedColor;
					this.setState({
						verticalBricks: temparr
					})
				}
				else if(orientation == "horizontal"){
					if(this.state.horizontalBricks[x][y] == this.state.brickExistsColor){
						return;
					}
					var temparr = this.state.horizontalBricks.slice();
					temparr[x][y] = this.state.brickHighlightedColor;
					this.setState({
						horizontalBricks: temparr
					})
				}
				else if(orientation == "middle"){
					if(this.state.verticalBricks[x][y] == this.state.brickExistsColor){
						return;
					}
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
				if(orientation == "vertical"){
					if(this.state.verticalBricks[x][y] == this.state.brickExistsColor){
						return;
					}
					var temparr = this.state.verticalBricks.slice();
					temparr[x][y] = this.state.brickDefaultColor;
					this.setState({
						verticalBricks: temparr
					})
				}
				else if(orientation == "horizontal"){
					if(this.state.horizontalBricks[x][y] == this.state.brickExistsColor){
						return;
					}
					var temparr = this.state.horizontalBricks.slice();
					temparr[x][y] = this.state.brickDefaultColor;
					this.setState({
						horizontalBricks: temparr
					})
				}
				else if(orientation == "middle"){
					if(this.state.verticalBricks[x][y] == this.state.brickExistsColor){
						return;
					}
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
			<Layout>
			<div>
			{ this.state.gameExists ?
				(this.props.game ?
				(
					<div>

					{this.state.errorMsg == "" ?
						null
						: <h3>Error: {this.state.errorMsg}</h3>
					}

					{this.props.game.Player2 ?
						(this.props.game.PlayerTurn == 1 ?
						(this.props.game.Player1 == this.props.name ? <div><h2>It's your turn! </h2> </div>
						: <div><h2>It's {this.props.game.Player1}'s turn! </h2> </div>
						)
						: (this.props.game.Player2 == this.props.name ? <div><h2>It's your turn! </h2> </div>
						: <div><h2>It's {this.props.game.Player2}'s turn! </h2> </div>
						)
						)
						: <h4> Waiting for player to play against online... you could also open another tab, create another player, and play against yourself if you'd like 😉 </h4>
					}

					<h3>{this.props.game.Player1} has {this.state.player1BricksLeft} bricks left.</h3>
					
					<div style={{backgroundColor: this.state.brickDefaultColor, width: "520px"}}>
					<div>
						<div x={0} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][0]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][0] : this.state.verticalBricks[0][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][0] : this.state.horizontalBricks[1][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][0] : this.state.verticalBricks[1][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][0] : this.state.horizontalBricks[2][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][0] : this.state.verticalBricks[2][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][0] : this.state.horizontalBricks[3][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][0] : this.state.verticalBricks[3][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][0] : this.state.horizontalBricks[4][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][0] : this.state.verticalBricks[4][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][0] : this.state.horizontalBricks[5][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][0] : this.state.verticalBricks[5][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][0] : this.state.horizontalBricks[6][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][0] : this.state.verticalBricks[6][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][0] : this.state.horizontalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[7][0] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][0] : this.state.verticalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[7][0]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][0] != this.state.brickDefaultColor ? this.state.verticalBricks[0][0] : this.state.verticalBricks[0][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][0] != this.state.brickDefaultColor ? this.state.verticalBricks[1][0] : this.state.verticalBricks[1][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][0] != this.state.brickDefaultColor ? this.state.verticalBricks[2][0] : this.state.verticalBricks[2][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][0] != this.state.brickDefaultColor ? this.state.verticalBricks[3][0] : this.state.verticalBricks[3][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][0] != this.state.brickDefaultColor ? this.state.verticalBricks[4][0] : this.state.verticalBricks[4][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][0] != this.state.brickDefaultColor ? this.state.verticalBricks[5][0] : this.state.verticalBricks[5][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][0] != this.state.brickDefaultColor ? this.state.verticalBricks[6][0] : this.state.verticalBricks[6][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][0] != this.state.brickDefaultColor ? this.state.verticalBricks[7][0] : this.state.verticalBricks[7][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][1]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][1] : this.state.verticalBricks[0][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][1] : this.state.horizontalBricks[1][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][1] : this.state.verticalBricks[1][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][1] : this.state.horizontalBricks[2][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][1] : this.state.verticalBricks[2][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][1] : this.state.horizontalBricks[3][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][1] : this.state.verticalBricks[3][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][1] : this.state.horizontalBricks[4][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][1] : this.state.verticalBricks[4][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][1] : this.state.horizontalBricks[5][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][1] : this.state.verticalBricks[5][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][1] : this.state.horizontalBricks[6][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][1] : this.state.verticalBricks[6][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][1] : this.state.horizontalBricks[7][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[7][1] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][1] : this.state.verticalBricks[7][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[7][1]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][1] != this.state.brickDefaultColor ? this.state.verticalBricks[0][1] : this.state.verticalBricks[0][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][1] != this.state.brickDefaultColor ? this.state.verticalBricks[1][1] : this.state.verticalBricks[1][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][1] != this.state.brickDefaultColor ? this.state.verticalBricks[2][1] : this.state.verticalBricks[2][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][1] != this.state.brickDefaultColor ? this.state.verticalBricks[3][1] : this.state.verticalBricks[3][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][1] != this.state.brickDefaultColor ? this.state.verticalBricks[4][1] : this.state.verticalBricks[4][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][1] != this.state.brickDefaultColor ? this.state.verticalBricks[5][1] : this.state.verticalBricks[5][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][1] != this.state.brickDefaultColor ? this.state.verticalBricks[6][1] : this.state.verticalBricks[6][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][1] != this.state.brickDefaultColor ? this.state.verticalBricks[7][1] : this.state.verticalBricks[7][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][2]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][2] : this.state.verticalBricks[0][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][2] : this.state.horizontalBricks[1][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][2] : this.state.verticalBricks[1][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][2] : this.state.horizontalBricks[2][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][2] : this.state.verticalBricks[2][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][2] : this.state.horizontalBricks[3][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][2] : this.state.verticalBricks[3][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][2] : this.state.horizontalBricks[4][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][2] : this.state.verticalBricks[4][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][2] : this.state.horizontalBricks[5][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][2] : this.state.verticalBricks[5][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][2] : this.state.horizontalBricks[6][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][2] : this.state.verticalBricks[6][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][2] : this.state.horizontalBricks[7][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[7][2] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][2] : this.state.verticalBricks[7][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[7][2]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][2] != this.state.brickDefaultColor ? this.state.verticalBricks[0][2] : this.state.verticalBricks[0][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][2] != this.state.brickDefaultColor ? this.state.verticalBricks[1][2] : this.state.verticalBricks[1][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][2] != this.state.brickDefaultColor ? this.state.verticalBricks[2][2] : this.state.verticalBricks[2][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][2] != this.state.brickDefaultColor ? this.state.verticalBricks[3][2] : this.state.verticalBricks[3][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][2] != this.state.brickDefaultColor ? this.state.verticalBricks[4][2] : this.state.verticalBricks[4][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][2] != this.state.brickDefaultColor ? this.state.verticalBricks[5][2] : this.state.verticalBricks[5][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][2] != this.state.brickDefaultColor ? this.state.verticalBricks[6][2] : this.state.verticalBricks[6][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][2] != this.state.brickDefaultColor ? this.state.verticalBricks[7][2] : this.state.verticalBricks[7][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][3]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][3] : this.state.verticalBricks[0][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][3] : this.state.horizontalBricks[1][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][3] : this.state.verticalBricks[1][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][3] : this.state.horizontalBricks[2][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][3] : this.state.verticalBricks[2][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][3] : this.state.horizontalBricks[3][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][3] : this.state.verticalBricks[3][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][3] : this.state.horizontalBricks[4][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][3] : this.state.verticalBricks[4][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][3] : this.state.horizontalBricks[5][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][3] : this.state.verticalBricks[5][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][3] : this.state.horizontalBricks[6][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][3] : this.state.verticalBricks[6][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][3] : this.state.horizontalBricks[7][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[7][3] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][3] : this.state.verticalBricks[7][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[7][3]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][3] != this.state.brickDefaultColor ? this.state.verticalBricks[0][3] : this.state.verticalBricks[0][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][3] != this.state.brickDefaultColor ? this.state.verticalBricks[1][3] : this.state.verticalBricks[1][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][3] != this.state.brickDefaultColor ? this.state.verticalBricks[2][3] : this.state.verticalBricks[2][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][3] != this.state.brickDefaultColor ? this.state.verticalBricks[3][3] : this.state.verticalBricks[3][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][3] != this.state.brickDefaultColor ? this.state.verticalBricks[4][3] : this.state.verticalBricks[4][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][3] != this.state.brickDefaultColor ? this.state.verticalBricks[5][3] : this.state.verticalBricks[5][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][3] != this.state.brickDefaultColor ? this.state.verticalBricks[6][3] : this.state.verticalBricks[6][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][3] != this.state.brickDefaultColor ? this.state.verticalBricks[7][3] : this.state.verticalBricks[7][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][4]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][4] : this.state.verticalBricks[0][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][4] : this.state.horizontalBricks[1][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][4] : this.state.verticalBricks[1][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][4] : this.state.horizontalBricks[2][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][4] : this.state.verticalBricks[2][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][4] : this.state.horizontalBricks[3][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][4] : this.state.verticalBricks[3][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][4] : this.state.horizontalBricks[4][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][4] : this.state.verticalBricks[4][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][4] : this.state.horizontalBricks[5][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][4] : this.state.verticalBricks[5][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][4] : this.state.horizontalBricks[6][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][4] : this.state.verticalBricks[6][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][4] : this.state.horizontalBricks[7][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[7][4] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][4] : this.state.verticalBricks[7][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[7][4]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][4] != this.state.brickDefaultColor ? this.state.verticalBricks[0][4] : this.state.verticalBricks[0][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][4] != this.state.brickDefaultColor ? this.state.verticalBricks[1][4] : this.state.verticalBricks[1][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][4] != this.state.brickDefaultColor ? this.state.verticalBricks[2][4] : this.state.verticalBricks[2][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][4] != this.state.brickDefaultColor ? this.state.verticalBricks[3][4] : this.state.verticalBricks[3][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][4] != this.state.brickDefaultColor ? this.state.verticalBricks[4][4] : this.state.verticalBricks[4][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][4] != this.state.brickDefaultColor ? this.state.verticalBricks[5][4] : this.state.verticalBricks[5][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][4] != this.state.brickDefaultColor ? this.state.verticalBricks[6][4] : this.state.verticalBricks[6][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][4] != this.state.brickDefaultColor ? this.state.verticalBricks[7][4] : this.state.verticalBricks[7][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][5]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][5] : this.state.verticalBricks[0][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][5] : this.state.horizontalBricks[1][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][5] : this.state.verticalBricks[1][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][5] : this.state.horizontalBricks[2][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][5] : this.state.verticalBricks[2][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][5] : this.state.horizontalBricks[3][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][5] : this.state.verticalBricks[3][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][5] : this.state.horizontalBricks[4][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][5] : this.state.verticalBricks[4][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][5] : this.state.horizontalBricks[5][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][5] : this.state.verticalBricks[5][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][5] : this.state.horizontalBricks[6][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][5] : this.state.verticalBricks[6][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][5] : this.state.horizontalBricks[7][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[7][5] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][5] : this.state.verticalBricks[7][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[7][5]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][5] != this.state.brickDefaultColor ? this.state.verticalBricks[0][5] : this.state.verticalBricks[0][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][5] != this.state.brickDefaultColor ? this.state.verticalBricks[1][5] : this.state.verticalBricks[1][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][5] != this.state.brickDefaultColor ? this.state.verticalBricks[2][5] : this.state.verticalBricks[2][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][5] != this.state.brickDefaultColor ? this.state.verticalBricks[3][5] : this.state.verticalBricks[3][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][5] != this.state.brickDefaultColor ? this.state.verticalBricks[4][5] : this.state.verticalBricks[4][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][5] != this.state.brickDefaultColor ? this.state.verticalBricks[5][5] : this.state.verticalBricks[5][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][5] != this.state.brickDefaultColor ? this.state.verticalBricks[6][5] : this.state.verticalBricks[6][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][5] != this.state.brickDefaultColor ? this.state.verticalBricks[7][5] : this.state.verticalBricks[7][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][6]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][6] : this.state.verticalBricks[0][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][6] : this.state.horizontalBricks[1][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][6] : this.state.verticalBricks[1][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][6] : this.state.horizontalBricks[2][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][6] : this.state.verticalBricks[2][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][6] : this.state.horizontalBricks[3][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][6] : this.state.verticalBricks[3][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][6] : this.state.horizontalBricks[4][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][6] : this.state.verticalBricks[4][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][6] : this.state.horizontalBricks[5][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][6] : this.state.verticalBricks[5][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][6] : this.state.horizontalBricks[6][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][6] : this.state.verticalBricks[6][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][6] : this.state.horizontalBricks[7][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[7][6] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][6] : this.state.verticalBricks[7][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[7][6]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][6] != this.state.brickDefaultColor ? this.state.verticalBricks[0][6] : this.state.verticalBricks[0][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][6] != this.state.brickDefaultColor ? this.state.verticalBricks[1][6] : this.state.verticalBricks[1][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][6] != this.state.brickDefaultColor ? this.state.verticalBricks[2][6] : this.state.verticalBricks[2][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][6] != this.state.brickDefaultColor ? this.state.verticalBricks[3][6] : this.state.verticalBricks[3][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][6] != this.state.brickDefaultColor ? this.state.verticalBricks[4][6] : this.state.verticalBricks[4][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][6] != this.state.brickDefaultColor ? this.state.verticalBricks[5][6] : this.state.verticalBricks[5][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][6] != this.state.brickDefaultColor ? this.state.verticalBricks[6][6] : this.state.verticalBricks[6][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][6] != this.state.brickDefaultColor ? this.state.verticalBricks[7][6] : this.state.verticalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][7]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={0} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][7] : this.state.verticalBricks[0][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={1} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[0][7] : this.state.horizontalBricks[1][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={1} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][7] : this.state.verticalBricks[1][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={2} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[1][7] : this.state.horizontalBricks[2][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={2} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][7] : this.state.verticalBricks[2][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={3} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[2][7] : this.state.horizontalBricks[3][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={3} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][7] : this.state.verticalBricks[3][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={4} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[3][7] : this.state.horizontalBricks[4][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={4} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][7] : this.state.verticalBricks[4][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={5} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[4][7] : this.state.horizontalBricks[5][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={5} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][7] : this.state.verticalBricks[5][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={6} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[5][7] : this.state.horizontalBricks[6][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={6} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][7] : this.state.verticalBricks[6][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[6][7] : this.state.horizontalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="middle" x={7} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricks[7][7] != this.state.brickDefaultColor ? this.state.horizontalBricks[7][7] : this.state.verticalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div orientation="horizontal" x={7} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={0} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[0][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={1} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={1} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[1][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={2} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={2} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[2][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={3} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={3} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[3][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={4} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={4} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[4][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={5} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={5} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[5][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={6} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={6} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[6][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={7} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
						<div orientation="vertical" x={7} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricks[7][7]}} onClick={this.clickBrick} onMouseOver={this.brickMouseOver} onMouseLeave={this.brickMouseLeave}></div>
						<div x={8} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][8]}} onClick={this.clickSquare} onMouseOver={this.squareMouseOver} onMouseLeave={this.squareMouseLeave}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>


					</div>
					{this.props.game.Player2 ? 
						<h3>{this.props.game.Player2} has {this.state.player2BricksLeft} bricks left.</h3>
						: null
					}
					
					<br/><br/>

					//Strategy section

					{this.state.stratAlert ? 

					(<div><h3>Alert! {this.props.game.Player1 == this.props.name ? this.props.game.Player2 : this.props.game.Player1} might be looking to use this tactic!</h3><br/>
					<div style={{backgroundColor: this.state.brickDefaultColor, width: "520px"}}>
					<div>
						<div x={0} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][0]}}></div>
						<div orientation="vertical" x={0} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][0]}}></div>
						<div x={1} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][0]}}></div>
						<div orientation="vertical" x={1} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][0]}}></div>
						<div x={2} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][0]}}></div>
						<div orientation="vertical" x={2} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][0]}}></div>
						<div x={3} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][0]}}></div>
						<div orientation="vertical" x={3} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][0]}}></div>
						<div x={4} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][0]}}></div>
						<div orientation="vertical" x={4} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][0]}}></div>
						<div x={5} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][0]}}></div>
						<div orientation="vertical" x={5} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][0]}}></div>
						<div x={6} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][0]}}></div>
						<div orientation="vertical" x={6} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][0]}}></div>
						<div x={7} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][0]}}></div>
						<div orientation="vertical" x={7} y={0} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][0]}}></div>
						<div x={8} y={0} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][0]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][0]}}></div>
						<div orientation="middle" x={0} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][0] : this.state.verticalBricksStrat[0][0]}}></div>
						<div orientation="horizontal" x={1} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][0] : this.state.horizontalBricksStrat[1][0]}}></div>
						<div orientation="middle" x={1} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][0] : this.state.verticalBricksStrat[1][0]}}></div>
						<div orientation="horizontal" x={2} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[1][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][0] : this.state.horizontalBricksStrat[2][0]}}></div>
						<div orientation="middle" x={2} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][0] : this.state.verticalBricksStrat[2][0]}}></div>
						<div orientation="horizontal" x={3} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[2][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][0] : this.state.horizontalBricksStrat[3][0]}}></div>
						<div orientation="middle" x={3} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][0] : this.state.verticalBricksStrat[3][0]}}></div>
						<div orientation="horizontal" x={4} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[3][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][0] : this.state.horizontalBricksStrat[4][0]}}></div>
						<div orientation="middle" x={4} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][0] : this.state.verticalBricksStrat[4][0]}}></div>
						<div orientation="horizontal" x={5} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[4][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][0] : this.state.horizontalBricksStrat[5][0]}}></div>
						<div orientation="middle" x={5} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][0] : this.state.verticalBricksStrat[5][0]}}></div>
						<div orientation="horizontal" x={6} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[5][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][0] : this.state.horizontalBricksStrat[6][0]}}></div>
						<div orientation="middle" x={6} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][0] : this.state.verticalBricksStrat[6][0]}}></div>
						<div orientation="horizontal" x={7} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[6][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][0] : this.state.horizontalBricksStrat[7][0]}}></div>
						<div orientation="middle" x={7} y={0} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[7][0] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][0] : this.state.verticalBricksStrat[7][0]}}></div>
						<div orientation="horizontal" x={7} y={0} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[7][0]}}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][1]}}></div>
						<div orientation="vertical" x={0} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][0] : this.state.verticalBricksStrat[0][1]}}></div>
						<div x={1} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][1]}}></div>
						<div orientation="vertical" x={1} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][0] : this.state.verticalBricksStrat[1][1]}}></div>
						<div x={2} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][1]}}></div>
						<div orientation="vertical" x={2} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][0] : this.state.verticalBricksStrat[2][1]}}></div>
						<div x={3} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][1]}}></div>
						<div orientation="vertical" x={3} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][0] : this.state.verticalBricksStrat[3][1]}}></div>
						<div x={4} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][1]}}></div>
						<div orientation="vertical" x={4} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][0] : this.state.verticalBricksStrat[4][1]}}></div>
						<div x={5} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][1]}}></div>
						<div orientation="vertical" x={5} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][0] : this.state.verticalBricksStrat[5][1]}}></div>
						<div x={6} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][1]}}></div>
						<div orientation="vertical" x={6} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][0] : this.state.verticalBricksStrat[6][1]}}></div>
						<div x={7} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][1]}}></div>
						<div orientation="vertical" x={7} y={1} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][0] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][0] : this.state.verticalBricksStrat[7][1]}}></div>
						<div x={8} y={1} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][1]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][1]}}></div>
						<div orientation="middle" x={0} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][1] : this.state.verticalBricksStrat[0][1]}}></div>
						<div orientation="horizontal" x={1} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][1] : this.state.horizontalBricksStrat[1][1]}}></div>
						<div orientation="middle" x={1} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][1] : this.state.verticalBricksStrat[1][1]}}></div>
						<div orientation="horizontal" x={2} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[1][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][1] : this.state.horizontalBricksStrat[2][1]}}></div>
						<div orientation="middle" x={2} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][1] : this.state.verticalBricksStrat[2][1]}}></div>
						<div orientation="horizontal" x={3} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[2][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][1] : this.state.horizontalBricksStrat[3][1]}}></div>
						<div orientation="middle" x={3} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][1] : this.state.verticalBricksStrat[3][1]}}></div>
						<div orientation="horizontal" x={4} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[3][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][1] : this.state.horizontalBricksStrat[4][1]}}></div>
						<div orientation="middle" x={4} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][1] : this.state.verticalBricksStrat[4][1]}}></div>
						<div orientation="horizontal" x={5} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[4][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][1] : this.state.horizontalBricksStrat[5][1]}}></div>
						<div orientation="middle" x={5} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][1] : this.state.verticalBricksStrat[5][1]}}></div>
						<div orientation="horizontal" x={6} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[5][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][1] : this.state.horizontalBricksStrat[6][1]}}></div>
						<div orientation="middle" x={6} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][1] : this.state.verticalBricksStrat[6][1]}}></div>
						<div orientation="horizontal" x={7} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[6][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][1] : this.state.horizontalBricksStrat[7][1]}}></div>
						<div orientation="middle" x={7} y={1} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[7][1] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][1] : this.state.verticalBricksStrat[7][1]}}></div>
						<div orientation="horizontal" x={7} y={1} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[7][1]}}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][2]}}></div>
						<div orientation="vertical" x={0} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][1] : this.state.verticalBricksStrat[0][2]}}></div>
						<div x={1} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][2]}}></div>
						<div orientation="vertical" x={1} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][1] : this.state.verticalBricksStrat[1][2]}}></div>
						<div x={2} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][2]}}></div>
						<div orientation="vertical" x={2} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][1] : this.state.verticalBricksStrat[2][2]}}></div>
						<div x={3} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][2]}}></div>
						<div orientation="vertical" x={3} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][1] : this.state.verticalBricksStrat[3][2]}}></div>
						<div x={4} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][2]}}></div>
						<div orientation="vertical" x={4} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][1] : this.state.verticalBricksStrat[4][2]}}></div>
						<div x={5} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][2]}}></div>
						<div orientation="vertical" x={5} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][1] : this.state.verticalBricksStrat[5][2]}}></div>
						<div x={6} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][2]}}></div>
						<div orientation="vertical" x={6} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][1] : this.state.verticalBricksStrat[6][2]}}></div>
						<div x={7} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][2]}}></div>
						<div orientation="vertical" x={7} y={2} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][1] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][1] : this.state.verticalBricksStrat[7][2]}}></div>
						<div x={8} y={2} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][2]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][2]}}></div>
						<div orientation="middle" x={0} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][2] : this.state.verticalBricksStrat[0][2]}}></div>
						<div orientation="horizontal" x={1} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][2] : this.state.horizontalBricksStrat[1][2]}}></div>
						<div orientation="middle" x={1} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][2] : this.state.verticalBricksStrat[1][2]}}></div>
						<div orientation="horizontal" x={2} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[1][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][2] : this.state.horizontalBricksStrat[2][2]}}></div>
						<div orientation="middle" x={2} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][2] : this.state.verticalBricksStrat[2][2]}}></div>
						<div orientation="horizontal" x={3} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[2][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][2] : this.state.horizontalBricksStrat[3][2]}}></div>
						<div orientation="middle" x={3} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][2] : this.state.verticalBricksStrat[3][2]}}></div>
						<div orientation="horizontal" x={4} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[3][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][2] : this.state.horizontalBricksStrat[4][2]}}></div>
						<div orientation="middle" x={4} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][2] : this.state.verticalBricksStrat[4][2]}}></div>
						<div orientation="horizontal" x={5} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[4][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][2] : this.state.horizontalBricksStrat[5][2]}}></div>
						<div orientation="middle" x={5} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][2] : this.state.verticalBricksStrat[5][2]}}></div>
						<div orientation="horizontal" x={6} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[5][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][2] : this.state.horizontalBricksStrat[6][2]}}></div>
						<div orientation="middle" x={6} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][2] : this.state.verticalBricksStrat[6][2]}}></div>
						<div orientation="horizontal" x={7} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[6][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][2] : this.state.horizontalBricksStrat[7][2]}}></div>
						<div orientation="middle" x={7} y={2} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[7][2] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][2] : this.state.verticalBricksStrat[7][2]}}></div>
						<div orientation="horizontal" x={7} y={2} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[7][2]}}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][3]}}></div>
						<div orientation="vertical" x={0} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][2] : this.state.verticalBricksStrat[0][3]}}></div>
						<div x={1} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][3]}}></div>
						<div orientation="vertical" x={1} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][2] : this.state.verticalBricksStrat[1][3]}}></div>
						<div x={2} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][3]}}></div>
						<div orientation="vertical" x={2} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][2] : this.state.verticalBricksStrat[2][3]}}></div>
						<div x={3} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][3]}}></div>
						<div orientation="vertical" x={3} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][2] : this.state.verticalBricksStrat[3][3]}}></div>
						<div x={4} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][3]}}></div>
						<div orientation="vertical" x={4} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][2] : this.state.verticalBricksStrat[4][3]}}></div>
						<div x={5} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][3]}}></div>
						<div orientation="vertical" x={5} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][2] : this.state.verticalBricksStrat[5][3]}}></div>
						<div x={6} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][3]}}></div>
						<div orientation="vertical" x={6} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][2] : this.state.verticalBricksStrat[6][3]}}></div>
						<div x={7} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][3]}}></div>
						<div orientation="vertical" x={7} y={3} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][2] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][2] : this.state.verticalBricksStrat[7][3]}}></div>
						<div x={8} y={3} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][3]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][3]}}></div>
						<div orientation="middle" x={0} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][3] : this.state.verticalBricksStrat[0][3]}}></div>
						<div orientation="horizontal" x={1} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][3] : this.state.horizontalBricksStrat[1][3]}}></div>
						<div orientation="middle" x={1} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][3] : this.state.verticalBricksStrat[1][3]}}></div>
						<div orientation="horizontal" x={2} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[1][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][3] : this.state.horizontalBricksStrat[2][3]}}></div>
						<div orientation="middle" x={2} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][3] : this.state.verticalBricksStrat[2][3]}}></div>
						<div orientation="horizontal" x={3} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[2][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][3] : this.state.horizontalBricksStrat[3][3]}}></div>
						<div orientation="middle" x={3} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][3] : this.state.verticalBricksStrat[3][3]}}></div>
						<div orientation="horizontal" x={4} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[3][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][3] : this.state.horizontalBricksStrat[4][3]}}></div>
						<div orientation="middle" x={4} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][3] : this.state.verticalBricksStrat[4][3]}}></div>
						<div orientation="horizontal" x={5} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[4][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][3] : this.state.horizontalBricksStrat[5][3]}}></div>
						<div orientation="middle" x={5} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][3] : this.state.verticalBricksStrat[5][3]}}></div>
						<div orientation="horizontal" x={6} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[5][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][3] : this.state.horizontalBricksStrat[6][3]}}></div>
						<div orientation="middle" x={6} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][3] : this.state.verticalBricksStrat[6][3]}}></div>
						<div orientation="horizontal" x={7} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[6][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][3] : this.state.horizontalBricksStrat[7][3]}}></div>
						<div orientation="middle" x={7} y={3} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[7][3] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][3] : this.state.verticalBricksStrat[7][3]}}></div>
						<div orientation="horizontal" x={7} y={3} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[7][3]}}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][4]}}></div>
						<div orientation="vertical" x={0} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][3] : this.state.verticalBricksStrat[0][4]}}></div>
						<div x={1} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][4]}}></div>
						<div orientation="vertical" x={1} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][3] : this.state.verticalBricksStrat[1][4]}}></div>
						<div x={2} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][4]}}></div>
						<div orientation="vertical" x={2} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][3] : this.state.verticalBricksStrat[2][4]}}></div>
						<div x={3} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][4]}}></div>
						<div orientation="vertical" x={3} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][3] : this.state.verticalBricksStrat[3][4]}}></div>
						<div x={4} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][4]}}></div>
						<div orientation="vertical" x={4} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][3] : this.state.verticalBricksStrat[4][4]}}></div>
						<div x={5} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][4]}}></div>
						<div orientation="vertical" x={5} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][3] : this.state.verticalBricksStrat[5][4]}}></div>
						<div x={6} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][4]}}></div>
						<div orientation="vertical" x={6} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][3] : this.state.verticalBricksStrat[6][4]}}></div>
						<div x={7} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][4]}}></div>
						<div orientation="vertical" x={7} y={4} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][3] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][3] : this.state.verticalBricksStrat[7][4]}}></div>
						<div x={8} y={4} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][4]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][4]}}></div>
						<div orientation="middle" x={0} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][4] : this.state.verticalBricksStrat[0][4]}}></div>
						<div orientation="horizontal" x={1} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][4] : this.state.horizontalBricksStrat[1][4]}}></div>
						<div orientation="middle" x={1} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][4] : this.state.verticalBricksStrat[1][4]}}></div>
						<div orientation="horizontal" x={2} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[1][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][4] : this.state.horizontalBricksStrat[2][4]}}></div>
						<div orientation="middle" x={2} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][4] : this.state.verticalBricksStrat[2][4]}}></div>
						<div orientation="horizontal" x={3} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[2][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][4] : this.state.horizontalBricksStrat[3][4]}}></div>
						<div orientation="middle" x={3} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][4] : this.state.verticalBricksStrat[3][4]}}></div>
						<div orientation="horizontal" x={4} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[3][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][4] : this.state.horizontalBricksStrat[4][4]}}></div>
						<div orientation="middle" x={4} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][4] : this.state.verticalBricksStrat[4][4]}}></div>
						<div orientation="horizontal" x={5} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[4][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][4] : this.state.horizontalBricksStrat[5][4]}}></div>
						<div orientation="middle" x={5} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][4] : this.state.verticalBricksStrat[5][4]}}></div>
						<div orientation="horizontal" x={6} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[5][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][4] : this.state.horizontalBricksStrat[6][4]}}></div>
						<div orientation="middle" x={6} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][4] : this.state.verticalBricksStrat[6][4]}}></div>
						<div orientation="horizontal" x={7} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[6][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][4] : this.state.horizontalBricksStrat[7][4]}}></div>
						<div orientation="middle" x={7} y={4} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[7][4] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][4] : this.state.verticalBricksStrat[7][4]}}></div>
						<div orientation="horizontal" x={7} y={4} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[7][4]}}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][5]}}></div>
						<div orientation="vertical" x={0} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][4] : this.state.verticalBricksStrat[0][5]}}></div>
						<div x={1} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][5]}}></div>
						<div orientation="vertical" x={1} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][4] : this.state.verticalBricksStrat[1][5]}}></div>
						<div x={2} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][5]}}></div>
						<div orientation="vertical" x={2} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][4] : this.state.verticalBricksStrat[2][5]}}></div>
						<div x={3} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][5]}}></div>
						<div orientation="vertical" x={3} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][4] : this.state.verticalBricksStrat[3][5]}}></div>
						<div x={4} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][5]}}></div>
						<div orientation="vertical" x={4} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][4] : this.state.verticalBricksStrat[4][5]}}></div>
						<div x={5} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][5]}}></div>
						<div orientation="vertical" x={5} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][4] : this.state.verticalBricksStrat[5][5]}}></div>
						<div x={6} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][5]}}></div>
						<div orientation="vertical" x={6} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][4] : this.state.verticalBricksStrat[6][5]}}></div>
						<div x={7} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][5]}}></div>
						<div orientation="vertical" x={7} y={5} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][4] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][4] : this.state.verticalBricksStrat[7][5]}}></div>
						<div x={8} y={5} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][5]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][5]}}></div>
						<div orientation="middle" x={0} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][5] : this.state.verticalBricksStrat[0][5]}}></div>
						<div orientation="horizontal" x={1} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][5] : this.state.horizontalBricksStrat[1][5]}}></div>
						<div orientation="middle" x={1} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][5] : this.state.verticalBricksStrat[1][5]}}></div>
						<div orientation="horizontal" x={2} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[1][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][5] : this.state.horizontalBricksStrat[2][5]}}></div>
						<div orientation="middle" x={2} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][5] : this.state.verticalBricksStrat[2][5]}}></div>
						<div orientation="horizontal" x={3} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[2][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][5] : this.state.horizontalBricksStrat[3][5]}}></div>
						<div orientation="middle" x={3} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][5] : this.state.verticalBricksStrat[3][5]}}></div>
						<div orientation="horizontal" x={4} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[3][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][5] : this.state.horizontalBricksStrat[4][5]}}></div>
						<div orientation="middle" x={4} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][5] : this.state.verticalBricksStrat[4][5]}}></div>
						<div orientation="horizontal" x={5} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[4][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][5] : this.state.horizontalBricksStrat[5][5]}}></div>
						<div orientation="middle" x={5} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][5] : this.state.verticalBricksStrat[5][5]}}></div>
						<div orientation="horizontal" x={6} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[5][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][5] : this.state.horizontalBricksStrat[6][5]}}></div>
						<div orientation="middle" x={6} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][5] : this.state.verticalBricksStrat[6][5]}}></div>
						<div orientation="horizontal" x={7} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[6][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][5] : this.state.horizontalBricksStrat[7][5]}}></div>
						<div orientation="middle" x={7} y={5} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[7][5] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][5] : this.state.verticalBricksStrat[7][5]}}></div>
						<div orientation="horizontal" x={7} y={5} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[7][5]}}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][6]}}></div>
						<div orientation="vertical" x={0} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][5] : this.state.verticalBricksStrat[0][6]}}></div>
						<div x={1} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][6]}}></div>
						<div orientation="vertical" x={1} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][5] : this.state.verticalBricksStrat[1][6]}}></div>
						<div x={2} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][6]}}></div>
						<div orientation="vertical" x={2} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][5] : this.state.verticalBricksStrat[2][6]}}></div>
						<div x={3} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][6]}}></div>
						<div orientation="vertical" x={3} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][5] : this.state.verticalBricksStrat[3][6]}}></div>
						<div x={4} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][6]}}></div>
						<div orientation="vertical" x={4} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][5] : this.state.verticalBricksStrat[4][6]}}></div>
						<div x={5} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][6]}}></div>
						<div orientation="vertical" x={5} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][5] : this.state.verticalBricksStrat[5][6]}}></div>
						<div x={6} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][6]}}></div>
						<div orientation="vertical" x={6} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][5] : this.state.verticalBricksStrat[6][6]}}></div>
						<div x={7} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][6]}}></div>
						<div orientation="vertical" x={7} y={6} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][5] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][5] : this.state.verticalBricksStrat[7][6]}}></div>
						<div x={8} y={6} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][6]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][6]}}></div>
						<div orientation="middle" x={0} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][6] : this.state.verticalBricksStrat[0][6]}}></div>
						<div orientation="horizontal" x={1} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][6] : this.state.horizontalBricksStrat[1][6]}}></div>
						<div orientation="middle" x={1} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][6] : this.state.verticalBricksStrat[1][6]}}></div>
						<div orientation="horizontal" x={2} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[1][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][6] : this.state.horizontalBricksStrat[2][6]}}></div>
						<div orientation="middle" x={2} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][6] : this.state.verticalBricksStrat[2][6]}}></div>
						<div orientation="horizontal" x={3} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[2][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][6] : this.state.horizontalBricksStrat[3][6]}}></div>
						<div orientation="middle" x={3} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][6] : this.state.verticalBricksStrat[3][6]}}></div>
						<div orientation="horizontal" x={4} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[3][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][6] : this.state.horizontalBricksStrat[4][6]}}></div>
						<div orientation="middle" x={4} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][6] : this.state.verticalBricksStrat[4][6]}}></div>
						<div orientation="horizontal" x={5} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[4][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][6] : this.state.horizontalBricksStrat[5][6]}}></div>
						<div orientation="middle" x={5} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][6] : this.state.verticalBricksStrat[5][6]}}></div>
						<div orientation="horizontal" x={6} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[5][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][6] : this.state.horizontalBricksStrat[6][6]}}></div>
						<div orientation="middle" x={6} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][6] : this.state.verticalBricksStrat[6][6]}}></div>
						<div orientation="horizontal" x={7} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[6][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][6] : this.state.horizontalBricksStrat[7][6]}}></div>
						<div orientation="middle" x={7} y={6} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[7][6] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][6] : this.state.verticalBricksStrat[7][6]}}></div>
						<div orientation="horizontal" x={7} y={6} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[7][6]}}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][7]}}></div>
						<div orientation="vertical" x={0} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[0][6] : this.state.verticalBricksStrat[0][7]}}></div>
						<div x={1} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][7]}}></div>
						<div orientation="vertical" x={1} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[1][6] : this.state.verticalBricksStrat[1][7]}}></div>
						<div x={2} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][7]}}></div>
						<div orientation="vertical" x={2} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[2][6] : this.state.verticalBricksStrat[2][7]}}></div>
						<div x={3} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][7]}}></div>
						<div orientation="vertical" x={3} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[3][6] : this.state.verticalBricksStrat[3][7]}}></div>
						<div x={4} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][7]}}></div>
						<div orientation="vertical" x={4} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[4][6] : this.state.verticalBricksStrat[4][7]}}></div>
						<div x={5} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][7]}}></div>
						<div orientation="vertical" x={5} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[5][6] : this.state.verticalBricksStrat[5][7]}}></div>
						<div x={6} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][7]}}></div>
						<div orientation="vertical" x={6} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[6][6] : this.state.verticalBricksStrat[6][7]}}></div>
						<div x={7} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][7]}}></div>
						<div orientation="vertical" x={7} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][6] != this.state.brickDefaultColor ? this.state.verticalBricksStrat[7][6] : this.state.verticalBricksStrat[7][7]}}></div>
						<div x={8} y={7} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][7]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>
					<div>
						<div orientation="horizontal" x={0} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][7]}}></div>
						<div orientation="middle" x={0} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][7] : this.state.verticalBricksStrat[0][7]}}></div>
						<div orientation="horizontal" x={1} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[0][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[0][7] : this.state.horizontalBricksStrat[1][7]}}></div>
						<div orientation="middle" x={1} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][7] : this.state.verticalBricksStrat[1][7]}}></div>
						<div orientation="horizontal" x={2} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[1][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[1][7] : this.state.horizontalBricksStrat[2][7]}}></div>
						<div orientation="middle" x={2} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][7] : this.state.verticalBricksStrat[2][7]}}></div>
						<div orientation="horizontal" x={3} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[2][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[2][7] : this.state.horizontalBricksStrat[3][7]}}></div>
						<div orientation="middle" x={3} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][7] : this.state.verticalBricksStrat[3][7]}}></div>
						<div orientation="horizontal" x={4} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[3][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[3][7] : this.state.horizontalBricksStrat[4][7]}}></div>
						<div orientation="middle" x={4} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][7] : this.state.verticalBricksStrat[4][7]}}></div>
						<div orientation="horizontal" x={5} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[4][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[4][7] : this.state.horizontalBricksStrat[5][7]}}></div>
						<div orientation="middle" x={5} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][7] : this.state.verticalBricksStrat[5][7]}}></div>
						<div orientation="horizontal" x={6} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[5][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[5][7] : this.state.horizontalBricksStrat[6][7]}}></div>
						<div orientation="middle" x={6} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][7] : this.state.verticalBricksStrat[6][7]}}></div>
						<div orientation="horizontal" x={7} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[6][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[6][7] : this.state.horizontalBricksStrat[7][7]}}></div>
						<div orientation="middle" x={7} y={7} style={{float: "left", display: "inline", height: "20px", width: "20px", backgroundColor: this.state.horizontalBricksStrat[7][7] != this.state.brickDefaultColor ? this.state.horizontalBricksStrat[7][7] : this.state.verticalBricksStrat[7][7]}}></div>
						<div orientation="horizontal" x={7} y={7} style={{float: "left", display: "inline", height: "20px", width: "40px", backgroundColor: this.state.horizontalBricksStrat[7][7]}}></div>
					</div>
					<div style={{lineHeight: "20px"}}>
						<br/>
					</div>

					<div>
						<div x={0} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[0][8]}}></div>
						<div orientation="vertical" x={0} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[0][7]}}></div>
						<div x={1} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[1][8]}}></div>
						<div orientation="vertical" x={1} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[1][7]}}></div>
						<div x={2} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[2][8]}}></div>
						<div orientation="vertical" x={2} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[2][7]}}></div>
						<div x={3} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[3][8]}}></div>
						<div orientation="vertical" x={3} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[3][7]}}></div>
						<div x={4} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[4][8]}}></div>
						<div orientation="vertical" x={4} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[4][7]}}></div>
						<div x={5} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[5][8]}}></div>
						<div orientation="vertical" x={5} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[5][7]}}></div>
						<div x={6} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[6][8]}}></div>
						<div orientation="vertical" x={6} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[6][7]}}></div>
						<div x={7} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[7][8]}}></div>
						<div orientation="vertical" x={7} y={7} style={{float: "left", display: "inline", height: "40px", width: "20px", backgroundColor: this.state.verticalBricksStrat[7][7]}}></div>
						<div x={8} y={8} style={{float: "left", display: "inline", height: "40px", width: "40px", backgroundColor: this.state.playerArray[8][8]}}></div>
					</div>
					<div style={{lineHeight: "40px"}}>
						<br/>
					</div>


					</div>
					</div>)
					: null
					}


					</div>
				)
				: <h3>Loading game...</h3>
				)
			: <h3>{this.state.errorMsg}</h3>
			}

			<style jsx>{`
				

				h3 {
					font-family: "Rubik", Times, serif;
				}

				h4 {
					font-family: "Rubik", Times, serif;
				}

				h2 {
					font-family: "Graduate", Times, serif;
				}
			`}
			</style>
			</div>
			</Layout>
      
		)
	}
}

export default Page(connect(state=>state)(Game))