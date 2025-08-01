'use client';
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 w-full max-w-md rounded-lg shadow-md text-center">
        <Image
          src="/logo.svg"
          width={48}
          height={48}
          alt={`${APP_NAME} logo`}
          priority={true}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => (window.location.href = '/')}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
