import { FiExternalLink } from "react-icons/fi";
const LeftBar = () => {
  return (
    <div>
      <div className="font-bold text-lg text-accent">Basic Info</div>
      <div className="flex gap-4 mt-4">
        <button className="py-1 text-sm px-2 whitespace-nowrap bg-accent rounded-md">
          Rank #1
        </button>
        <button className="py-1 text-sm px-2 whitespace-nowrap bg-white text-black rounded-md">
          Coin
        </button>
        <button className="py-1 text-sm px-2 whitespace-nowrap bg-white text-black rounded-md">
          Mineable
        </button>
      </div>
      <div className="mt-8">
        <ul className="flex flex-wrap md:flex-col">
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Website</h5>
                <span className="text-gray-200">bitcoin.com</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Explorer</h5>
                <span className="text-gray-200">bitcoin.com</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Source Code</h5>
                <span className="text-gray-200">bitcoin.com</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <div className="font-bold text-lg text-accent">Explorer</div>
        <ul className="mt-6 flex gap-6 flex-wrap md:flex-col">
          <li>
            <div className="flex gap-4">
              <FiExternalLink className="text-2xl" />{" "}
              <span>blockcyber.info</span>
            </div>
          </li>
          <li>
            <div className="flex gap-4">
              <FiExternalLink className="text-2xl" />{" "}
              <span>blockcyber.info</span>
            </div>
          </li>
          <li>
            <div className="flex gap-4">
              <FiExternalLink className="text-2xl" />{" "}
              <span>blockcyber.info</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
