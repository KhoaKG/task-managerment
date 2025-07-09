import React, { useState } from "react";
import "./Login/style.scss";
import { Link, Navigate } from "react-router-dom";
import registerThunk from "../redux/thunk/register";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
    const [register, setRegister] = useState({
        email: "",
        username: "",
        password: "",
        confirmPw: "",
    });
    const [errForm, setErrForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPw: "",
    });

    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);

    const validateEmail = (email) => {
        return email.match(
            //eslint-disable-next-line
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function checkValidate(register) {
        const err = { email: "", username: "", password: "", confirmPw: "" };
        if (register.email.length === 0) {
            err.email = "Email không được để trống";
        } else if (!validateEmail(register.email)) {
            err.email = "Email chưa đúng định dạng";
        }

        if (register.username.length === 0) {
            err.username = "Tên tài khoản không được để trống";
        } else if (register.username.length > 12) {
            err.username = "Tên tài khoản không được dài quá 12 kí tự";
        } else if (register.username.length < 6) {
            err.username = "Tên tài khoản không được ngắn hơn 6 kí tự";
        }

        if (register.password.length === 0) {
            err.password = "Mật khẩu không được để trống";
        } else if (register.password.length > 25) {
            err.password = "Mật khẩu không được dài quá 25 kí tự";
        } else if (register.password.length < 6) {
            err.password = "Mật khẩu không được ngắn hơn 6 kí tự";
        } else if (register.password !== register.confirmPw) {
            err.confirmPw = "Xác nhận mật khẩu không chính xác";
        }

        return err;
    }

    function handleChangeInput(e) {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const err = checkValidate(register);
        if (err.email || err.username || err.password || err.confirmPw) {
            setErrForm({
                email: err.email,
                username: err.username,
                password: err.password,
                confirmPw: err.confirmPw,
            });
        } else {
            dispatch(registerThunk(register));
        }
    }

    if (auth?.user) {
        return <Navigate to="/" />;
    }

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
        //         <div className={`input-group ${errForm.email ? "err" : ""}`}>
        //             <input
        //                 type="text"
        //                 placeholder="Email"
        //                 name="email"
        //                 value={register.email}
        //                 onChange={handleChangeInput}
        //             />
        //             <i className="bx bxs-envelope"></i>
        //         </div>
        //         {errForm.email && (
        //             <div className="input-group__label">
        //                 <i class="bx bx-error-alt"></i>
        //                 <p>{errForm.email}</p>
        //             </div>
        //         )}
        //         <div className={`input-group ${errForm.username ? "err" : ""}`}>
        //             <input
        //                 type="text"
        //                 placeholder="Tài Khoản"
        //                 name="username"
        //                 value={register.username}
        //                 onChange={handleChangeInput}
        //             />
        //             <i className="bx bxs-user"></i>
        //         </div>
        //         {errForm.username && (
        //             <div className="input-group__label">
        //                 <i class="bx bx-error-alt"></i>
        //                 <p>{errForm.username}</p>
        //             </div>
        //         )}
        //         <div className={`input-group ${errForm.password ? "err" : ""}`}>
        //             <input
        //                 type="password"
        //                 placeholder="Mật khẩu"
        //                 name="password"
        //                 autoComplete="on"
        //                 value={register.password}
        //                 onChange={handleChangeInput}
        //             />
        //             <i className="bx bxs-lock-alt"></i>
        //         </div>
        //         {errForm.password && (
        //             <div className="input-group__label">
        //                 <i class="bx bx-error-alt"></i>
        //                 <p>{errForm.password}</p>
        //             </div>
        //         )}
        //         <div
        //             className={`input-group ${errForm.confirmPw ? "err" : ""}`}
        //         >
        //             <input
        //                 type="password"
        //                 placeholder="Xác nhận mật khẩu"
        //                 name="confirmPw"
        //                 autoComplete="on"
        //                 value={register.confirmPw}
        //                 onChange={handleChangeInput}
        //             />
        //             <i className="bx bxs-lock-alt"></i>
        //         </div>
        //         {errForm.confirmPw && (
        //             <div className="input-group__label">
        //                 <i class="bx bx-error-alt"></i>
        //                 <p>{errForm.confirmPw}</p>
        //             </div>
        //         )}
        //         <button>Đăng kí</button>
        //         <p>
        //             Bạn đã có tài khoản?{" "}
        //             <Link to={"/login"}>Đăng nhập tại đây</Link>
        //         </p>
        //     </form>
        // </div>
        <>
            <div class="font-sans">
                {/* <!-- Background --> */}
                <div class="fixed inset-0 bg-login-bg bg-cover bg-center bg-no-repeat"></div>
                <div class="fixed inset-0 bg-black bg-opacity-60"></div>

                <div className="login-page min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
                    <form onSubmit={handleSubmit} class="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-white/10 text-center">
                        <h2 class="name text-3xl font-bold text-white mb-8 drop-shadow-md">Quản lý dự án</h2>
                        <div className={`input-group relative mb-6 ${errForm.email ? "err" : ""}`}>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={register.email}
                                onChange={handleChangeInput}
                                class="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                            />
                            <i class="bx bxs-envelope absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-xl"></i>
                        </div>
                        {errForm.email && (
                            <div className="input-group__label">
                                <i class="bx bx-error-alt"></i>
                                <p>{errForm.email}</p>
                            </div>
                        )}
                        <div className={`input-group relative mb-6 ${errForm.username ? "err" : ""}`}>
                            <input
                                type="text"
                                placeholder="Tài Khoản"
                                name="username"
                                value={register.username}
                                onChange={handleChangeInput}
                                class="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                            />
                            <i className="bx bxs-user"></i>
                        </div>
                        {errForm.username && (
                            <div className="input-group__label">
                                <i class="bx bx-error-alt"></i>
                                <p>{errForm.username}</p>
                            </div>
                        )}
                        <div className={`input-group relative mb-6 input-group ${errForm.password ? "err" : ""}`}>
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                name="password"
                                autoComplete="on"
                                value={register.password}
                                onChange={handleChangeInput}
                                class="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                            />
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        {errForm.password && (
                            <div className="input-group__label">
                                <i class="bx bx-error-alt"></i>
                                <p>{errForm.password}</p>
                            </div>
                        )}
                        <div
                            className={`input-group relative mb-6 ${errForm.confirmPw ? "err" : ""}`}
                        >
                            <input
                                type="password"
                                placeholder="Xác nhận mật khẩu"
                                name="confirmPw"
                                autoComplete="on"
                                value={register.confirmPw}
                                onChange={handleChangeInput}
                                class="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                            />
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        {errForm.confirmPw && (
                            <div className="input-group__label">
                                <i class="bx bx-error-alt"></i>
                                <p>{errForm.confirmPw}</p>
                            </div>
                        )}
                        <button class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all mb-4">Đăng kí</button>
                        <p class="text-white/70 text-sm">
                            Bạn đã có tài khoản?{" "}
                            <Link to={"/login"} class="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Đăng nhập tại đây</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
