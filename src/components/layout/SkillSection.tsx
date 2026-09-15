import { Card, Typography } from "@heroui/react";

interface SkillSectionProps {
    languages: string[],
    technologies: string[],
    concepts: string[],
    softSkills: string[]
}

export default function SkillSection({languages,technologies,concepts,softSkills}:SkillSectionProps){

    const languageList = () => {
        return languages.map((key,index) => (
            <Card className="bg-[#37B96D]" key={index}>
                <Typography type="h6" className="text-black">{key}</Typography>
            </Card>
            ));
        }

    const technologiesList = () => {
        return technologies.map((key,index) => (
            <Card className="bg-[#37B96D] text-black" key={index}>
                <Typography type="h6" className="text-black">{key}</Typography>
            </Card>
            ));
        }

    const conceptList = () => {
        return concepts.map((key,index) => (
            <Card className="bg-[#37B96D] text-black" key={index}>
                <Typography type="h6" className="text-black">{key}</Typography>
            </Card>
            ));
        }

    const softSkillList = () => {
        return softSkills.map((key,index) => (
            <Card className="bg-[#37B96D] text-black" key={index}>
                <Typography type="h6" className="text-black">{key}</Typography>
            </Card>
            ));
        }

    return(
        <div className="w-screen sm:w-auto pt-10">
            <Card className="w-full px-10 py-10 gap-10">
                <Typography type="h3">Languages</Typography>
                <div className="flex flex-wrap gap-5">
                    {languageList()}
                </div>
                <Typography type="h3">Technologies & Tools</Typography>
                <div className="flex flex-wrap gap-5">
                    {technologiesList()}
                </div>
                <Typography type="h3">Concepts</Typography>
                <div className="flex flex-wrap gap-5">
                    {conceptList()}
                </div>
                <Typography type="h3">General</Typography>
                <div className="flex flex-wrap gap-5">
                    {softSkillList()}
                </div>
            </Card>
        </div>
    );
}