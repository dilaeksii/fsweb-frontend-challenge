import profile from "../data/profile.json"
import { useSetting } from "../SettingsContext";
import data from "../data/data.json"

export const Profile = () => {
  const {language} = useSetting();

  const lang = data[language];

  return (
    <>
      <div className="py-5 border-t border-[#BAB2E7] h-[400px] max-sm:pt-2 max-sm:h-full max-sm:pb-45">
        <h1 className="font-semibold text-[#1F2937] leading-[1.5] text-5xl">
          {lang.profile}
        </h1>
        <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col max-sm:gap-15">
          <div className="w-[412px] h-[182px] max-sm:w-full">
            <h1 className="text-[#4338CA] text-3xl font-medium py-5">
              {lang.profile}
            </h1>
            <div className="grid grid-cols-2 items-start">
              <p className="font-semibold text-lg">{lang.date}</p>
              <p className="text-lg">{profile.date}</p>
            </div>
            <div className="grid grid-cols-2 items-start">
              <p className="font-semibold text-lg">{lang.place}</p>
              <p className="text-lg">{profile.place}</p>
            </div>
             <div className="grid grid-cols-2 items-start">
              <p className="font-semibold text-lg">{lang.education}</p>
              <p className="text-lg">Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            </div>
            <div className="grid grid-cols-2 items-start">
              <p className="font-semibold text-lg">{lang.role}</p>
              <p className="text-lg">{profile.role}</p>
            </div>
          </div>
          <div className="w-[576px] h-[182px] max-sm:w-full">
            <h1 className="text-[#4338CA] text-3xl font-medium py-5">
              {lang.aboutme}
            </h1>
            <p className="text-[#6B7280] font-normal text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p><br/>
            <p className="text-[#6B7280] font-normal text-lg">
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
