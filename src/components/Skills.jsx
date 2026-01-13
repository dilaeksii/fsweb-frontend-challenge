import data from "../data/data.json";
import { useSetting } from "../SettingsContext";

export const Skills = () => {
  const { language } = useSetting();

  const lang = data[language];
  return (
    <>
      <div className="pt-15 pb-10">
        <h1 className="font-semibold text-[#1F2937] leading-[1.5] text-5xl">
          Skills
        </h1>
        <div className="grid grid-cols-3 max-sm:flex max-sm:flex-col">
          <div className="w-[300px] pt-5">
            <h1 className="text-[#4338CA] text-3xl font-medium">Java Script</h1>
            <p className="text-left text-xs font-normal text-[#6B7280] pt-5">
              {lang.javasc}
            </p>
          </div>
          <div className="w-[300px] pt-5">
            <h1 className="text-[#4338CA] text-3xl font-medium">React.JS</h1>
            <p className="text-left text-xs font-normal text-[#6B7280] pt-5">
              {lang.react}
            </p>
          </div>
          <div className="w-[300px] pt-5">
            <h1 className="text-[#4338CA] text-3xl font-medium">Node.JS</h1>
            <p className="text-left text-xs font-normal text-[#6B7280] pt-5">
              {lang.node}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
