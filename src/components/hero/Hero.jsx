export const Hero = ()=>{
    return(
        <div className="hero w-[80%] mx-auto mt-10 flex flex-col  md:flex-row md:mt-30 md:h-[55vh] md:gap-5">
            <div className="hero-img md:w-1/2">
                <img src="/images/homeHero.jpg" alt="hero image" className="h-full"/>
            </div>
            <div className="hero-text md:w-1/2 h-full mt-10 md:mt-0">
                <p className="font-lalezar text-3xl text-green-800">
                    برنامه نویسی با UCA
                </p>
                <p className="font-IranYekan text-sm md:text-lg">
                    اگر می خواهید وارد دنیای واقعی برنامه نویسی و توسعه نرم افزار شوید٬ از همین جا شروع کنید.
                </p>
                <p className="font-IranYekan text-sm md:text-lg">
                    در کورس های برنامه نویسی UCA مسیر یادگیری به صورت اصولی و مرحله به مرحله طراحی شده تا از سطح مبتدی به یک توسعه دهنده حرفه ای تبدیل شوید.
                </p>
                <p className="font-IranYekan text-sm md:text-lg">
                    در این دوره ها علاوه بر یادگیری مفاهیم پایه تا پیشرفته٬ روی پروژه های واقعی کارمی کنید تا مهارت هایی را به دست بیاورید که مستقیما در بازار کار استفاده می شوند. هدف ما فقط آموزش تيوری نیست٬ بلکه ساختن توانایی واقعی برای ورود به دنیای نکنالوژی هست.
                </p>
            </div>
        </div>
    )
}