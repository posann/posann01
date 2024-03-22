import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight, PiArrowCircleRightBold, PiArrowRightBold } from "react-icons/pi";
import MYPROFILE from "./utils/constant/profile";

function page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
      <div className="p-5 flex flex-col items-center justify-center mx-auto w-full ">
        <div className="bg-neutral-600 rounded-md w-[125px] h-auto mt-4">
          <Image
            height={520}
            width={520}
            className="object-cover w-fit"
            src="/photo.jpg"
            alt=""
          />
        </div>
        <h1 className="font-RubikExtraBold text-4xl text-center mt-9 mb-3 text-neutral-200">
          {MYPROFILE.name}
        </h1>

        <p className="text-neutral-400 lg:max-w-lg text-center font-RubikRegular ">
          {MYPROFILE.desc}
        </p>
      </div>

      <div className="mt-6 flex justify-center flex-row gap-x-4">
        <div className="bottom-7 flex border border-neutral-300 rounded-md p-2 gap-x-5 text-neutral-200">
          <Link href={"/dashboard"}>
            <span>
              <PiArrowRightBold className="text-3xl" />
            </span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default page;
