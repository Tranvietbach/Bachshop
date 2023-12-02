import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "@fortawesome/fontawesome-free/js/all.js";
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    setLoading(true);
  }, []);
  const demo_data: any = [
    {
      title: "Top 5 smartphones đáng mua trong thời gian này",
      description:
        "Đây là danh sách top 5 smartphones bán chạy",
      image: "/img/apple.png",
    },
    {
      title: " Điện thoại Oppo giảm giá 20% cực đã",
      description: "Camera chất lượng cao với độ mỏng bền bỉ",
      image: "/img/oppo.png",
    },
    {
      title: "iPhone 14 Max giảm giá 15%",
      description:
        "Apple iPhone 14 max được giảm đáng kể nhằm đợi chờ iphone15 ra lò",
      image: "/img/apple.png",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Bachshop | Trang chủ </title>
        <meta
          name="description"
          content=" Bachshop chuyên smartphones và laptop giá cả phải chăng !"
        />
        <meta
          name="keywords"
          content="smartphones,
    laptops,
    shopping, eCommerce"
        />
        <script
          defer
          src="https://kit.fontawesome.com/f89eb210df.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className={loading ? "" : "hidden"}>
        <section
          id="landing-page"
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col sm:flex-row landing-page-wrapper md:w-4/5 sm:w-full md:my-8">
            <div className="flex md:w-2/7 sm:w-full">
              <img src="img\Craig_The_Halo_Infinite_Brute_Banner.jpg" className="my-5" />
            </div>
            <div className="flex flex-col md:w-5/7 sm:w-full justify-center items-center px-10 sm:">
              <div className="md:w-50vw md:w-100vw">
                <h1 className="text-3xl text-gray-600">
                  Tận hưởng {" "}
                  <span className="text-5xl text-logogreen">mua sắm</span>
                </h1>
                <br />
                <h1 className="md:text-md text-gray-600 text-justify">
                  <span className="text-logogreen">Bachshop</span> là cửa hàng smartphones và laptop chất lượng cao, giá cả phải chăng với nhiều mẫu mã sản phẩm chất lượng.
                  <br />
                  Khám phá phong cách của bạn tại Bachshop,
                  Cửa hàng giá cả phải chăng tốt nhất theo {" "}
                  <span className="text-logogreen">Tạp chí Việt Nam</span>
                </h1>
                <div className="flex flex-row justify-start items-center my-5">
                  <Link to="/about">
                    <button className="bg-transparent text-xl hover:bg-logogreen text-logogreen hover:text-white py-2 px-4 border border-logogreen hover:border-transparent rounded px-5 py-2.5 mr-2 mb-2">
                      Về chúng tôi
                    </button>
                  </Link>
                  <Link to="/shop">
                    <button
                      type="button"
                      className="text-xl text-white bg-logogreen hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Mua ngay 
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-ribbon bg-gray-200 text-white py-8">
          <h1 className="text-center text-gray-800 font-bold text-4xl my-2 mb-2">
            Sản phẩm bán chạy nhất
          </h1>
          <div className="flex flex-col md:flex-row justify-center">
            {demo_data.map((news: any) => {
              return (
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto my-2">
                  <a>
                    <img className="rounded-t-lg" src={news.image} alt="" />
                  </a>
                  <div className="p-5">
                    <a>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {news.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {news.description}
                    </p>
                    <Link to="/shop">
                      <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                       Mua ngay
                        <svg
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="body">
          <div className="bg-white">
            <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
              <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                <div className="max-w-lg">
                  <h1 className="text-xl tracking-wide text-white text-gray-900 lg:text-3xl lg:text-5xl">
                    Chúng tôi cam kết điều gì?
                  </h1>
                  <ul className="mt-4 text-gray-300 text-gray-600">
                    <li>
                      <p className="mt-4 text-gray-700 text-gray-600">
                        Hỗ trợ hoàn tiền tối đa trong 7 ngày kể từ sau khi mua sản phẩm với biên lai và sản phẩm không bị tổn hại
                      </p>
                      <p className="mt-4 text-gray-700 text-gray-600">
                        Hỗ trợ giao dịch và chăm sóc khách hàng 24 trên 7
                      </p>
                      <p className="mt-4 text-gray-700 text-gray-600">
                        Hỗ trợ giao hàng miễn phí - free ship!
                      </p>
                      <p className="mt-4 text-gray-700 text-gray-600">
                        Hỗ trợ hình thức mua trả góp hay đổi cũ lấy mới
                      </p>
                      <p className="mt-4 text-gray-700 text-gray-600">
                        Cam kết bảo mật dữ liệu khách hàng
                      </p>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/about">
                      <a className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-logogreen rounded-md hover:bg-green-800">
                        Bạn muốn biết thêm ?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                <img
                  className="object-cover w-full max-w-2xl rounded-md lg:h-full"
                  src="https://images.pexels.com/photos/4342098/pexels-photo-4342098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="old man"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={loading ? "hidden" : "h-500"}>
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "90vh" }}
        >
          <div className="flex">
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce200"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full animate-bounce400"></div>
          </div>
          <h1 className="text-2xl">Xin hãy đợi </h1>
        </div>
      </div>
    </>
  );
}
