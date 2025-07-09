import { useState } from "react";
import "./nav-top.scss";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const NavTop = () => {
    const navigate = useNavigate();
    const [profileModel, setProfileModel] = useState(false);
    function close() {
        setProfileModel(false);
    }
    function logout() {
        localStorage.removeItem("logger");
        window.location.href = "/login";
    }

    const auth = useSelector((state) => state.auth);

    return (
        // <div className="nav-top">
        //     {profileModel && <Profile close={close} />}

        //     {/* LEFT : search */}
        //     <div className="search">
        //         <div className="back icon" onClick={() => navigate(-1)}>
        //             <i className="bx bx-left-arrow-alt"></i>
        //         </div>
        //         <div className="input">
        //             <input type="text" placeholder="Tìm kiếm" />
        //             <i className="bx bx-search"></i>
        //         </div>
        //     </div>
            
        //     {/* RIGHT */}
        //     <div className="right">
        //         <div className="notifi icon dropdown">
        //             <Link
        //                 to={"/activate"}
        //                 className={`item`}
        //             >
        //                 <i className="bx bx-bell"></i>
        //             </Link>
                    
        //             {/* <div className="number">16</div> */}
        //         </div>
        //         <div className="info dropdown">
        //             <div className="avatar">
        //                 <img src={auth.user.avatar} alt="" />
        //             </div>
        //             <p className="name">{auth.user.username}</p>
        //             <i className="bx bx-chevron-down"></i>
        //             <div className="dropdown__content">
        //                 <div
        //                     className="item"
        //                     onClick={() => setProfileModel(true)}
        //                 >
        //                     <i className="bx bx-user-circle"></i>
        //                     <p>Thông tin cá nhân</p>
        //                 </div>
        //                 <div className="line">
        //                     <div></div>
        //                 </div>
        //                 <div className="item" onClick={logout}>
        //                     <i className="bx bx-log-out"></i>
        //                     <p>Đăng xuất</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        
        // </div>
        <header  className="bg-white shadow-sm">
            <div class="flex justify-between items-center py-4 px-6">
                {profileModel && <Profile close={close} />}
                <div class="flex items-center md:hidden">
                    <button id="menuButton" class="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div class="relative w-64 hidden md:block">
                    <input type="text" placeholder="Tìm kiếm..." class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                    <div class="absolute left-3 top-2.5 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="text-gray-500 hover:text-gray-700 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div class="border-r border-gray-300 h-6"></div>
                    <div className="gap-x-2 info dropdown flex items-center ml-2 p-2 rounded-lg hover:bg-[#ebf0fe] cursor-pointer relative group">
                        <div className="avatar h-10 w-10 rounded-full overflow-hidden" >
                            <img src={auth.user.avatar} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <p className="name">{auth.user.username}</p>
                        <i className="bx bx-chevron-down"></i>
                        <div className="dropdown__content ">
                            <div
                                className="item"
                                onClick={() => setProfileModel(true)}
                            >
                                <i className="bx bx-user-circle"></i>
                                <p>Thông tin cá nhân</p>
                            </div>
                            <div className="line">
                                <div></div>
                            </div>
                            <div className="item" onClick={logout}>
                                <i className="bx bx-log-out"></i>
                                <p>Đăng xuất</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavTop;
