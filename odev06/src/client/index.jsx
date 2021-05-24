import React from "react";
import  ReactDOM from "react-dom";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Game} from "./game";
import {Home} from "./home";
import Headerbar from "./headerbar";
import Signup from "./signup";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        user:null,
            errorMsg:null
        }

    }
    fetchAndUpdateUserInfo = async() =>{
        const url = "/api/user";
        let response;

        try {
            response = await fetch(url);
        }catch (e) {
            this.setState({errorMsg:"Sunucuya baglanamadı"+e});
            return;
        }
        if(response.status ===401){
            this.updateLoggedInUser(null);
            return;
        }
        if(response.status !==200){

        }else {
            const payload = await response.json();
            this.updateLoggedInUser(payload);

        }

    }
    updateLoggedInUser = (user) =>{
        this.setState({user:user});
    }

    componentDidMount(){
         this.fetchAndUpdateUserInfo();
    }

    notFound = () => {
        return (
            <div>
                <h2>Sayfa Bulunamadı: 404</h2>
                <p>
                    Hata: Aradığınız sayfaya şu anda ulaşılamıyor.
                    Lütfen daha sonra tekrar deneyiniz.
                </p>
            </div>
        )
    }
    render() {

        const id = this.state.user ? this.state.user.id:null;

        return(
            <HashRouter>
                <div>
                    <Headerbar userId ={id}
                    updateLoggedInUser={this.updateLoggedInUser}/>
                    <Switch>
                        <Route exact path='/game' render={props =><Game
                            {...props}
                            user = {this.state.user}
                            updateLoggedInUser={this.updateLoggedInUser}
                            fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                            />}/>
                        <Route exact path='/login' render={props =><Login
                            {...props}
                            fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                        />}/>
                        <Route exact path='/signup' render={props =><Signup
                            {...props}
                            fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                        />}/>


                        <Route exact path='/' render={props =><Home
                            {...props} user={this.state.user} fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}/>}/>
                        <Route component={this.notFound}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

