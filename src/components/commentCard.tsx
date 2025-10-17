import { getFirstLetters } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";

type CommentCardPropsType = {
  avatar: string;
  userName: string;
  content: string;
  createdAt: Date;
};

export const CommentCard = ({
  avatar,
  userName,
  content,
  createdAt,
}: CommentCardPropsType) => {
  const t = useTranslations("commentCard");
  return (
    <Card className="border-x-0 rounded-none">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={avatar ?? "https://github.com/shadcn.png"}
              alt={t("userAvatar", { name: userName || "User" })}
            />
            <AvatarFallback>{getFirstLetters(userName ?? "AZ")}</AvatarFallback>
          </Avatar>
          <span className="text-black">{userName}</span>
          <span className="text-xs text-gray-500">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </span>
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};
