import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// Components
import Social from "@/components/ui/Social"
import Photo from "@/components/ui/Photo"
import Stats from "@/components/Stats"
const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        
        <div className="flex flex-col xl:flex-row items-center xl:pt-8 xl:pb-14 justify-between ">

          {/* text */}
          <div className="text-center lg:text-left order-2  xl:order-none">
            <span className="text-xl text-slate-400">Software Developer</span>
            <h1 className="h1">
              Hello Im <br />
              <span className="text-accent">Bijay Ghosh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white" >
              I specialize in creating digital experiences and am skilled in multiple programming languages and technologies.
            </p>
            <div className=" flex flex-col lg:flex-row items-center gap-2 ">
              <a href=" https://drive.google.com/file/d/1nBx11n-Yx1PuFNUw5y8TRfUl2UT3HVQN/view?usp=sharing" target="blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-8"
                ><span>Download Resume </span>
                  <FiDownload className="mx-2 text-xl" />
                </Button>
              </a>
              <div className="mb-8 lg:mb-4 ">
                <Social containerStyles="flex  gap-6"
                  iconStyle="h-9 w-9 border border-accent 
                  rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default page