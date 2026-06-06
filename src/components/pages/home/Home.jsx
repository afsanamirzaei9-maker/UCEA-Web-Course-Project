import { CardsContainer } from "../../cards/CardsContainer";
import { Hero } from "../../hero/Hero";

export const Home = () => {
    return ( 
        <>
            <Hero 
                src={"/images/homeHero.webp"}
                title={'برنامه نویسی با UCA'}
                heroText1={"اگر می خواهید وارد دنیای واقعی برنامه نویسی و توسعه نرم افزار شوید٬ از همین جا شروع کنید."}
                heroText2={"  در کورس های برنامه نویسی UCA مسیر یادگیری به صورت اصولی و مرحله به مرحله طراحی شده تا از سطح مبتدی به یک توسعه دهنده حرفه ای تبدیل شوید."}
                heroText3={"  در کورس های برنامه نویسی UCA مسیر یادگیری به صورت اصولی و مرحله به مرحله طراحی شده تا از سطح مبتدی به یک توسعه دهنده حرفه ای تبدیل شوید."}
            />
            <CardsContainer/>
        </>
    );
}