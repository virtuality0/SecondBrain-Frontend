import { Header } from "./Header";
import landingPagePic from "../assets/images/landingPageImage.jpg";

export const LandingPage = () => {
  return (
    <div className={`flex justify-center items-center h-screen`}>
      <div className="bg-gradient-to-t from-purple-600 to-white-600 flex flex-col h-[85%] gap-y-6 bg-white w-[85%] shadow-xl shadow-gray-400 rounded-md px-2 py-6">
        <Header />
        <div className="px-4 py-4 flex gap-x-4">
          <div className="flex flex-col gap-y-4">
            <h1 className="px-4 py-2 text-5xl font-semibold text-purple-600">
              Save it now, see it later...
            </h1>
            <p className="text-white font-medium text-lg px-4 py-2">
              The simplest way to save and organize links, tweets, and videos
              you'll want later.
            </p>
          </div>
          <div>
            <img
              className="w-96 rounded-md"
              src={landingPagePic}
              alt="Lady thinking"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
