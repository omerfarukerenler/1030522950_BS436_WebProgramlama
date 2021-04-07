import React, { Component } from 'react';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Game: null
        }
    }
    componentDidMount() {
        this.startNewMatch()
    }
    startNewMatch = () => {
        this.setState({
            Game:{
                victory: false,
                defeat: false,
                currentIndex: 0,
            }
        })
    }


    handleClick = (correct) => {
        const { kart, kediIndex, kartSayac, oyunSonlandi } = this.state.Game;

        if(!oyunSonlandi){
            const yeniKart = [...kart];
            let durum;

            if(kediIndex===correct){
                yeniKart[correct] = "img/Kedi.jpg"
                this.setState({
                        match:{victory:true}
                    });

            }else {
                yeniKart[correct] = "img/Kopek.jpg"
                if(kartSayac===1){
                    this.setState({
                        match:{defeat:true},
                    });

                }
            }
            this.setState({
                kart:yeniKart,
                kartSayac: this.state.kartSayac+1,
                durum
            });

            if(durum){
                this.setState({
                    oyunSonlandi: true
                })
            }

        }
    }

    yeniOyun = () => {
        const { kart, kediIndex, kartSayac, oyunSonlandi } = this.state.Game;
        this.setState({
            kediIndex: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            kartSayac: 0,
            oyunSonlandi: false
        })
    }

    render(){
        const Game = this.state.Game;

        if(!this.state.Game){
            return <h2>Yükleniyor...</h2>
        }
        if(Game.victory){
            return (
                <div className="game-result">
                    <h2>Kazandın!</h2>
                    <div className="action">
                        <button className="play new-game-button" onClick={this.startNewMatch}>Yeni Oyun</button>
                    </div>
                </div>
            );
        }

        if(Game.defeat){
            return (
                <div className="game-result">
                    <h2>Kaybettin:( Kediyi seçmen gerekiyordu </h2>
                    <div className="action">
                        <button className="play new-game-button" onClick={this.startNewMatch}>Yeni Oyun</button>
                    </div>
                </div>
            );
        }
        return (
             <>
                <p>2 hakkınız kaldı</p>
                 <img className="kart" src={kart[0]} onClick={()=>{this.handleClick(0)}}/>
                 <img className="kart" src={kart[1]} onClick={()=>{this.handleClick(1)}}/>
                 <img className="kart" src={kart[2]} onClick={()=>{this.handleClick(2)}}/>
                 <div className="mesaj">
                     <p>{durum?durum:"Kedi kartını bulmak için kartın üzerine tıklamalısın."}</p>
                     {durum && <p>
                     </p>}
                </div>
            </>
        );
    }
}

