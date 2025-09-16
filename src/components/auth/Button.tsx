import { ChromeIcon, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";
import { signIn, signOut } from "../../auth";
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
          "use server";
          await signIn(provider, { redirectTo: "/" });
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
      <form
        action={async () => {
          "use server";
          await signIn(provider, { redirectTo: "/" });
        }}
      >
        <Button variant="outline" className="w-full">
          <Github className="w-5 h-5 mr-2" />
          {t("signInWithGithub")}
        </Button>
      </form>
    );
  } else if (provider == "linkedin") {
    return (
      <form
        action={async () => {
          "use server";
          await signIn(provider, { redirectTo: "/" });
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
        "use server";
        const cookieStore = cookies();
        console.log("did it");
        cookieStore.set("logout", "true");
        await signOut();
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  );
}
