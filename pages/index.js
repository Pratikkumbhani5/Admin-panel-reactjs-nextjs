import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next JS Testing</h1>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
      <Link href="/dashboard">dashboard</Link>
    </div>
  );
}
