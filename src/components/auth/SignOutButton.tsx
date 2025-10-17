"use client";

import { signOutAction } from "@/actions/auth/signOut";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";

export const SignOutButton = () => {
  const t = useTranslations("UserNav");

  const handleSignOut = async () => {
    await signOutAction();

    window.location.reload();
  };

  return (
    <Button variant="ghost" onClick={handleSignOut} className="w-full p-0">
      {t("signOut")}
    </Button>
  );
};
