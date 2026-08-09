
import NewSec from "../../../components/layout/NewSec";
import "./HallowerPage.css";

export default function HallowerPage(){
    return(
        <div>
            <div>
                <div className="GameFrame">
                    <iframe
                    className="game"
                    //src="https://games.voodoo.io/paperio2"
                    title="placeholder snake game"
                    allow="autoplay; fullscreen"
                    />
                </div>
            </div>
            <NewSec/>
        </div>
    );
}