import { useTranslations } from "next-intl";
import Link from "next/link";
import { SignIn } from "./auth/Button";

export const Auth = () => {
  const t = useTranslations("Auth");

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="gap-5 flex flex-col ">
        <div className="flex flex-col gap-3 ">
          <Link href={"/"} className="text-3xl text-white font-bold">
            Lucas Zebre Portfolio
          </Link>
          <SignIn provider="github" />
        </div>
      </div>
    </div>
  );
};
