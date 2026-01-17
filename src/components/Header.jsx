import profile from "../data/profile.json"
import data from "../data/data.json"
import { useSetting } from "../SettingsContext";
import axios from "axios";
import { toast } from "react-toastify";

export const Header = () => {
  const {state} = useSetting();

  const lang = data[state.language];

  async function hireMeRequest() {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: Math.floor(Math.random() * 1000),
        name: profile.name
      })
      .then((response) => {
        console.log(response);
        toast.success("İstek başarıyla gönderildi!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("İstek gönderilemedi!");
      });
  };

  return (
    <>
      <div className="flex justify-between pt-3 max-sm:justify-center max-sm:gap-10">
        <div className="bg-[#EEEBFF] w-10 h-10 rounded-full">
          <span className="text-[#7B61FF] font-semibold rotate-[20deg] inline-block ml-3 mt-0.5 text-2xl">
            {profile.name.charAt(0)}
          </span>
        </div>
        <div className="flex items-center gap-20 max-sm:gap-4">
        <a
          href="#"
          className="font-medium text-[#6B7280]"
        >
          {lang.skills}
        </a>

        <a
          href="#"
          className="font-medium text-[#6B7280]"
        >
          {lang.profile}
        </a>

        <button
          href="#"
          className="font-medium text-[#3730A3] border border-[#3730A3] rounded-lg px-4 py-1 cursor-pointer"
          onClick={hireMeRequest}
        >
          {lang.hire}
        </button>
      </div>
      </div>
    </>
  );
};
