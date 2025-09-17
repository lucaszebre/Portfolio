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
import { useTranslations } from "next-intl";

import { authClient } from "@/lib/auth-client";
import { signOut } from "next-auth/react";

export const UserNav = () => {
  const t = useTranslations("UserNav");

  const user = authClient.useSession().data?.user;

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
                src={user?.image ?? "https://github.com/shadcn.png"}
                alt={t("userAvatar", { name: user?.name || "User" })}
              />
              <AvatarFallback>{user?.name}</AvatarFallback>
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
