import React, {Component} from 'react';
import {withRouter} from "react-router";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.setState ={
            userId:"",
            password : "",
            confirm:"",
            errorMsg:null
        }
    }

    onTextChange = event =>{
        this.setState({
            [event.target.id]:event.target.value
        });
    }


    doSignUp = async () =>{
        const{userId,password,confirm} = this.state;

        if(confirm !== password){
            this.setState({errorMsg:"Şifreler eşleşmemektedir."});
            return;
        }

        const url = "/api/signup";

        const payload = {userId,password};
        let response;
        try {
            response =  await fetch(url,{
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(payload)
            });
        }catch (e) {
            this.setState({errorMsg:"Sunucuya baglanamadı" +e});
            return;
        }
        if(response.status ===400){
            this.setState({errorMsg :"Gecersiz kullanıcı ID"});
            return;
        }
        if (response.status !==201){
            this.setState({errorMsg:"Sunucuya baglanırken hata:durum kodu"+response.status});
            return;
        }
        this.setState({errorMsg : null});

        await this.props.fetchAndUpdateUserInfo();
        this.props.history.push("/");

    }




    render() {
        let error = <div></div>;

        if(this.state.errorMsg){
            error= (
                <div className="errorMsg">
                    <p>{this.state.errorMsg}</p>
                </div>
            )
        }

        let confirmMsg ="OK";
        if (this.state.confirm !==this.state.password){
            confirmMsg = "Eşleşme olmadı";
        }


        return (
            <div className={"center"}>
                <div>
                    <p>Kullanici:</p>
                    <input
                        type="text"
                        value={this.state.userId}
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
                <div>
                    <p>Tekrar:</p>
                    <input
                        type="password"
                        value={this.state.confirm}
                        id="confirm"
                        onChange={this.onTextChange}
                    />
                    <div>{confirmMsg}</div>
                </div>
                <div>{error}</div>
                <button className="button" onClick={this.doSignUp}>Uye Ol</button>
            </div>
        );
    }
}

export default withRouter(Signup);