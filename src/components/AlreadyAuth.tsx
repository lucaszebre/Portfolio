import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const AlreadyAuth = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Already Authenticated
          </CardTitle>
          <CardDescription className="mt-2 text-gray-600">
            Looks like you are already connected to your account. Head over to
            your dashboard to continue.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button asChild className="mt-2" size="lg">
            <Link href="/">
              Go to the Home Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
