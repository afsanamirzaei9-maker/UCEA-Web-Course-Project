import { CardButton } from "../buttons/CardButton";
import { CardHeading } from "../heading/CardHeading";
import { GreenHeading } from "../heading/GreenHeading";
import { Card } from "./Card";
import { classCardData } from "./classCardData.js";

export const CardsContainer = () => {
    return ( 
        <div className="w-[90%] mt-10 md:mt-30 text-center mx-auto p-10">
            <div className="mb-5 md:mb-15">
            <GreenHeading text={'دوره های آموزشی'}/> 
            </div>
            <div className="cards-Container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6  ">
            {
                classCardData.map((cardsIndex) => (
                    <Card
                        key={cardsIndex.btnPath}
                        {...cardsIndex}
                    />
                ))
            }
            </div>
        </div>
    );
}