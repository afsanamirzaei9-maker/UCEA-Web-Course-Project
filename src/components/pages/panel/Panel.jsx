import {CardButton} from "../../buttons/CardButton";

export const Panel = () => {
    return ( 
        <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
            <div className="w-[80%] p-10 border h-40 flex flex-col justify-center items-center rounded-lg shadow-lg bg-green-900 text-white" dir="ltr">
                <h1 className="font-md md:font-xl">Welcome back Afsana!</h1>
                <p>In this panel you ca manage all your course like payment, notiftcation, tasks and etc.</p>
            </div> 
            <div  className="mt-5">
            <CardButton btnName={"برگشت"} path="/"/> 
            </div>
        </div>
    );
}