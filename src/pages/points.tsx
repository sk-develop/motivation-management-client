import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "components/molecules/header";

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

  return (
    <>
      <Header />
      <h1>合計獲得ポイント</h1>
    </>
  );
}
