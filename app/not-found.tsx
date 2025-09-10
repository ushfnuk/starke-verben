import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ти що робиш?",
  description: "You are not supposed to be here!",
};

const NotFoundPage = () => {
  return (
    <main className="grid place-content-center h-screen w-screen">
      <h1 className="text-4xl text-error-content font-semibold p-5">Куди ото воно лізе, га?!</h1>
    </main>
  )
}

export default NotFoundPage
