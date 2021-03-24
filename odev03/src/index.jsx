import React,{Component} from "react";
import ReactDOM from "react-dom";
class App extends Component{
    constructor() {
        super();
    }
    render(){
        return(
        <div>
            <div className="container0">
                <img id="resim" className="kart" src="../public/img/kopek.jpg" onClick="myFunction()" alt=""/>

            </div>
            <div className="container1">
                <img id="resim1" className="kart" src="../public/img/kedi.jpg" onClick="myFunction1()" alt=""/>

            </div>

            <div className="container2">
                <img id="resim2" className="kart" src="../public/img/zebra.jpg" onClick="myFunction2()" alt=""/>

            </div>
        </div>

        );
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));
export default App





