import SkillCards from "./card";

export default function Skillset() {
    return (
        <>
        <div className="snap-start font-work h-screen bg-purple flex flex-col items-center justify-center text-dark gap-4">
        <h2 className="text-orange font-black center text-6xl mt-12">Skills <span className="font-light text-dark">& Toolkit</span></h2>
            <div className="flex flex-wrap grid-cols-2 gap-4 justify-center">
                <SkillCards
                        title="Languages"
                        items={["HTML", "CSS", "JavaScript", "TypeScript", "PHP"]}
                    />
                <SkillCards
                    title="Frameworks"
                    items={["React", "Tailwind", "Bootstrap", "Next.js", "Laravel"]}
                />
                <SkillCards
                    title="Build tools & Package managers"
                    items={["Vite", "Webpack", "Gulp", "npm"]}
                />
                 <SkillCards
                    title="Version Control Tools"
                    items={["Git", "GitHub", "Bitbucket", "npm"]}
                />
                <SkillCards
                    title="Softwares"
                    items={["Adobe XD", "Figma", "Visual Studio Code"]}
                />
                <SkillCards
                    title="Content Management Systems (CMS)"
                    items={["WordPress", "Strapi"]}
                />
                <SkillCards
                    title="Other skills"
                    items={["Accessibility", "Cookies & Consent", "Responsiveness", "Performance & SEO", "Analytics & Tag Management (GA4 & GTM)"]}
                />
                </div> 
            </div>
        </>
    );
}