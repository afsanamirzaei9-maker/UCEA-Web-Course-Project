import { GreenHeading } from "../../heading/GreenHeading";
import { Paragraph } from "../../text/Paragraph";
import Articles from "./Articles";

export const Blog = () => {
    return ( 
        <>
           <div className="text-center m-5">
                <GreenHeading text="به وبلاگ UCA خوش آمدید!" /> 
                <Paragraph paragraph=" در اینجا جدید ترین مقالات علمی حوزه برنامه نویسی و تجربیات علمی را با شما به اشتراک می گذاریم. "/>
           </div>  
            <Articles/>
        </>
    );
}