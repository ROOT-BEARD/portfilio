import NewSec from "./NewSec";

export default function Footer(){
    return(
        <NewSec backgroundColor='rgb(1,1,1)'>
            <button onClick={() => window.scrollTo({top: 0, behavior:'smooth'})}>back to top</button>
        </NewSec>  
    );
}