import git from "../../public/github.svg";
import userIcon from "../../public/Toji.jpeg";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between m-3">
        <div className="text-white">
          <h1 className="text-xl font-medium">blogpost</h1>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <a
            href="https://github.com/tusharn3115/BlogPost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={git}
              alt="usericon"
              width={30}
            />
          </a>
          <a
            href="https://x.com/tushxr05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={userIcon}
              alt="usericon"
              width={30}
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
