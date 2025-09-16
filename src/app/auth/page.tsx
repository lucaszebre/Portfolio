import { auth } from "@/auth";
import { AlreadyAuth } from "@/components/AlreadyAuth";
import { Auth } from "@/components/Auth";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AuthPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const AuthPage = async () => {
  const session = await auth();

  if (session?.user) {
    return <AlreadyAuth />;
  }

  return <Auth />;
};

export default AuthPage;
