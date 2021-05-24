import React, {Component} from 'react';
import {withRouter} from "react-router";

class Login extends Component {
    constructor(props) {
        super();
        this.state={
            userId : "",
            password : "",
            errorMsg:null
        }
    }

    doLogIn = async () =>{
        const {userId,password} = this.state;
        const url = "/api/login";
        const payload = {userId,password};

        let response;
        try {
            response = await fetch(url,{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body :JSON.stringify(payload)
            });
        }catch (e) {
            this.setState({errorMsg : "Sunucuya Baglanamadı" +err});
            return;
        }
        if (response.state ===401){
            this.setState({errorMsg : "Gecersiz kullanici id/sifre"});
            return;
        }
        if(response.status !=204){
            this.setState({errorMsg : "Sunucuya baglanırken hata" +response.status});
            return;
        }
        this.setState({errorMsg : null});

        await this.props.fetchAndUpdateUserInfo();
        this.props.history.push("/");
    }


    onTextChange = event =>{
        this.setState({
            [event.target.id]:event.target.value
        });
    }



    render() {
        let error = <div></div>;
        if(this.state.errorMsg){
            error = (
                <div className="errorMsg">
                    <p>{this.state.errorMsg}</p>
                </div>
            )
        }
        return (
            <div className="center">
                <div>
                    <p>Kullanici:</p>
                    <input
                    type="text"
                    value={this.state.password}
                    id="userId"
                    onChange={this.onTextChange}
                    />
                </div>
                <div>
                    <p>Sifre:</p>
                    <input
                        type="password"
                        value={this.state.password}
                        id="password"
                        onChange={this.onTextChange}

                    />
                </div>
                {error}
                <button className="button" onClick={this.doLogIn}>Giriş</button>
                <Link className="button" tabIndex="0" to={"/signup"}>Üye Ol</Link>

            </div>
        );
    }
}

export default withRouter(Login);