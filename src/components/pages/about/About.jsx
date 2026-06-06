import { CardButton } from "../../buttons/CardButton";
import MiniCard from "../../cards/MiniCard";
import { MiniCardData } from "../../cards/MiniCardData";
import { GreenHeading } from "../../heading/GreenHeading";
import { Hero } from "../../hero/Hero";
import { Paragraph } from "../../text/Paragraph";

export const About = () => {
    return ( 
        <div className="p-10 flex flex-col items-center">
            <div className="header text-center">
                <GreenHeading text={" در باره ما "}/>
                <Paragraph paragraph={" ما یک وبسایت آموزشی هستیم که هدف ما آموزش برنامه نویسی به زبان ساده و پروژه محور است ."}/>
                <Paragraph paragraph={" ما  با گسترش دانش آنلاین زمینه یادگیری برنامه نویسی تخصصی را در سرتاسر کشور و فراهم می سازیم. "} />
                <Paragraph paragraph={" ما به آینده می نگریم. "} />
            </div>
            <div className="mb-10">
                <Hero 
                    src={"/images/aboutHero.webp"}
                    title={'چرا ما را انتخاب کنید؟'}
                    heroText1={" ما تمام دوره های برنامه نویسی را بصورت پروژه محور و با کم ترین هزینه برگزار می نماییم. "}
                    heroText2={" با برگزاری صنوف آنلاین برای طبقه اناث٬ محدودیت های تحصیلی را از میان برداشته ایم.  "}
                    heroText3={" هر دوره را در سه لیبل مبتدی٬ متوسط و پیشرفته برگزار می کنیم. برای دانش آموزانی که با نمره بالا فارغ میشوند٬ فرصت های همکاری در پروژه های واقعی را فراهم ساخته ایم تا با کسب تجربه کاری٬ عملا آماده ورود به بازار کار شوند. "}
                />
            </div>
            <div className="mt-20 flex flex-col justify-center items-center md:flex-row gap-6">
                {
                    MiniCardData.map((miniCard) =>(
                        <MiniCard
                            key={miniCard.id}
                            {...miniCard}
                        />
                    ))
                }
            </div>
            <div className="mt-30">
                <CardButton btnName=" مشاهده دوره ها " path={"/"}/>
            </div>
        </div>
    );
};