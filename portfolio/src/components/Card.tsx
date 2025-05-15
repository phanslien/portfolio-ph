import { useState } from "react";

interface SkillCardsProps {
    title: string;
    items: string[];
}
function SkillCards({ title, items }: SkillCardsProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
        className={`card-container perspective-[1000px] cursor-pointer w-[300px] h-[200px] ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
        >
        <div className="card duration-150 delay-300 ease-in transform-3d w-full h-full relative">
            <div className="card-front w-full h-full absolute rounded-sm flex items-center justify-center text-dark text-xl font-bold p-2 text-center">{title}</div>
                <div className="card-back w-full h-full absolute rounded-sm flex items-center justify-center bg-white p-2 text-center">
                    <ul>
                        {items.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>  
                </div>
            </div>
        </div>
    )
}

export default SkillCards