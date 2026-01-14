import data from "../data/data.json";
import { useSetting } from "../SettingsContext";
import skills from "../data/skills.json";

export const Skills = () => {
  const { language } = useSetting();

  const lang = data[language];
  const skillsList = skills[language].skill;

  return (
    <>
      <div className="pt-15 pb-10">
        <h1 className="font-semibold text-[#1F2937] leading-[1.5] text-5xl">
          {lang.skills}
        </h1>
        <div className="grid grid-cols-3 max-sm:flex max-sm:flex-col">
          {skillsList.map((skill) => {
            return (
              <div className="w-[300px] pt-5" key={skill.id}>
                <h1 className="text-[#4338CA] text-3xl font-medium">
                  {skill.title}
                </h1>
                <p className="text-left text-xs font-normal text-[#6B7280] pt-5">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
