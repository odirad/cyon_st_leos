import { Dispatch, FunctionComponent, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Hamburger: FunctionComponent<Props> = ({ isOpen = false, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="relative " onClick={handleClick}>
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transition-all ring-0 ring-gray-300 hover:ring-4 ring-opacity-30 duration-100  ${
            isOpen && "ring-4"
          }`}
        >
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-transform duration-300 origin-center overflow-hidden">
            <div
              className={`bg-current h-[2px] w-7 transform transition-transform duration-300 origin-left ${
                isOpen && "translate-x-10"
              }`}
            ></div>
            <div
              className={`bg-current h-[2px] w-7 rounded transform transition-transform duration-300 ${
                isOpen && "translate-x-10"
              } delay-75`}
            ></div>
            <div
              className={`bg-current h-[2px] w-7 transform transition-transform duration-300 origin-left ${
                isOpen && "translate-x-10"
              } delay-150`}
            ></div>

            <div
              className={`absolute items-center justify-between transform transition-transform duration-500 top-2.5 -translate-x-10  flex w-0 ${
                isOpen && "translate-x-0"
              }`}
            >
              <div
                className={`absolute bg-current h-[2px] w-5 transform transition-transform duration-300 rotate-0 delay-300 ${
                  isOpen && "rotate-45"
                }`}
              ></div>
              <div
                className={`absolute bg-current h-[2px] w-5 transform transition-transform duration-300 -rotate-0 delay-300 ${
                  isOpen && "-rotate-45"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Hamburger;
