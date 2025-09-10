import { prisma } from "@/prisma/client";

export default async function Home() {
  const verben = await prisma.verben.findMany();

  return (
    <main>
      <table className='table table-lg md:table-md'>
        <thead>
          <tr>
            <th>Infinitiv</th>
            <th>3. Person Sg. Präsens (er/sie/es)</th>
            <th>Präteritum</th>
            <th>Perfekt</th>
            <th>Übersetzung</th>
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
