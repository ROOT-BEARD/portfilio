
import NewSec from "../../components/layout/NewSec";
import "./HallowerPage.css";

export default function HallowerPage(){
    return(
        <div>
            <div className="GameFrame">
                <iframe className="game">
                </iframe>
            </div>
            <NewSec/>
        </div>
    );
}