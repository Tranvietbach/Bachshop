import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/v30JLYr/Group-192-2.png"
          alt=""
        />
        <img
          className="hidden md:block lg:hidden"
          src="https://i.ibb.co/c1ggfn2/Group-193.png"
          alt=""
        />
        <img
          className="md:hidden"
          src="https://i.ibb.co/8gTVH2Y/Group-198.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
          Có lỗi... Chúng tôi không thấy gì cả
        </h1>
        <p className="py-4 text-base text-gray-800">
          Nội dung mà bạn đang tìm kiếm hiện không có, hoặc là nó đã được thay đổi hoặc bạn đã nhập sai giá trị
        </p>
        <p className="py-2 text-base text-gray-800">
          Rất xin lỗi, xin hãy quay trở lại trang chủ
        </p>
        <Link to="/">
          <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-logogreen text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
            Trở lại trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
}
