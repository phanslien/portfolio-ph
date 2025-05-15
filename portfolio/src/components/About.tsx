import image from "../assets/images/IMG_6845.JPG";

export default function About() {
    return (
        <>
        <div id="about" className="snap-start h-screen  bg-dark flex justify-start gap-4">
            <div className="w-[600px] h-3/4 bg-dark rounded-r-full self-center overflow-hidden">
                <img src={image} alt="Photo of Pia Hanslien" className="w-full h-full object-cover brightness-50 object-top" />
            </div>            
            <div className=" max-w-[600px] h-3/4 self-center p-8 font-work">
                <h2 className="text-purple font-black center text-6xl mt-12">Who is she</h2>
                <p className="text-light">I'm Pia, a Drammen-based frontend developer who's all about creating meaningful and user-friendly websites. I consider myself a detail-oriented, hardworking person who's willing to learn at every step of the way.</p>
                <div className="flex flex-col text-light gap-2 font-bold mt-8">
                    <a href="" className="border-b-1 border-light flex w-fit">LinkedIn</a>
                    <a href="" className="border-b-1 border-light flex w-fit">Phanslien@icloud.com</a>
                    <a href="" className="border-b-1 border-light flex w-fit">+47 95946561</a>
                </div>
            </div>
        </div>
        </>
    );
}