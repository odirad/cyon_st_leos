import db from "@/(authed)/@utils/db";
import fetchRandomDBItems from "@/@helpers/fetchRandomDBItems";
import { IPrismaObject } from "@/@types";
import Image from "next/image";
import React from "react";

interface IPerson {
  name: string;
  id: string;
  avatar: string;
}
async function People() {
  const res = await fetch(
    "https://62e476683c89b95396db6a92.mockapi.io/api/vi/users",
    { cache: "no-cache" }
    // { next: { revalidate: 10 } }
  );
  const photos = await fetchRandomDBItems(db.photo, 10);
  const ppl: IPerson[] = await res.json();
  return (
    <div className=" ">
      People <div>{new Date().toLocaleTimeString()}</div>
      {photos.map((a: { url: string; id: number }) => (
        <div>
          {a.id}
          {a.url}
        </div>
      ))}
      <ol className="flex flex-col">
        {ppl.map((person) => (
          <li className="flex justify-between w-1/2" key={person.id}>
            <div>{person.name}</div>
            <div className="m-2 rounded-xl bg-slate-600 h-10 overflow-clip ">
              <Image
                className="object-contain"
                src={person.avatar}
                alt=""
                width={36}
                height={36}
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default People;
