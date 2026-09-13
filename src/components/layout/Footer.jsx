import { Button } from "@heroui/react";
import { MoveUp } from "lucide-react";
import NewSec from "./NewSec";

export default function Footer(){
    return(
        <NewSec backgroundColor='rgb(1,1,1)'>
            <div className="flex flex-col items-center justify-between">
                <Button variant="ghost" onClick={() => window.scrollTo({top: 0, behavior:'smooth'})}>
                    back to top
                    <MoveUp/>
                </Button>
                <a href="mailto:aawyatt04@gmail.com">
                    aawyatt04@gmail.com
                </a>
            </div>
        </NewSec>  
    );
}