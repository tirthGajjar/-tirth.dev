import { Link } from "../../base/Link/Link";
import GithubClipPath from "./GithubClipPath";
import TwitterClipPath from "./TwitterClipPath";

const SocialButtons = () => {
  return (
    <div className="flex flex-col justify-items-center items-center py-4 space-y-8 space-x-0 w-full max-w-4xl md:justify-center md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex place-items-center p-2 rounded cursor-pointer">
        <Link href="https://github.com/tirthGajjar" className="clip-container">
          <button
            type="button"
            aria-label="Github Profile"
            role="link"
            className="inline-flex items-center text-lg font-medium text-indigo-600 bg-gray-700 rounded-md border border-transparent shadow-sm dark:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 github-clip"
          >
            <GithubClipPath />
          </button>
        </Link>
      </div>
      <div className="flex place-items-center p-2 rounded cursor-pointer">
        <Link
          href="https://twitter.com/TirthGajjar4"
          className="clip-container"
        >
          <button
            type="button"
            aria-label="Twitter Account"
            role="link"
            className="inline-flex items-center text-lg font-medium text-indigo-600 bg-gray-700 rounded-md border border-transparent shadow-sm dark:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 twitter-clip"
          >
            <TwitterClipPath />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SocialButtons;
