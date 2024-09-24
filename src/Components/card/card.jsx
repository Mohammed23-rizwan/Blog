import img1 from "../../assets/pexels-jplenio-1423600.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const card = () => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-[32px] place-items-center	">
        <div className="container w-[384px] h-[520px] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] relative">
          <img
            src={img1}
            alt=""
            className=" object-cover w-full h-[260px] p-4"
          />
          <div className="px-4">
            <p>Design</p>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-lg">UX review presentations</h3>
              <FiArrowUpRight className=" text-2xl" />
            </div>
            <p className="mt-[15px] text-base text-justify	">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
          </div>
          <div className="px-4 absolute bottom-0 w-full flex gap-[10px] items-center mb-[32px]">
            <img src={img1} alt="" className="w-[40px] h-[40px] rounded-full" />
            <div className="">
              <p>Mohammed Rizwan</p>
              <p>23 oct 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10 flex justify-center">
        <button
          type="button"
          className="flex justify-center items-center gap-[10px] border  px-10 py-[10px] outline-none bg-transparent"
        >
          <MdOutlineKeyboardDoubleArrowDown />
          Load More
        </button>
      </div>
    </>
  );
};

export default card;
