import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginThunk from "../../redux/thunk/login";

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const { auth } = useSelector((state) => state);

    const dispatch = useDispatch();

    function handleChangeInput(e) {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginThunk(login));
    }

    useEffect(() => {
        if (auth?.user) {
            navigate("/");
        }
    }, [auth?.user, navigate]);

    return (
        // <div className="login-page">
        //     <form onSubmit={handleSubmit}>
        //         <div className="logo">
        //             <img
        //                 src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Hoc-Vien-Ky-Thuat-Mat-Ma-ACTVN.png"
        //                 alt="logo"
        //             />
        //         </div>
        //         <h2 className="name">Quản lý dự án</h2>
        //         <div className="input-group">
        //             <input
        //                 type="text"
        //                 placeholder="Email"
        //                 value={login.email}
        //                 name="email"
        //                 onChange={handleChangeInput}
        //                 required
        //             />
        //             <i className="bx bxs-envelope"></i>
        //         </div>
        //         <div className="input-group">
        //             <input
        //                 type="password"
        //                 placeholder="Mật khẩu"
        //                 name="password"
        //                 value={login.password}
        //                 onChange={handleChangeInput}
        //                 autoComplete="on"
        //                 required
        //             />
        //             <i className="bx bxs-lock-alt"></i>
        //         </div>
        //         <button>Đăng nhập</button>
        //         <a href="/">Quên mật khẩu</a>
        //         <p>
        //             Bạn chưa có tài khoản?{" "}
        //             <Link to={"/register"}>Đăng kí tại đây</Link>
        //         </p>
        //     </form>
        // </div>
        <>
        <div class="font-sans">
            {/* <!-- Background --> */}
            <div class="fixed inset-0 bg-login-bg bg-cover bg-center bg-no-repeat"></div>
            <div class="fixed inset-0 bg-black bg-opacity-60"></div>

            {/* <!-- Login Container --> */}
            <div class="login-page min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
                <form onSubmit={handleSubmit} class="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-white/10 text-center">
                    <h2 class="name text-3xl font-bold text-white mb-8 drop-shadow-md">Quản lý dự án</h2>
                    
                    <div class="input-group relative mb-6">
                        <i class="bx bxs-envelope absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-xl"></i>
                        <input
                            type="text"
                            placeholder="Email"
                            value={login.email}
                            name="email"
                            onChange={handleChangeInput}
                            required
                            class="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        />
                    </div>
                    
                    <div class="input-group relative mb-8">
                        <i class="bx bxs-lock-alt absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-xl"></i>
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            name="password"
                            value={login.password}
                            onChange={handleChangeInput}
                            autoComplete="on"
                            required
                            class="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        />
                    </div>
                    
                    <button class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all mb-4">
                        Đăng nhập
                    </button>
                    
                    <a href="/" class="block text-white/80 text-sm hover:text-white transition-colors mb-6">
                        Quên mật khẩu
                    </a>
                    
                    <p class="text-white/70 text-sm">
                        Bạn chưa có tài khoản?{" "}
                        <Link to={"/register"} class="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                            Đăng kí tại đây
                        </Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;
