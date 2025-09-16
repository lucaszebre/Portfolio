import { getFirstLetters } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";

type CommentCardPropsType = {
  avatar: string;
  userName: string;
  content: string;
};

export const CommentCard = ({
  avatar,
  userName,
  content,
}: CommentCardPropsType) => {
  const t = useTranslations("commentCard");
  return (
    <Card>
      <CardHeader>
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={avatar ?? "https://github.com/shadcn.png"}
            alt={t("userAvatar", { name: userName || "User" })}
          />
          <AvatarFallback>{getFirstLetters(userName ?? "AZ")}</AvatarFallback>
        </Avatar>
        <span className="text-black">{userName}</span>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};
