import { Card, Typography } from "@heroui/react";

interface SkillSectionProps {
    programmingSkills: string[],
    generalSkills: string[]
}

export default function SkillSection({programmingSkills,generalSkills}:SkillSectionProps){

    const programmingSkillList = () => {
        return programmingSkills.map((key,index) => (
            <Card className="bg-[#37B96D]" key={index}>
                <Typography type="h6" className="text-black">{key}</Typography>
            </Card>
            ));
        }

    const generalSkillList = () => {
        return generalSkills.map((key,index) => (
            <Card className="bg-[#37B96D] text-black" key={index}>
                <Typography type="h6" className="text-black">{key}</Typography>
            </Card>
            ));
        }

    return(
        <div className="w-screen sm:w-auto pt-10">
            <Card className="w-full px-10 py-10 gap-10">
                <Typography type="h3">Programming</Typography>
                <div className="flex flex-wrap gap-5">
                    {programmingSkillList()}
                </div>
                <Typography type="h3">General</Typography>
                <div className="flex flex-wrap gap-5">
                    {generalSkillList()}
                </div>
            </Card>
        </div>
    );
}