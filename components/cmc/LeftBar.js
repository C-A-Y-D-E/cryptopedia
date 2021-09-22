import { FiExternalLink } from "react-icons/fi";
import {
  FaTelegramPlane,
  FaTwitter,
  FaRedditAlien,
  FaDiscord,
} from "react-icons/fa";
const LeftBar = ({ info, coinData, data }) => {
  console.log(info);
  return (
    <div className="max-w-[280px]">
      <div className="">
        <div className="font-bold text-lg text-accent">Socials</div>
        <div className="flex gap-6 items-center lg:ml-auto mx-auto mt-6 lg:mx-0">
          <div className="h-[40px] w-[40px] rounded-full bg-accent/20 flex items-center justify-center text-base text-accent">
            <FaTelegramPlane />
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-accent/20 flex items-center justify-center text-base text-accent">
            <FaTwitter />
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-accent/20 flex items-center justify-center text-base text-accent">
            <FaRedditAlien />
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-accent/20 flex items-center justify-center text-base text-accent">
            <FaDiscord />
          </div>
        </div>
      </div>
      <div className="font-bold text-lg mt-8 text-accent">Basic Info</div>
      <div className="flex gap-4 mt-4 flex-wrap">
        <button className="py-1 text-sm px-2 whitespace-nowrap bg-accent rounded-md">
          Rank #{coinData.cmc_rank}
        </button>

        {info["tag-names"].splice(0, 2).map((t) => (
          <button className="py-1 text-sm px-2 whitespace-nowrap bg-white text-black rounded-md">
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <ul className="flex flex-wrap md:flex-col">
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Website</h5>
                <span className="text-gray-200">{info.urls.website[0]}</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Reddit</h5>
                <span className="text-gray-200">{info.urls.reddit[0]}</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Source Code</h5>
                <a
                  href={info.urls.source_code[0]}
                  target="_blank"
                  className="text-gray-200"
                >
                  {info.urls.source_code[0]}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <div className="font-bold text-lg text-accent">Explorer</div>
        <ul className="mt-6 flex gap-6 flex-wrap md:flex-col">
          {info.urls.explorer.map((e) => {
            return (
              <li>
                <div className="flex gap-4">
                  <FiExternalLink className="text-2xl flex-shrink-0" />{" "}
                  <a href={e} target="_blank" className="break-all">
                    {e}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
