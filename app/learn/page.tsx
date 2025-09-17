import { prisma } from "@/prisma/client";
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import MoreButton from "../components/MoreButton";
import { Colums, getIds } from "../libs/utils";

export const metadata: Metadata = {
  title: "Learn new Verben everyday!",
  description: "Here are some Verben to learn for today",
};

const TODAYS_WORDS_COUNT = 5;
const DAYS_TO_LEARN = 5; // revalidate in 5 days

const LearnPage = async () => {
  const max = await prisma.verben.count();
  const getCachedIds = unstable_cache(
    async () => {
      return getIds(TODAYS_WORDS_COUNT, max);
    },
    [],
    {
      tags: ['words'],
      revalidate: DAYS_TO_LEARN * 60 * 60 * 24
    }
  );

  const ids = await getCachedIds();

  const verben = await prisma.verben.findMany({
    where: {
      id: {
        in: ids
      }
    }
  });

  return (
    <main>
      <header className="grid place-content-center p-5 md:p-0 md:flex md:items-center">
        <h1 className="hidden md:block md:text-2xl md:text-accent-content md:p-5">Here are some words for today:</h1>
        <MoreButton>More words!</MoreButton>
      </header>
      <table className='table table-lg md:table-xl'>
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
  )
}

export default LearnPage
