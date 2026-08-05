import "./CardHolder.css";

export default function CardHolder({children}){
    return(
        <div className="CardHolder">
            {children}
        </div>
    );
}