import { MyComponents } from "@portfolio/ui";
import Head from "next/head";

export default function Home({ title }: { title: string }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyComponents />
    </main>
  );
}
