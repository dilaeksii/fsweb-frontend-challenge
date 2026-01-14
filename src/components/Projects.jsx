import profile from "../data/profile.json";
import data from "../data/data.json";
import projects from "../data/projects.json";
import { useSetting } from "../SettingsContext";

export const Projects = () => {
  const { state } = useSetting();

  const lang = data[state.language];
  const projectList = projects[state.language].project;

  return (
    <>
      <div className="pt-5 border-t border-[#BAB2E7] pb-15 max-sm:h-full max-sm:pt-2">
        <h1 className="font-semibold text-[#1F2937] leading-[1.5] text-5xl">
          {lang.projects}
        </h1>

        <div className="grid grid-cols-3 pt-3 gap-y-15 gap-x-10 max-sm:flex max-sm:flex-col">
          {projectList.map((prj) => {
            return (
              <div className="w-[300px]" key={prj.id}>
                <img src={prj.img} alt="Project1" />
                <p className="text-[#4338CA] text-3xl font-medium py-3">
                  {prj.title}
                </p>
                <p className="font-normal text-sm text-[#6B7280]">{prj.desc}</p>
                <div className="flex gap-1 py-3">
                  {prj.tech.map((item, index) => {
                    return (
                      <p
                        className="border rounded-sm border-[#3730A3] py-[6px] px-[18px] text-[#3730A3]"
                        key={index}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className="flex justify-between py-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    className="text-[#3730A3] underline"
                  >
                    Github
                  </a>
                  <a href="#" className="text-[#3730A3] underline">
                    {lang.view}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
