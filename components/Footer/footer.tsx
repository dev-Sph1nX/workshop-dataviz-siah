import React from "react";
import {SOURCES} from './../../public/data/sources';

import LinesEllipsis from 'react-lines-ellipsis';
import Image from "next/image";

export function Footer(){

    const tier = Math.ceil(SOURCES.length / 3);    
    const firstTier = SOURCES.slice(0, tier)
    const secondTier = SOURCES.slice(tier, tier*2)
    const thirdTier = SOURCES.slice(tier*2)

    return <div className="flex flex-col">
        <div className="pt-[61px] pb-[76px] px-[70px] bg-[#F7F7F7]">
            <span className="font-['Eyra-400ExtraLight'] uppercase leading-8">Sources</span>
            <div className="w-full flex gap-10">
                <div className="flex flex-col w-1/3">
                {
                    firstTier.map((s)=>{
                        return <Link href={s.link}>{s.label}</Link>                        
                    })
                }
                </div>
                <div className="flex flex-col w-1/3">
                {
                    secondTier.map((s)=>{
                        return <Link href={s.link}>{s.label}</Link>                        
                    })
                }
                </div>
                <div className="flex flex-col w-1/3">
                {
                    thirdTier.map((s)=>{
                        return <Link href={s.link}>{s.label}</Link>                        
                    })
                }
                </div>
            </div>
        </div>
        <div className="py-9 px-[70px] bg-[#141414] flex">
            <div className="flex gap-10">
                <Image
                    src="/image/logoCCI.png"
                    width={200}
                    height={59}
                    alt="Logo de la CCI" />
                <Image
                    src="/image/logoGobelins.png"
                    width={60}
                    height={60}
                    alt="Logo de Gobelins Paris" />
            </div>
            <div className="flex-1 text-center text-[#FEFCFF] font-['Eyra-400Light']">
                Projet réalisé dans le cadre de la formation CCI - École des Gobelins Annecy par <br />
                <span className="font-['Eyra-400Regular']">
                    Lucas Leperlier, Jean Deleage, Apolline Grember, Jereymy Lagadec, Loïc Greco
                </span>
            </div>
            <div className="font-['Eyra-400ExtraLight'] text-[#FEFCFF]">
                <p>Projet étudiant B3</p>
                <p>Promotion 2022-2023</p>
            </div>
            
        </div>
    </div>
}

function Link({href, children}:any): JSX.Element{
    return <a 
        href={href} 
        target="_blank" 
        style={{textUnderlineOffset: "2px"}}
        className="whitespace-nowrap overflow-hidden text-ellipsis font-['Eyra-400Medium'] underline"
    >
        {children}
    </a>
}