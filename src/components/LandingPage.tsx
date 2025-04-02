import brainIcon from "../assets/images/brainIcon.svg";
import { Header } from "./Header";

export const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bg-purple-600 flex grow items-center">
        <img className="w-[30%]" src={brainIcon} alt="Second brain icon" />
        <div className="flex flex-col gap-y-6 py-30 px-10">
          <h1 className="text-white-600 font-semibold text-3xl">
            Second Brain
          </h1>
          <p className="text-white-600 w-[60%]">
            Second brain is an application that lets you keep track of any
            article, youtube video, a tweet or any link that you encountered but
            don't have time to look at it now.
          </p>
        </div>
      </div>
    </div>
  );
};
