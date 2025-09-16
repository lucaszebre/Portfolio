import { useTranslations } from "next-intl";
import Link from "next/link";
import { SignIn } from "./auth/Button";

export const Auth = () => {
  const t = useTranslations("Auth");

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
      <div className="gap-5 flex flex-col max-md:w-full max-md:max-w-[80%]">
        <div className="flex flex-row content-center justify-center  w-full items-center"></div>
        <div className="space-y-2 text-center">
          <Link href={"/"} className="text-3xl text-white font-bold">
            LZ
          </Link>
        </div>

        <SignIn provider="github" />
      </div>
    </div>
  );
};
