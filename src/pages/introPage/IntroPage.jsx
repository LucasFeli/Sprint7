import { Link } from "react-router-dom";


export const IntroPage = () => {
  return (
    <div>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl" style={{color:"yellow"}}>
            STAR WARS
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            iusto temporibus ut nulla. Sapiente omnis voluptate deserunt
            voluptatum blanditiis beatae?
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={"/starships"} className="hover:text-blue-400 btn btn-outline btn-warning">
              Starships
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
