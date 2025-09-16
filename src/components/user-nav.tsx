"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getFirstLetters } from "@/lib/utils";
import { User } from "@prisma/client";
import { useTranslations } from "next-intl";

import { signOut } from "next-auth/react";

type UserNavPropsType = {
  user: User;
};

export const UserNav = ({ user }: UserNavPropsType) => {
  const t = useTranslations("UserNav");

  return (
    <div className="flex flex-row justify-between w-full small:justify-normal gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full"
            aria-label={t("openUserMenu")}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user?.avatar ?? "https://github.com/shadcn.png"}
                alt={t("userAvatar", { name: user?.UserName || "User" })}
              />
              <AvatarFallback>
                {getFirstLetters(user?.UserName ?? "AZ")}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Button
              variant="ghost"
              onClick={() => signOut({ redirectTo: "/" })}
              className="w-full p-0"
            >
              Sign Out
            </Button>
            <DropdownMenuShortcut>{t("signOutShortcut")}</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
