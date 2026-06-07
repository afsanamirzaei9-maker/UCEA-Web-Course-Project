import { CardButton } from "../../buttons/CardButton"; 
import { GreenHeading } from "../../heading/GreenHeading";
import { Hero } from "../../hero/Hero";
export const Python = () => {
    return ( 
        <div className="containcer h-auto w-[90%] p-10 mx-auto flex flex-col justiy-center items-center">
            <GreenHeading text="دوره برنامه نویسی پایتون"/>
            <div className="w-full">
            <Hero 
                src={"/images/python.webp"}
                title={'پایتون'}
                heroText1={"اگر می خواهید وارد دنیای واقعی برنامه نویسی و توسعه نرم افزار شوید٬ از همین جا شروع کنید."}
                heroText2={"  در کورس های برنامه نویسی UCA مسیر یادگیری به صورت اصولی و مرحله به مرحله طراحی شده تا از سطح مبتدی به یک توسعه دهنده حرفه ای تبدیل شوید."}
                heroText3={""}
            />
            </div>
            <div className="mt-5">
                <CardButton btnName={"برگشت"} path="/"/> 
            </div>
        </div>
    );
}