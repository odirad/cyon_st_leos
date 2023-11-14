import Image from "next/image";
import Link from "next/link";
import AddProd from "../components/AddProd";
import People from "../components/People";
export default function Home() {
  return (
    <main>
      <h1>Hello Radi</h1>
      <Link href="/admin/users">users</Link>
      <AddProd />
      {/* <People /> */}
    </main>
  );
}
