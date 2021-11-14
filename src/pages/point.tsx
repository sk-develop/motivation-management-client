import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// /Users/ks / projects / front / motivation - app / src / components / layout.tsx;

export default function Point() {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return <h1 className="text-xl text-red-500">Welcome to Your Point Page!</h1>;
}
