import React from "react";
import { ButtonPrimary , ButtonOutline} from "./Button";

const Hero = () => {
    return (
        <section id="home">
            <div className="pt-28 lg:pt-36">
                <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                    {/* Texte à gauche */}
                    <div className=" items-center gap-3 pl-5 pr-5" >
                    <div className="flex gap-2">
                    <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/images/ziad.png" width={40} height={40} alt="" className="img-cover" />   
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
                            <span className=" relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute w-2 h-2 rounded-full inset-0 animate-ping bg-emerald-400"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] lg:mb-10">
                            {/*  */}
                            Hi! my name is Ziad <br />
                            i'm a Fullstack developer
                           
                        </h2>
                        <p className="headline-1-p">Building Scalable Modern Websites for the Future is my objectif</p>
                        
                        <div className="flex items-center gap-3">
                            <ButtonPrimary />
                            <ButtonOutline />
                        </div>
                    </div>

                    {/* Image à droite */}
                    <div className="hidden lg:block">
                        <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-skyyy-400/40 rounded-[60px] overflow-hidden">
                            <img 
                                src="/images/photo.jpeg" 
                                width={656} 
                                height={800} 
                                alt="Ziad Chamrah" 
                                className="w-full"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
