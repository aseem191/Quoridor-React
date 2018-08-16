import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import Page from "./page.js"
import { updateGame, updateName, updateGameID } from "../redux/actions.js";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Layout from '../components/layout.js'

const theme = createMuiTheme({
	palette: {
		primary: {
		// light: will be calculated from palette.primary.main,
			main: '#7ce7ff',
		// dark: will be calculated from palette.primary.main,
		// contrastText: will be calculated to contast with palette.primary.main
		},
		secondary: {
			main: '#ffffff',
		// dark: will be calculated from palette.secondary.main,
		},
		tertiary: {
			main: '#33ffcc',
		// dark: will be calculated from palette.secondary.main,
		},
		// Used by `getContrastText()` to maximize the contrast between the background and
		// the text.
		contrastThreshold: 3,
		// Used to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2,
	},

	props: {
		// Name of the component ⚛️
		MuiButtonBase: {
		// The properties to apply
			disableRipple: true, // No more ripple, on the whole application 💣!
		},
	},
});

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
		if(this.state.name == ""){

		}
		else{
			if(this.props.gameID){
				var params = {
					id: this.props.gameID
				}
				fetch(urlname + "/destroy", {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(params)}).then(response => response.json()).then(data => {
					
				})
			}
			

			this.props.dispatch(updateName(this.state.name));
			this.props.dispatch(updateGameID(null));
			this.props.dispatch(updateGame(null));


			console.log("done")
		}
		
	}

	render(){
		return(
			<Layout>
			<MuiThemeProvider theme={theme}>
			<div align="center">
				<br/><br/>
				<h1 style={{fontFamily: "Graduate", fontWeight: "bold", fontSize: '40px' }}>Quoridor React</h1><br/><br/><br/>
				<h3 style={{fontFamily: "Rubik", fontWeight: "bold", fontSize: '20px' }}>Enter your name</h3>
				<form onSubmit={e => {e.preventDefault();}}>
					<TextField style={{fontFamily: "Rubik", fontWeight: "bold", fontSize: '20px' }} onKeyPress={e => {if (e.key === 'Enter') e.preventDefault();}} onChange={this.changeName} margin="normal" />
				</form>
				<br/>
				<Link  href={{ pathname: '/game' }}>
					<Button variant="contained" style={{fontFamily: "Graduate", fontWeight: "bold", fontSize: '16px' }} onClick={this.startGame} color="secondary">Start game!</Button>
				</Link>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<Link  href={{ pathname: '/learn' }}>
					<Button variant="contained" style={{fontFamily: "Graduate", fontWeight: "bold", fontSize: '14px' }} color="primary">How to play</Button>
				</Link>
				
			</div>
			</MuiThemeProvider>
			<style jsx global>{`
				body { 
					background: #c9f5ff;
					background-image: url("/static/bgleft.png"), url("/static/bgright.png");
					background-position: left center, right center;
					background-repeat: no-repeat, no-repeat;
				}
				
			`}
			</style>
			</Layout>
		)
	}
}

export default Page(connect(state=>state)(LoginPage))