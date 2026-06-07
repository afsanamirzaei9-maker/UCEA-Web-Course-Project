import { CardButton } from "../buttons/CardButton";
import { CardHeading } from "../heading/CardHeading";
import { CardText } from "../text/CardText";

export const Card = ({src, alt, heading, text, btnPath}) => {
    return ( 
        <div className="w-80 h-120 mx-auto border rounded-md overflow-hidden  shadow-lg">
            <img src={src} alt={alt} className="w-full h-60 mx-auto"/>
            <CardHeading text={heading} className="p-10"/>
            <CardText cardText={text}/>
            <CardButton btnName="خرید دوره" path={btnPath}/>
        </div> 
   );
}