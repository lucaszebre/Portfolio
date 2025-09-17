import { auth } from "@/auth";
import { AlreadyAuth } from "@/components/AlreadyAuth";
import { Auth } from "@/components/Auth";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AuthPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const AuthPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    return <AlreadyAuth />;
  }

  return <Auth />;
};

export default AuthPage;
