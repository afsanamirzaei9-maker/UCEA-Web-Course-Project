export const Login = () => {
    return ( 
        <div className=" h-screen bg-gray-100 flex items-center">
            <form className="border flex flex-col justify-center items-center p-10 w-70 h-80 mx-auto rounded-lg shadow-lg">
                <p className="font-IranYekan text-md text-black font-bold">ورود به سیستم</p>
                <input type="email" placeholder="ایمیل آدرس" className="border text-center rounded-sm p-2 m-3" />
                <input type="password" placeholder="رمز ورود" className="border text-center rounded-sm p-2 m-3" />
                <input type="submit" placeholder="ورود" className="border text-center rounded-sm p-2 m-3 w-30 bg-blue-700 text-white hover:bg-blue-500" />
            </form>
        </div>
    );
}