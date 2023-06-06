import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <section className="h-full w-full flex justify-center items-center
    ">
      <div className="bg-red-400 p-2 m-2 rounded-lg flex justify-center
      items-center text-white h-max w-max flex-col">
        <h1 className="text-xl font-semibold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </section>
  );
};
