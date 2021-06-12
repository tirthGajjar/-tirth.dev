import GithubClipPath from "./GithubClipPath";
import TwitterClipPath from "./TwitterClipPath";

const SocialButtons = () => {
  return (
    <div className="flex flex-col justify-items-start py-4 my-4 space-y-8 space-x-0 w-full max-w-4xl md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex place-items-center p-2 rounded cursor-pointer clip-container">
        <button
          type="button"
          className="inline-flex items-center text-lg font-medium text-indigo-600 bg-gray-700 rounded-md border border-transparent shadow-sm dark:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 github-clip"
        >
          <GithubClipPath />
        </button>
      </div>
      <div className="flex place-items-center p-2 rounded cursor-pointer clip-container">
        <button
          type="button"
          className="inline-flex items-center text-lg font-medium text-indigo-600 bg-gray-700 rounded-md border border-transparent shadow-sm dark:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 twitter-clip"
        >
          <TwitterClipPath />
        </button>
      </div>
    </div>
  );
};

export default SocialButtons;
