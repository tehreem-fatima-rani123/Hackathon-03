"use client"
import Image from "next/image";

const Logo = () => {
  // Handle logo click (navigate to related sites or open in new tab)
  const handleLogoClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-10 sm:gap-16 pt-14 px-4">
      <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#007580] rounded-lg duration-300 cursor-pointer">
        <Image
          src="/Logo.png"
          alt="Zaphier Logo"
          width={120}
          height={110}
          className="transition-all duration-300 hover:brightness-125"
          loading="lazy"
          onClick={() => handleLogoClick("https://zaphier.com")}
        />
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF6600] rounded-lg duration-300 cursor-pointer">
        <Image
          src="/Logo (1).png"
          alt="Pipe Drive Logo"
          width={120}
          height={110}
          className="transition-all duration-300 hover:brightness-125"
          loading="lazy"
          onClick={() => handleLogoClick("https://www.pipedrive.com")}
        />
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#006400] rounded-lg duration-300 cursor-pointer">
        <Image
          src="/Logo (2).png"
          alt="Cib Bank Logo"
          width={195}
          height={179}
          className="transition-all duration-300 hover:brightness-125"
          loading="lazy"
          onClick={() => handleLogoClick("https://www.cib.com")}
        />
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF4500] rounded-lg duration-300 cursor-pointer">
        <Image
          src="/Logo (3).png"
          alt="Company 4 Logo"
          width={103}
          height={105}
          className="transition-all duration-300 hover:brightness-125"
          loading="lazy"
          onClick={() => handleLogoClick("https://www.company4.com")}
        />
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF6347] rounded-lg duration-300 cursor-pointer">
        <Image
          src="/Logo (4).png"
          alt="Burnt Toast Logo"
          width={118}
          height={111}
          className="transition-all duration-300 hover:brightness-125"
          loading="lazy"
          onClick={() => handleLogoClick("https://www.burnttoast.com")}
        />
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#32CD32] rounded-lg duration-300 cursor-pointer">
        <Image
          src="/Logo (6).png"
          alt="Panda Doc Logo"
          width={143}
          height={135}
          className="transition-all duration-300 hover:brightness-125"
          loading="lazy"
          onClick={() => handleLogoClick("https://www.pandadoc.com")}
        />
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#9932CC] rounded-lg duration-300 cursor-pointer">
        <Image
          src="/Logo (5).png"
          alt="Moz Logo"
          width={114}
          height={117}
          className="transition-all duration-300 hover:brightness-125"
          loading="lazy"
          onClick={() => handleLogoClick("https://moz.com")}
        />
      </div>
    </div>
  );
};

export default Logo;
