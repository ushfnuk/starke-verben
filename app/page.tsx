import { prisma } from "@/prisma/client";
import { Colums } from "./libs/utils";

export default async function Home() {
  const verben = await prisma.verben.findMany();

  return (
    <main>
      <table className='table table-lg table-pin-rows md:table-md'>
        <thead>
          <tr>
            <th>{Colums.Infinitiv}</th>
            <th>{Colums.Dritte}</th>
            <th>{Colums.Preteritum}</th>
            <th>{Colums.Perfekt}</th>
            <th>{Colums.Ubersetzung}</th>
          </tr>
        </thead>
        <tbody>
          {verben.map(verb =>
            <tr key={verb.id}>
              <td>{verb.infinitiv}</td>
              <td>{verb.dritte_form}</td>
              <td>{verb.preteritum}</td>
              <td>{verb.perfekt}</td>
              <td>{verb.ubersetzung}</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
