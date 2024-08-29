import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
type LoginType = "phone" | "account";

export default function Home() {
  const router = useRouter();
  const [loginType, setLoginType] = useState<LoginType>("account");
  return <div className="min-w-12 ...">123</div>;
}
