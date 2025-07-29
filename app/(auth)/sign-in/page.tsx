import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import CredentiallsSignInForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async (props:{
  searchParams: Promise<{
    callbackUrl: string
  }>
}) => {

  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if(session){
    return redirect(callbackUrl || '/');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-full max-w-md px-4">
        <Card className="p-6 shadow-md">
        <CardHeader className="space-y-4">
            <Link href="/" className="flex justify-center">
            <Image
                src="/logo.svg"
                width={100}
                height={100}
                alt={`${APP_NAME} logo`}
                priority={true}
            />
            </Link>
            <CardTitle className="text-center ">Sign In</CardTitle>
            <CardDescription className="text-center">
                Sign into your account
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <CredentiallsSignInForm />
        </CardContent>
        </Card>
    </div>
    </main>
  );
};

export default SignInPage;
