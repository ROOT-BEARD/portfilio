import { Card, Typography } from "@heroui/react";

interface SkillSectionProps {
    programmingSkills: string[],
    generalSkills: string[]
}

export default function SkillSection({programmingSkills,generalSkills}:SkillSectionProps){

    const programmingSkillList = () => {
        return programmingSkills.map((key,index) => (
            <Card className="bg-[#2F533E]" variant="tertiary" key={index}>
                {key}
            </Card>
            ));
        }

    const generalSkillList = () => {
        return generalSkills.map((key,index) => (
            <Card className="bg-[#2F533E]" variant="secondary" key={index}>
                {key}
            </Card>
            ));
        }

    return(
        <div className="w-2/3 pt-10">
            <Card className="w-full">
                <Typography>Programming</Typography>
                <div className="flex flex-wrap gap-5">
                    {programmingSkillList()}
                </div>
                <Typography>General</Typography>
                <div className="flex flex-wrap gap-5">
                    {generalSkillList()}
                </div>
            </Card>
        </div>
    );
}