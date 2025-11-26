"use client"; 

import { useEffect, useState } from "react";
import App from "./App";

type Params = {
  user_name?: string | null;
  meeting_id?: string | null;
};

export default function Home() {
  const [params, setParams] = useState<Params | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const user_name = url.searchParams.get("user_name");
    const meeting_id = url.searchParams.get("meeting_id");

    console.log("👉 user_name =", user_name);
    console.log("👉 meeting_id =", meeting_id);

    setParams({ user_name, meeting_id });
  }, []);

  if (!params) return null;

  return <App params={params} />;
}