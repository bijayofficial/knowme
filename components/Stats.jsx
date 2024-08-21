"use client";

import CountUp from "react-countup";

const stats = [
    { 
        num: 5, 
        text: "Years of experience",
    },
    {
        num: 25,
        text:"projeccts completed",
    },
    {
        num:18,
        text: "technologies mastered",
    },
    {
        num: 500,
        text: "Code commits",
    },

];

const Stats = () => {
  return <section className="pt-4 pb-12 lg:pt-0 lg:pb-0">
    <div className="container mx-auto">

        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) =>{
                return <div key={ index }  className="flex items-center gap-4 lg:justify-start justify-center flex-1 ">
                    <CountUp 
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl lg:text-6xl font-extrablod " 
                    />
                    <p
                    className={`${item.text.length < 15 ? 'max-w-[150px]' : 'max-w-[550px]'
                        }leading-sung text-white/80`}
                    >{item.text}</p>
                </div>
            })}
        </div>

    </div>

  </section>;
};

export default Stats;
