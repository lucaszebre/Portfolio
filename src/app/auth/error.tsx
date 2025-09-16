"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h2 className="text-white">Something went wrong!</h2>
      <Button className="text-white" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
