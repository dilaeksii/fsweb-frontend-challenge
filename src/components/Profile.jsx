export const Profile = () => {
  return (
    <>
      <div className="mx-auto max-w-[1140px] py-5 border-t border-[#BAB2E7] h-[400px]">
        <h1 className="font-semibold text-[#1F2937] leading-[1.5] text-5xl">
          Profile
        </h1>
        <div className="grid grid-cols-2">
          <div className="w-[412px] h-[182px]">
            <h1 className="text-[#4338CA] text-3xl font-medium py-5">
              Profile
            </h1>
            <div className="grid grid-cols-2 items-start">
              <p className="font-semibold text-lg">Doğum Tarihi</p>
              <p className="text-lg">24.03.1996</p>
            </div>
            <div className="grid grid-cols-2 items-start">
              <p className="font-semibold text-lg">İkamet Yeri</p>
              <p className="text-lg">Ankara</p>
            </div>
             <div className="grid grid-cols-2 items-start">
              <p className="font-semibold text-lg">Eğitim Durumu</p>
              <p className="text-lg">Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            </div>
            <div className="grid grid-cols-2 items-start">
              <p className="font-semibold text-lg">Tercih Ettiği Rol</p>
              <p className="text-lg">Frontend, UI</p>
            </div>
          </div>
          <div className="w-[576px] h-[182px]">
            <h1 className="text-[#4338CA] text-3xl font-medium py-5">
              About Me
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
