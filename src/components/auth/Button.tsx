"use client";
import { auth } from "@/auth";
import { authClient } from "@/lib/auth-client";
import { ChromeIcon, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  const t = useTranslations("Button");

  if (provider == "google") {
    return (
      <form
        action={async () => {
          await auth.api.signInSocial({
            body: {
              provider: "google",
            },
          });
        }}
      >
        {/* <Button {...props}>Sign In</Button> */}
        <Button variant="outline" className="w-full">
          <ChromeIcon className="w-5 h-5 mr-2" />
          {t("signInWithGoogle")}
        </Button>
      </form>
    );
  } else if (provider == "github") {
    return (
      <Button
        onClick={async () => {
          await authClient.signIn.social({
            provider: "github",
            // callbackURL: `${process.env.BETTER_AUTH_URL}/auth/complete`,
            // errorCallbackURL: `${process.env.BETTER_AUTH_URL}/error`,
            // newUserCallbackURL: `${process.env.BETTER_AUTH_URL}/auth`,
          });
        }}
        variant="outline"
        className="w-full"
      >
        <Github className="w-5 h-5 mr-2" />
        {t("signInWithGithub")}
      </Button>
    );
  } else if (provider == "linkedin") {
    return (
      <form
        action={async () => {
          const data = await authClient.signIn.social({
            provider: "linkeding",
          });
        }}
      >
        <Button variant="outline" className="w-full">
          <Linkedin className="w-5 h-5 mr-2" />
          {t("signInWithLinkedin")}
        </Button>
      </form>
    );
  }
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        const data = await authClient.signOut();
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  );
}
