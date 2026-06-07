import { Link } from "react-router-dom";

export const CardButton = (props) => {
    return ( 
        <Link to={props.path} className="card-btn px-10 py-2 bg-green-800 w-auto rounded rounded-3xl mx-auto m-2 hover:bg-green-500 text-decoration-none text-white font-IranYekan text-sm">{props.btnName}</Link>
    );
}