import React, {Component} from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

class Headerbar extends Component {

    doLogout = async () =>{
        const url = "/api/logout";
        let response;
        try {
            response = await fetch(url,{method:"post"});
        }
        catch (e) {
            alert("Sunucuya Baglanamadı" +e);
            return;
        }
        if (response.status !==204){
            alert("Sunucuya Baglanamadı" +response.status);
            return
        }
        this.props.updateLoggedInUser(null);
        this.props.history.push("/");

    }
    renderLoggedIn = (userId) =>{
        return(
            <React.Fragment>
                <p className="header-text">
                    Hoş geldiniz.. {userId}
                </p>
                <button className="header-button" onClick={this.doLogout}>Exit</button>
            </React.Fragment>
        )
    }
    renderNotLoggedIn =() =>{
            return(
                <React.Fragment>
                    <p className="header-text">Giriş Yapmadınız</p>
                    <div className="action-buttons">
                        <Link className="header-button" to ="/login" tabIndex ="0">Giriş yap</Link>
                        <Link className="header-button" to ="/signup" tabIndex ="0">Uye Ol</Link>
                    </div>
                </React.Fragment>
            )
    }



    render() {
        const UserId =this.props.userId;
        let content;
        if(!userId){
            content = this.renderNotLoggedIn();
        }
        else{
            content =this.renderLoggedIn();
        }
        return (
            <div className="header">
                <Link className="header-logo" to={"/"} tabIndex = "0">
                    Quiz
                </Link>
                {content}

            </div>
        );
    }
}

export default withRouter(Headerbar);