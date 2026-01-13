import profile from "../data/profile.json"
import data from "../data/data.json"
import { useSetting } from "../SettingsContext";

export const Projects = () => {
  const {language} = useSetting();

  const lang = data[language];

  return (
    <>
      <div className="pt-5 border-t border-[#BAB2E7] pb-15 max-sm:h-full max-sm:pt-2">
        <h1 className="font-semibold text-[#1F2937] leading-[1.5] text-5xl">
          {lang.projects}
        </h1>
        <div className="grid grid-cols-3 pt-3 gap-y-15 gap-x-10 max-sm:flex max-sm:flex-col">
          <div className="w-[300px]">
            <img src="src/images/project-1.png" alt="Project1" />
            <p className="text-[#4338CA] text-3xl font-medium py-3">Workintech</p>
            <p className="font-normal text-sm text-[#6B7280]">
              {lang.project1}
            </p>
            <div className="flex gap-1 py-3">
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">react</p>
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">redux</p>
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">axios</p>
            </div>
            <div className="flex justify-between py-3">
                <a href={profile.github} target="_blank" className="text-[#3730A3] underline">Github</a>
                <a href="#" className="text-[#3730A3] underline">{lang.view}</a>
            </div>
          </div>
          <div className="w-[300px]">
            <img src="src/images/project-2.png" alt="Project2" />
            <p className="text-[#4338CA] text-3xl font-medium py-3">Random Jokes</p>
            <p className="font-normal text-sm text-[#6B7280]">
              {lang.project1}
            </p>
            <div className="flex gap-1 py-3">
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">react</p>
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">redux</p>
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">axios</p>
            </div>
            <div className="flex justify-between py-3">
                <a href={profile.github} target="_blank" className="text-[#3730A3] underline">Github</a>
                <a href="#" className="text-[#3730A3] underline">{lang.view}</a>
            </div>
          </div>
          <div className="w-[300px]">
            <img src="src/images/project-3.png" alt="Project3" />
            <p className="text-[#4338CA] text-3xl font-medium py-3">Journey</p>
            <p className="font-normal text-sm text-[#6B7280]">
              {lang.project1}
            </p>
            <div className="flex gap-1 py-3">
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">react</p>
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">redux</p>
                <p className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]">axios</p>
            </div>
            <div className="flex justify-between py-3">
                <a href={profile.github} target="_blank" className="text-[#3730A3] underline">Github</a>
                <a href="#" className="text-[#3730A3] underline">{lang.view}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
