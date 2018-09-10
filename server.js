var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var apicache = require('apicache');

var app = express();
let cache = apicache.middleware;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


/* Structure of "game" collection (game is 9x9, each player starts out with 10 bricks):

	{
		_id:
		Player1: (name)
		Player2: (name)
		Player1x: (where piece is)
		Player1y:
		Player2x: (where piece is)
		Player2y:
		Player1Bricks: [{
			Vertical: (true/false)
			x:
			y:
		}]
		Player2Bricks: [{
			Vertical: (true/false)
			x:
			y:
		}]
		PlayerTurn: 1 (whose turn is it),
		ToDestroy: false (if a user exits, it's the other player's responsibility to delete the game)
	}

	(Could also add 3/4 player games in the future, in this collection)

	Structure of "strategy" collection:

	{
		WinningBricks: [{
			Vertical: (true/false)
			x:
			y:
		}]
	}
*/


var origin = "website here";

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


var url = "mongodb://*:*@ds018558.mlab.com:18558/quoridor";


app.get('/', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");


		db.close();
		res.end("Nothing requested");
	});

})


app.get('/game/:id', cache('2 seconds'), function(req, res) {

	var id = req.params.id;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var o_id = new mongo.ObjectID(id);
		var query = {_id: o_id}
		var dbo = db.db("quoridor");
		dbo.collection("game").find(query).toArray(function(err, result) {
			if (err) throw err;
			var resjson = result[0];

			if(result.length == 0){
				db.close();
				res.write("No game found.");
			}

			db.close();
			res.json(resjson);
		});

		
	});

})



app.post('/player', function(req, res) {

	var uname = req.body.uname;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var dbo = db.db("quoridor");
		var query = {$or: [{Player1: uname}, {Player2: uname}]}
		dbo.collection("game").find(query).toArray(function(err, result) {
			if (err) throw err;
			
			if(result.length != 0){
				db.close();
				var resjson = {
					newgame: false,
					error: true,
					error: "User already exists. Try again."
				}
				res.json(resjson);
			}
			else{
				var query2 = {Player2: null}
				dbo.collection("game").find(query2).toArray(function(err, result) {
					if (err) throw err;
					
					if(result.length == 0){
						var newgame = {
							Player1: uname,
							Player2: null,
							Player1x: 4,
							Player1y: 0,
							Player2x: 4,
							Player2y: 8,
							Player1Bricks: [],
							Player2Bricks: [],
							PlayerTurn: 1,
							ToDestroy: false
						}
						dbo.collection("game").insertOne(newgame, function(err, result) {
							if (err) throw err;
							var resjson = {
								newgame: true,
								error: false,
								id: newgame._id
							}

							db.close();
							res.json(resjson);
						});
					}
					else{
						var query3 = {Player2: null};
						var toupdate = {$set: {Player2: uname}};
						dbo.collection("game").findOneAndUpdate(query3, toupdate, function(err, result) {
							if (err) throw err;
							var resjson = {
								newgame: false,
								error: false,
								id: result.value._id
							}

							db.close();
							res.json(resjson);
						});

					}
				});
			}
		});
	});

})


app.post('/destroy', function(req, res) {

	var o_id = new mongo.ObjectID(req.body.id);

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var dbo = db.db("quoridor");
		var query = {_id: o_id}
		var toupdate = {$set: {ToDestroy: true}};
		dbo.collection("game").findOneAndUpdate(query, toupdate, function(err, result) {
			if (err) throw err;
			
			if(result.length != 0){
				db.close();
				var resjson = {
					error: true,
					error: "No game found."
				}
				res.json(resjson);
			}
			else{
				db.close();
				var resjson = {
					error: false,
					error: "ToDestroy set."
				}
				res.json(resjson);
			}
		});
	});

})


app.post('/move', function(req, res) {

	//req.body.id is game id, req.body.player is player name, req.body.isBrick is whether the move is to put a brick or not, req.body.brick is if brick, req.body.x and .y for if not brick

	var o_id = new mongo.ObjectID(req.body.id);

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var dbo = db.db("quoridor");
		if(req.body.isBrick){
			var query = {_id: o_id}
			dbo.collection("game").find(query).toArray(function(err, result) {
				if (err) throw err;
				
				if(req.body.player == result[0].Player1 && result[0].PlayerTurn == 1){
					if(result[0].Player1Bricks.length >= 10){
						var resjson = {
							error: true,
							response: "Too many bricks"
						}

						db.close();
						res.json(resjson);
						return;
					}

					for(var i = 0; i < result[0].Player1Bricks.length; i++){
						if(JSON.stringify(req.body.brick) == JSON.stringify(result[0].Player1Bricks[i])){
							var resjson = {
								error: true,
								response: "Brick already placed"
							}

							db.close();
							res.json(resjson);
							return;
						}

						if((req.body.brick.x == result[0].Player1Bricks[i].x) && (req.body.brick.y == result[0].Player1Bricks[i].y)){
							console.log("type1")
							var resjson = {
								error: true,
								response: "Brick blocks brick"
							}

							db.close();
							res.json(resjson);
							return;
						}

						if(!(req.body.brick.vertical) && !(result[0].Player1Bricks[i].vertical)){
							if((req.body.brick.y == result[0].Player1Bricks[i].y) && Math.abs(req.body.brick.x - result[0].Player1Bricks[i].x) <= 1){
								console.log("type2")
								var resjson = {
									error: true,
									response: "Brick blocks brick"
								}

								db.close();
								res.json(resjson);
								return;
							}
						}
						else if(req.body.brick.vertical && result[0].Player1Bricks[i].vertical){
							if((req.body.brick.x == result[0].Player1Bricks[i].x) && Math.abs(req.body.brick.y - result[0].Player1Bricks[i].y) <= 1){
								var resjson = {
									error: true,
									response: "Brick blocks brick"
								}

								db.close();
								res.json(resjson);
								return;
							}
						}
					}

					for(var i = 0; i < result[0].Player2Bricks.length; i++){
						if(JSON.stringify(req.body.brick) == JSON.stringify(result[0].Player2Bricks[i])){
							var resjson = {
								error: true,
								response: "Brick already placed"
							}

							db.close();
							res.json(resjson);
							return;
						}

						if((req.body.brick.x == result[0].Player2Bricks[i].x) && (req.body.brick.y == result[0].Player2Bricks[i].y)){

							console.log("type1")
							var resjson = {
								error: true,
								response: "Brick blocks brick"
							}

							db.close();
							res.json(resjson);
							return;
						}

						if(!(req.body.brick.vertical) && !(result[0].Player2Bricks[i].vertical)){
							if((req.body.brick.y == result[0].Player2Bricks[i].y) && Math.abs(req.body.brick.x - result[0].Player2Bricks[i].x) <= 1){
								console.log("type2")
								var resjson = {
									error: true,
									response: "Brick blocks brick"
								}

								db.close();
								res.json(resjson);
								return;
							}
						}
						else if(req.body.brick.vertical && result[0].Player2Bricks[i].vertical){
							if((req.body.brick.x == result[0].Player2Bricks[i].x) && Math.abs(req.body.brick.y - result[0].Player2Bricks[i].y) <= 1){								var resjson = {
									error: true,
									response: "Brick blocks brick"
								}

								db.close();
								res.json(resjson);
								return;
							}
						}
					}

					var query2 = {_id: o_id}
					var toupdate = {$push: {Player1Bricks: req.body.brick}, $set: {PlayerTurn: 2}};
					dbo.collection("game").findOneAndUpdate(query2, toupdate, function(err, result) {
						if (err) throw err;
						var resjson = {
							error: false,
							response: result.value
						}

						db.close();
						res.json(resjson);
						
					});
				}
				else if(req.body.player == result[0].Player2 && result[0].PlayerTurn == 2){
					if(result[0].Player2Bricks.length >= 10){
						var resjson = {
							error: true,
							response: "Too many bricks"
						}

						db.close();
						res.json(resjson);
						return;
					}

					for(var i = 0; i < result[0].Player1Bricks.length; i++){
						if(JSON.stringify(req.body.brick) == JSON.stringify(result[0].Player1Bricks[i])){
							var resjson = {
								error: true,
								response: "Brick already placed"
							}

							db.close();
							res.json(resjson);
							return;
						}

						if((req.body.brick.x == result[0].Player1Bricks[i].x) && (req.body.brick.y == result[0].Player1Bricks[i].y)){
							console.log("type1")
							var resjson = {
								error: true,
								response: "Brick blocks brick"
							}

							db.close();
							res.json(resjson);
							return;
						}

						if(!(req.body.brick.vertical) && !(result[0].Player1Bricks[i].vertical)){
							if((req.body.brick.y == result[0].Player1Bricks[i].y) && Math.abs(req.body.brick.x - result[0].Player1Bricks[i].x) <= 1){
								console.log("type2")
								var resjson = {
									error: true,
									response: "Brick blocks brick"
								}

								db.close();
								res.json(resjson);
								return;
							}
						}
						else if(req.body.brick.vertical && result[0].Player1Bricks[i].vertical){
							if((req.body.brick.x == result[0].Player1Bricks[i].x) && Math.abs(req.body.brick.y - result[0].Player1Bricks[i].y) <= 1){
								var resjson = {
									error: true,
									response: "Brick blocks brick"
								}

								db.close();
								res.json(resjson);
								return;
							}
						}
					}

					for(var i = 0; i < result[0].Player2Bricks.length; i++){
						if(JSON.stringify(req.body.brick) == JSON.stringify(result[0].Player2Bricks[i])){
							var resjson = {
								error: true,
								response: "Brick already placed"
							}

							db.close();
							res.json(resjson);
							return;
						}

						if((req.body.brick.x == result[0].Player2Bricks[i].x) && (req.body.brick.y == result[0].Player2Bricks[i].y)){
							console.log("type1")
							var resjson = {
								error: true,
								response: "Brick blocks brick"
							}

							db.close();
							res.json(resjson);
							return;
						}

						if(!(req.body.brick.vertical) && !(result[0].Player2Bricks[i].vertical)){
							if((req.body.brick.y == result[0].Player2Bricks[i].y) && Math.abs(req.body.brick.x - result[0].Player2Bricks[i].x) <= 1){
								console.log("type2")
								var resjson = {
									error: true,
									response: "Brick blocks brick"
								}

								db.close();
								res.json(resjson);
								return;
							}
						}
						else if(req.body.brick.vertical && result[0].Player2Bricks[i].vertical){
							if((req.body.brick.x == result[0].Player2Bricks[i].x) && Math.abs(req.body.brick.y - result[0].Player2Bricks[i].y) <= 1){
								var resjson = {
									error: true,
									response: "Brick blocks brick"
								}

								db.close();
								res.json(resjson);
								return;
							}
						}
					}

					var query2 = {_id: o_id}
					var toupdate = {$push: {Player2Bricks: req.body.brick}, $set: {PlayerTurn: 1}};
					dbo.collection("game").findOneAndUpdate(query2, toupdate, function(err, result) {
						if (err) throw err;
						var resjson = {
							error: false,
							response: result.value
						}

						db.close();
						res.json(resjson);
						
					});
				}
				else{
					var resjson = {
						error: true,
						response: "Not your turn"
					}

					db.close();
					res.json(resjson);
					return;
				}
			});
		}
		else{
			var query = {_id: o_id}
			dbo.collection("game").find(query).toArray(function(err, result) {
				if (err) throw err;
				
				if(req.body.player == result[0].Player1 && result[0].PlayerTurn == 1){
					if(Math.abs(+req.body.x - +result[0].Player1x) == 1){
						if(Math.abs(+req.body.y - +result[0].Player1y) == 0){
							var difference = +req.body.x - +result[0].Player1x;

							for(var i = 0; i < result[0].Player1Bricks.length; i++){
								if(!result[0].Player1Bricks[i].vertical){
									continue;
								}

								if(difference == -1){
									if(result[0].Player1Bricks[i].x != +req.body.x){
										continue;
									}
								}
								else if(difference == 1){
									if(result[0].Player1Bricks[i].x != +result[0].Player1x){
										continue;
									}
								}

								if(result[0].Player1Bricks[i].y == req.body.y || result[0].Player1Bricks[i].y == req.body.y - 1){
									var resjson = {
										error: true,
										response: "Brick blocking the way"
									}

									db.close();
									res.json(resjson);
									return;
								}
							}

							for(var i = 0; i < result[0].Player2Bricks.length; i++){
								if(!result[0].Player2Bricks[i].vertical){
									continue;
								}

								if(difference == -1){
									if(result[0].Player2Bricks[i].x != +req.body.x){
										continue;
									}
								}
								else if(difference == 1){
									if(result[0].Player2Bricks[i].x != +result[0].Player1x){
										continue;
									}
								}

								if(result[0].Player2Bricks[i].y == req.body.y || result[0].Player2Bricks[i].y == req.body.y - 1){
									var resjson = {
										error: true,
										response: "Brick blocking the way"
									}

									db.close();
									res.json(resjson);
									return;
								}
							}
						}
						else{
							var resjson = {
								error: true,
								response: "Invalid movement"
							}

							db.close();
							res.json(resjson);
							return;
						}
					}
					else if(Math.abs(+req.body.y - +result[0].Player1y) == 1){
						if(Math.abs(+req.body.x - +result[0].Player1x) == 0){
							var difference = +req.body.y - +result[0].Player1y;

							for(var i = 0; i < result[0].Player1Bricks.length; i++){
								if(result[0].Player1Bricks[i].vertical){
									continue;
								}

								if(difference == -1){
									if(result[0].Player1Bricks[i].y != +req.body.y){
										continue;
									}
								}
								else if(difference == 1){
									if(result[0].Player1Bricks[i].y != +result[0].Player1y){
										continue;
									}
								}

								if(result[0].Player1Bricks[i].x == req.body.x || result[0].Player1Bricks[i].x == req.body.x - 1){
									var resjson = {
										error: true,
										response: "Brick blocking the way"
									}

									db.close();
									res.json(resjson);
									return;
								}
							}

							for(var i = 0; i < result[0].Player2Bricks.length; i++){
								if(result[0].Player2Bricks[i].vertical){
									continue;
								}

								if(difference == -1){
									if(result[0].Player2Bricks[i].y != +req.body.y){
										continue;
									}
								}
								else if(difference == 1){
									if(result[0].Player2Bricks[i].y != +result[0].Player1y){
										continue;
									}
								}

								if(result[0].Player2Bricks[i].x == req.body.x || result[0].Player2Bricks[i].x == req.body.x - 1){
									var resjson = {
										error: true,
										response: "Brick blocking the way"
									}

									db.close();
									res.json(resjson);
									return;
								}
							}
						}
						else{
							var resjson = {
								error: true,
								response: "Invalid movement"
							}

							db.close();
							res.json(resjson);
							return;
						}
					}
					else{
						var resjson = {
							error: true,
							response: "Invalid movement"
						}

						db.close();
						res.json(resjson);
						return;
					}

					var query2 = {_id: o_id}
					var toupdate = {$set: {PlayerTurn: 2, Player1x: req.body.x, Player1y: req.body.y}};
					dbo.collection("game").findOneAndUpdate(query2, toupdate, function(err, result) {
						if (err) throw err;
						var resjson = {
							error: false,
							response: result.value
						}

						db.close();
						res.json(resjson);
						return;
						
					});
				}
				else if(req.body.player == result[0].Player2 && result[0].PlayerTurn == 2){
					if(Math.abs(+req.body.x - +result[0].Player2x) == 1){
						if(Math.abs(+req.body.y - +result[0].Player2y) == 0){
							var difference = +req.body.x - +result[0].Player2x;

							for(var i = 0; i < result[0].Player1Bricks.length; i++){
								if(!result[0].Player1Bricks[i].vertical){
									continue;
								}

								if(difference == -1){
									if(result[0].Player1Bricks[i].x != +req.body.x){
										continue;
									}
								}
								else if(difference == 1){
									if(result[0].Player1Bricks[i].x != +result[0].Player2x){
										continue;
									}
								}

								if(result[0].Player1Bricks[i].y == req.body.y || result[0].Player1Bricks[i].y == req.body.y - 1){
									var resjson = {
										error: true,
										response: "Brick blocking the way"
									}

									db.close();
									res.json(resjson);
									return;
								}
							}

							for(var i = 0; i < result[0].Player2Bricks.length; i++){
								if(!result[0].Player2Bricks[i].vertical){
									continue;
								}

								if(difference == -1){
									if(result[0].Player2Bricks[i].x != +req.body.x){
										continue;
									}
								}
								else if(difference == 1){
									if(result[0].Player2Bricks[i].x != +result[0].Player2x){
										continue;
									}
								}

								if(result[0].Player2Bricks[i].y == req.body.y || result[0].Player2Bricks[i].y == req.body.y - 1){
									var resjson = {
										error: true,
										response: "Brick blocking the way"
									}

									db.close();
									res.json(resjson);
									return;
								}
							}
						}
						else{
							var resjson = {
								error: true,
								response: "Invalid movement"
							}

							db.close();
							res.json(resjson);
							return;
						}
					}
					else if(Math.abs(+req.body.y - +result[0].Player2y) == 1){
						if(Math.abs(+req.body.x - +result[0].Player2x) == 0){
							var difference = +req.body.y - +result[0].Player2y;

							for(var i = 0; i < result[0].Player1Bricks.length; i++){
								if(result[0].Player1Bricks[i].vertical){
									continue;
								}

								if(difference == -1){
									if(result[0].Player1Bricks[i].y != +req.body.y){
										continue;
									}
								}
								else if(difference == 1){
									if(result[0].Player1Bricks[i].y != +result[0].Player2y){
										continue;
									}
								}

								if(result[0].Player1Bricks[i].x == req.body.x || result[0].Player1Bricks[i].x == req.body.x - 1){
									var resjson = {
										error: true,
										response: "Brick blocking the way"
									}

									db.close();
									res.json(resjson);
									return;
								}
							}

							for(var i = 0; i < result[0].Player2Bricks.length; i++){
								if(result[0].Player2Bricks[i].vertical){
									continue;
								}

								if(difference == -1){
									if(result[0].Player2Bricks[i].y != +req.body.y){
										continue;
									}
								}
								else if(difference == 1){
									if(result[0].Player2Bricks[i].y != +result[0].Player2y){
										continue;
									}
								}

								if(result[0].Player2Bricks[i].x == req.body.x || result[0].Player2Bricks[i].x == req.body.x - 1){
									var resjson = {
										error: true,
										response: "Brick blocking the way"
									}

									db.close();
									res.json(resjson);
									return;
								}
							}
						}
						else{
							var resjson = {
								error: true,
								response: "Invalid movement"
							}

							db.close();
							res.json(resjson);
							return;
						}
					}
					else{
						var resjson = {
							error: true,
							response: "Invalid movement"
						}

						db.close();
						res.json(resjson);
						return;
					}

					var query2 = {_id: o_id}
					var toupdate = {$set: {PlayerTurn: 1, Player2x: req.body.x, Player2y: req.body.y}};
					dbo.collection("game").findOneAndUpdate(query2, toupdate, function(err, result) {
						if (err) throw err;
						var resjson = {
							error: false,
							response: result.value
						}

						db.close();
						res.json(resjson);
						return;
					});
				}
				else{
					var resjson = {
						error: true,
						response: "Not your turn"
					}

					db.close();
					res.json(resjson);
					return;
				}
			});
		}
		
	});

})


app.delete('/game/:id', function(req, res) {

	var id = req.params.id;
	var winner = req.body.winner;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var dbo = db.db("quoridor");
		var o_id = new mongo.ObjectID(id);
		var query = {_id: o_id};
		dbo.collection("game").find(query).toArray(function(err, result) {
			if (err) throw err;

			var blockslist;
			if(result[0].Player1 == winner){
				blockslist = result[0].Player1Bricks;
			}
			else{
				blockslist = result[0].Player2Bricks;
			}

			var toInsert = {WinningBricks: blockslist};
			dbo.collection("strategy").insertOne(toInsert, function(err, result) {
				if (err) throw err;
				
				dbo.collection("game").findOneAndDelete(query, function(err, result) {
					if (err) throw err;
					
					var resjson = {
						error: false,
						response: result.value
					}

					db.close();
					res.json(resjson);
				});
			});
		});
	});

})


app.put('/strategy', function(req, res) {

	var bricks = req.body.bricks;
	console.log("bricks are " + JSON.stringify(bricks))

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");

		if(bricks.length < 3){
			db.close();
			res.json([]);
		}
		else{
			var dbo = db.db("quoridor");
			var query = {WinningBricks: {$all: bricks}}
			dbo.collection("strategy").find(query).toArray(function(err, result) {
				if (err) throw err;

				var resjson = [];
				var biggest = 0;

				console.log("result.length" + result.length)

				for(var i = 0; i < result.length; i++){
					if(result[i].WinningBricks.length > biggest){
						biggest = result[i].WinningBricks.length;
						resjson = result[i].WinningBricks;
					}
				}

				db.close();
				res.json(resjson);
			});

		}


		
	});

})


app.delete('/gameNoStrat/:id', function(req, res) {

	var id = req.params.id;
	var winner = req.body.winner;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var dbo = db.db("quoridor");
		var o_id = new mongo.ObjectID(id);
		var query = {_id: o_id};
		
				
		dbo.collection("game").findOneAndDelete(query, function(err, result) {
			if (err) throw err;
			
			var resjson = {
				error: false,
				response: result.value
			}

			db.close();
			res.json(resjson);
		});

	});
		

})


app.delete('/allGames', function(req, res) {

	var id = req.params.id;
	var winner = req.body.winner;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var dbo = db.db("quoridor");
		dbo.collection("game").deleteMany({}, function(err, result) {
			if (err) throw err;
			
			var resjson = {
				error: false,
				response: result.result.n
			}

			db.close();
			res.json(resjson);
		});
	});

})


app.delete('/allStrats', function(req, res) {

	var id = req.params.id;
	var winner = req.body.winner;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var dbo = db.db("quoridor");
		dbo.collection("strategy").deleteMany({}, function(err, result) {
			if (err) throw err;
			
			var resjson = {
				error: false,
				response: result.result.n
			}

			db.close();
			res.json(resjson);
		});
	});

})



app.get('/test', function(req, res) {

	var id = req.params.id;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var o_id = new mongo.ObjectID(id);
		var dbo = db.db("quoridor");
		dbo.collection("game").find({}).toArray(function(err, result) {
			if (err) throw err;
			var resjson = result;

			if(result.length == 0){
				db.close();
				res.write("No game found.");
			}

			db.close();
			res.json(resjson);
		});

		
	});

})


app.get('/test2', function(req, res) {

	var id = req.params.id;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Database connected");
		var o_id = new mongo.ObjectID(id);
		var dbo = db.db("quoridor");
		dbo.collection("strategy").find({}).toArray(function(err, result) {
			if (err) throw err;
			var resjson = result;

			if(result.length == 0){
				db.close();
				res.write("No game found.");
			}

			db.close();
			res.json(resjson);
		});

		
	});

})

app.listen(process.env.PORT || 3000);