import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import { connect } from "react-redux";
import Page from "./page.js"
import { updateGame, updateName, updateGameID } from "../redux/actions.js";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#00cc44',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      main: '#80a2ff',
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
			<MuiThemeProvider theme={theme}>
			<div align="center">
				<h1>Quoridor React</h1><br/>
				<h3>Enter your name:</h3>
				<form onSubmit={e => {e.preventDefault();}}>
					<input type='text' onChange={this.changeName}/>
				</form>
				<Link  href={{ pathname: '/game' }}>
					<Button onClick={this.startGame}>Start game!</Button>
				</Link>
				<style jsx global>{`
					body { 
						background: #ccebff;
					}
					@import url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic');

          @fontface {
            font-family: 'Gentium Book Basic', cursive;
            src: url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic')
          }

          h3 {
	          font-family: "Gentium Book Basic", Times, serif;
	        }
				`}
				</style>
			</div>
			</MuiThemeProvider>
		)
	}
}

export default Page(connect(state=>state)(LoginPage))