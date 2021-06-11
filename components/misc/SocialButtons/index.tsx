import GithubClipPath from "./GithubClipPath";
import TwitterClipPath from "./TwitterClipPath";

const SocialButtons = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-8 py-4 my-4 w-full max-w-4xl justify-items-start">
      <div className="clip-container cursor-pointer rounded flex place-items-center p-2">
        <button
          type="button"
          className="github-clip bg-gray-700 dark:bg-gray-300 inline-flex items-center border border-transparent shadow-sm  font-medium rounded-md text-indigo-600 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
        >
          <GithubClipPath />
        </button>
      </div>
      <div className="clip-container cursor-pointer rounded flex place-items-center p-2">
        <button
          type="button"
          className="twitter-clip bg-gray-700 dark:bg-gray-300 inline-flex items-center border border-transparent shadow-sm  font-medium rounded-md text-indigo-600 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
        >
          <TwitterClipPath />
        </button>
      </div>
    </div>
  );
};

export default SocialButtons;
