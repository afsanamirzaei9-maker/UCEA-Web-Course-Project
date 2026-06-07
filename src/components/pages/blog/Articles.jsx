import './buttons.css';
import { useState } from 'react';
import { Hero } from "../../hero/Hero";
import { blogData } from './blogData.js';
const Articles = () => {

    const [active, setActive] = useState("");

  return (
    <section classNsme="container">
        <hr />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 md:p-5">
            <button 
                className={`greenBtn text-center font-semibold  p-3 rounded rounded-5 transition ${active === 'python' ? "bg-green-700 text-white" : "bg-white text-green-700"}`}
                onClick={()=> setActive("python")}
            >
                Python Article
            </button>
            <button
                 className={`redBtn text-center font-semibold  p-3 rounded rounded-5 transition ${active === 'react' ? "bg-red-700 text-white" : "bg-white text-red-700"}`}
                 onClick={()=> setActive("react")}
            >
                React Article
            </button>
            <button
                 className={`blueBtn text-center font-semibold  p-3 rounded rounded-5 transition ${active === 'next' ? "bg-blue-700 text-white" : "bg-white text-blue-700"}`}
                 onClick={()=> setActive("next")}
            >
                Next Article
            </button>
            <button
                className={`purpleBtn text-center font-semibold  p-3 rounded rounded-5 transition ${active === 'tailwind' ? "bg-purple-700 text-white" : "bg-white text-purple-700"}`}
                onClick={()=> setActive("tailwind")}
            >
                Tailwind Article
            </button>
        </div>
        <hr />
        <article>
            {active && (
                <Hero 
                    src={blogData[active].image}
                    title={blogData[active].title}
                    heroText1={blogData[active].text}
                    heroText2={""}
                    heroText3={""}
                />
            )
            
            }
        {/* <Hero 
            src={"/images/python.webp"}
            title={"پایتون توسط چه کسی ساخته شد؟"}
            heroText1={" ما تمام دوره های برنامه نویسی را بصورت پروژه محور و با کم ترین هزینه برگزار می نماییم. "}
            heroText2={" با برگزاری صنوف آنلاین برای طبقه اناث٬ محدودیت های تحصیلی را از میان برداشته ایم.  "}
            heroText3={""}
        /> */}
        </article>
    </section>
  )
}

export default Articles