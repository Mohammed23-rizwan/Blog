// import img1 from "../../assets/pexels-jplenio-1423600.jpg";
import { useEffect, useState } from "react";
import { Users } from "../../user";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
  const [page, setPage] = useState(9);

  const loading = Users.slice(0, page);
  const finalVariable = Users.length;

  const search = (Users) => {
    return Users.filter((page1) => page1.name.toLowerCase().includes(data));
  };

  useEffect(() => {}, [page]);
  return (
    <>
      <div className="w-full grid grid-cols-1 place-items-center gap-[25px] md:grid-cols-2 lg:grid-cols-3">
        {data == 0
          ? loading.map((user) => {
              return (
                <div
                  key={user.id}
                  className="container w-[90%] gap-[30px] h-[520px] relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[6px] lg:w-[95%]"
                >
                  <img
                    src={user.profile_img}
                    alt=""
                    className=" object-cover w-full h-[260px] p-4"
                  />
                  <div className="px-4">
                    <p className=" text-[#FA9B21]">{user.work}</p>
                    <div className="flex justify-between items-center mt-2">
                      <h3 className="text-xl">{user.title}</h3>
                      <FiArrowUpRight className=" text-2xl" />
                    </div>
                    <p className="mt-[15px] text-base text-justify	">
                      {user.desc}
                    </p>
                  </div>
                  <div className="px-4 absolute bottom-0 w-full flex gap-[10px] items-center mb-[32px]">
                    <img
                      src={user.profile}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="">
                      <p>{user.name}</p>
                      <p>{user.date}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : search(loading).map((user) => {
              return (
                <div
                  key={user.id}
                  className="container w-[90%] gap-[30px] h-[520px] relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[6px] lg:w-[95%]"
                >
                  <img
                    src={user.profile_img}
                    alt=""
                    className=" object-cover w-full h-[260px] p-4"
                  />
                  <div className="px-4">
                    <p className=" text-[#FA9B21]">{user.work}</p>
                    <div className="flex justify-between items-center mt-2">
                      <h3 className="text-xl">{user.title}</h3>
                      <FiArrowUpRight className=" text-2xl" />
                    </div>
                    <p className="mt-[15px] text-base text-justify	">
                      {user.desc}
                    </p>
                  </div>
                  <div className="px-4 absolute bottom-0 w-full flex gap-[10px] items-center mb-[32px]">
                    <img
                      src={user.profile}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="">
                      <p>{user.name}</p>
                      <p>{user.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="m-10 flex justify-center">
        {finalVariable == page ? (
          <h6 className="text-lg">Ended</h6>
        ) : (
          <button
            type="button"
            className="flex justify-center items-center gap-[10px] border  px-10 py-[10px] outline-none bg-transparent"
            onClick={() => {
              setPage(page + 6);
            }}
          >
            <MdOutlineKeyboardDoubleArrowDown />
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
