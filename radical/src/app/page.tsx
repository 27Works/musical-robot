import { redirect } from "next/navigation";



export default function Home() {
  redirect("/latest",);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
