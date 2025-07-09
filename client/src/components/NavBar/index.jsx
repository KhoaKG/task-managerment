import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const NavBar = ({ nav, setNav }) => {
    const p = useLocation();
    // let opacity = nav ? "1" : "0";
    // let transitionDelay = nav ? "0.5s" : "0s";
    return (
        // <div className="nav">
        //     {/* Top */}
        //     <div
        //         className="top"
        //         style={{
        //             opacity: opacity,
        //             transitionProperty: "opacity",
        //             transitionDelay: transitionDelay,
        //         }}
        //     >
        //         <div className="logo">
        //             <img
        //                 src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Hoc-Vien-Ky-Thuat-Mat-Ma-ACTVN.png"
        //                 alt="logo"
        //             />
        //         </div>
        //         <div className="info">
        //             <h3>Quản lý dự án</h3>
        //             <p>WorkSpace</p>
        //         </div>
        //         <div className="icon" onClick={() => setNav(false)}>
        //             <i className="bx bx-chevron-left"></i>
        //         </div>
        //     </div>
            
        //     {/* Mid */}
        //     <div
        //         className="mid"
        //         style={{
        //             opacity: opacity,
        //             transitionProperty: "opacity",
        //             transitionDelay: transitionDelay,
        //         }}
        //     >
        //         <Link
        //             to={"/activate"}
        //             className={`item ${
        //                 p.pathname === "/activate" ? "active" : ""
        //             }`}
        //         >
        //             <i className="bx bx-run"></i>
        //             <p>Hoạt động</p>
        //         </Link>

        //         <div className="line"></div>
        //         <Link
        //             to={"/"}
        //             className={`item ${p.pathname === "/" ? "active" : ""}`}
        //         >
        //             <i className="bx bx-home"></i>
        //             <p>Tổng quan</p>
        //         </Link>
        //         <Link
        //             to={"/board"}
        //             className={`item ${
        //                 p.pathname.startsWith("/board") ? "active" : ""
        //             }`}
        //         >
        //             <i className="bx bx-grid-alt"></i>
        //             <p>Dự án</p>
        //         </Link>
        //         <div className="item">
        //             <i className="bx bx-calendar-minus"></i>
        //             <p>Lịch trình</p>
        //         </div>
        //     </div>
            
        //     {/* Bot */}
        //     <div
        //         className="bot"
        //         style={{
        //             opacity: opacity,
        //             transitionProperty: "opacity",
        //             transitionDelay: transitionDelay,
        //         }}
        //     >
        //         <div className="item">
        //             <i className="bx bx-help-circle"></i>
        //             <p>Giúp đỡ</p>
        //         </div>
        //         <div className="item">
        //             <i className="bx bx-cog"></i>
        //             <p>Cài đặt</p>
        //         </div>
        //     </div>
        // </div>

        <>
            {/* <!-- Sidebar --> */}
            <div className="w-64 bg-gradient-to-b from-blue-800 to-indigo-900 text-white py-6 px-4 hidden md:block">
                <div className="flex items-center justify-center mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <h1 className="text-xl font-bold">TaskFlow</h1>
                </div>
                <nav >
                    <Link
                        to={"/"}
                        className={`flex items-center py-2 px-4  rounded-lg mb-2  ${p.pathname === "/" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <p>Tổng quan</p>
                    </Link>
                    <Link
                        to={"/activate"}
                        className= {`flex items-center py-2 px-4  rounded-lg mb-2 ${p.pathname === "/activate" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                        </svg>
                        <p>Hoạt động</p>
                    </Link>
                    <Link
                        to={"/board"}
                        className={`flex items-center py-2 px-4  rounded-lg mb-2 ${
                        p.pathname.startsWith("/board") ? "bg-blue-700" : "hover:bg-blue-700"
                    }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                        <p>Dự án</p>
                    </Link>
                    <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg mb-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        Nhóm
                    </a>
                    <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg mb-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        Cài đặt
                    </a>
                </nav>
                <div className="mt-auto pt-8">
                    <div className="bg-blue-900 rounded-lg p-4">
                        <h3 className="text-sm font-medium mb-2">Nâng cấp lên Pro</h3>
                        <p className="text-xs text-blue-200 mb-3">Mở khóa tất cả tính năng và không giới hạn dự án</p>
                        <button className="bg-white text-blue-800 text-xs font-medium py-2 px-3 rounded-lg w-full">Nâng cấp ngay</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
