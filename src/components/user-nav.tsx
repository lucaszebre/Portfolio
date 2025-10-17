"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslations } from "next-intl";

import { authClient } from "@/lib/auth-client";
import { SignOutButton } from "./auth/SignOutButton";

export const UserNav = () => {
  const t = useTranslations("UserNav");

  const { data, refetch } = authClient.useSession();

  const user = data?.user;
  return (
    <div className="flex flex-row justify-between w-full max-md:justify-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full"
            aria-label={t("openUserMenu")}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user?.image ?? "https://github.com/shadcn.png"}
                alt={t("userAvatar", { name: user?.name || "User" })}
              />
              <AvatarFallback>{user?.name}</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56" align="center">
          <div className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </div>
          <hr className="my-2" />

          <SignOutButton />
        </PopoverContent>
      </Popover>
    </div>
  );
};
