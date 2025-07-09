import React from 'react'
import ProjectProgressChart from './ProjectProgressChart/ProjectProgressChart';

const Dashboard = () => {
    return (
        <div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-800">Tổng quan dự án</h1>
        </div>

        {/* <!-- Stats Cards --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-gray-500">Tổng số dự án</h3>
                    <span class="p-2 bg-blue-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                    </span>
                </div>
                <div class="flex items-baseline">
                    <span class="text-3xl font-bold text-gray-800">12</span>
                    <span class="ml-2 text-sm text-green-600 font-medium">+2 mới</span>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-gray-500">Công việc đang thực hiện</h3>
                    <span class="p-2 bg-amber-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>
                <div class="flex items-baseline">
                    <span class="text-3xl font-bold text-gray-800">24</span>
                    <span class="ml-2 text-sm text-amber-600 font-medium">8 cần xử lý</span>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-gray-500">Công việc hoàn thành</h3>
                    <span class="p-2 bg-green-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>
                <div class="flex items-baseline">
                    <span class="text-3xl font-bold text-gray-800">42</span>
                    <span class="ml-2 text-sm text-green-600 font-medium">+8 tuần này</span>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-gray-500">Thành viên nhóm</h3>
                    <span class="p-2 bg-purple-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                    </span>
                </div>
                <div class="flex items-baseline">
                    <span class="text-3xl font-bold text-gray-800">8</span>
                    <span class="ml-2 text-sm text-purple-600 font-medium">+1 mới</span>
                </div>
            </div>
        </div>

        {/* <!-- Project Progress and Tasks --> */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Project Progress --> */}
            <div class="lg:col-span-2">
                <ProjectProgressChart />

                {/* <!-- Recent Projects --> */}
                <div class="bg-white rounded-xl shadow-sm p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg font-bold text-gray-800">Dự án gần đây</h2>
                        <a href="#" clLinkss="text-blue-600 hover:text-blue-800 text-sm font-medium">Xem tất cả</a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="project-card bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-xl">
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="font-bold">Thiết kế website</h3>
                                <span class="bg-blue-400 bg-opacity-30 text-xs py-1 px-2 rounded-full">Đang thực hiện</span>
                            </div>
                            <p class="text-sm text-blue-100 mb-4">Thiết kế và phát triển website mới cho khách hàng ABC</p>
                            <div class="mb-3">
                                <div class="flex justify-between text-xs mb-1">
                                    <span>Tiến độ</span>
                                    <span>75%</span>
                                </div>
                                <div class="w-full bg-blue-400 bg-opacity-30 rounded-full h-2">
                                    <div class="bg-white h-2 rounded-full w-[75%]"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex -space-x-2">
                                    <div class="w-7 h-7 rounded-full bg-blue-300 border-2 border-blue-500 flex items-center justify-center text-xs font-medium">NT</div>
                                    <div class="w-7 h-7 rounded-full bg-blue-300 border-2 border-blue-500 flex items-center justify-center text-xs font-medium">HM</div>
                                    <div class="w-7 h-7 rounded-full bg-blue-300 border-2 border-blue-500 flex items-center justify-center text-xs font-medium">+2</div>
                                </div>
                                <span class="text-xs">Hạn: 20/06/2023</span>
                            </div>
                        </div>

                        <div class="project-card bg-gradient-to-r from-purple-500 to-purple-600 text-white p-5 rounded-xl">
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="font-bold">Ứng dụng di động</h3>
                                <span class="bg-purple-400 bg-opacity-30 text-xs py-1 px-2 rounded-full">Đang thực hiện</span>
                            </div>
                            <p class="text-sm text-purple-100 mb-4">Phát triển ứng dụng di động cho hệ thống quản lý</p>
                            <div class="mb-3">
                                <div class="flex justify-between text-xs mb-1">
                                    <span>Tiến độ</span>
                                    <span>45%</span>
                                </div>
                                <div class="w-full bg-purple-400 bg-opacity-30 rounded-full h-2">
                                    <div class="bg-white h-2 rounded-full w-[45%]"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex -space-x-2">
                                    <div class="w-7 h-7 rounded-full bg-purple-300 border-2 border-purple-500 flex items-center justify-center text-xs font-medium">TL</div>
                                    <div class="w-7 h-7 rounded-full bg-purple-300 border-2 border-purple-500 flex items-center justify-center text-xs font-medium">VH</div>
                                    <div class="w-7 h-7 rounded-full bg-purple-300 border-2 border-purple-500 flex items-center justify-center text-xs font-medium">+3</div>
                                </div>
                                <span class="text-xs">Hạn: 15/07/2023</span>
                            </div>
                        </div>

                        <div class="project-card bg-gradient-to-r from-amber-500 to-amber-600 text-white p-5 rounded-xl">
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="font-bold">Chiến dịch marketing</h3>
                                <span class="bg-amber-400 bg-opacity-30 text-xs py-1 px-2 rounded-full">Đang thực hiện</span>
                            </div>
                            <p class="text-sm text-amber-100 mb-4">Lập kế hoạch và triển khai chiến dịch marketing Q2</p>
                            <div class="mb-3">
                                <div class="flex justify-between text-xs mb-1">
                                    <span>Tiến độ</span>
                                    <span>60%</span>
                                </div>
                                <div class="w-full bg-amber-400 bg-opacity-30 rounded-full h-2">
                                    <div class="bg-white h-2 rounded-full w-[60%]" ></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex -space-x-2">
                                    <div class="w-7 h-7 rounded-full bg-amber-300 border-2 border-amber-500 flex items-center justify-center text-xs font-medium">LH</div>
                                    <div class="w-7 h-7 rounded-full bg-amber-300 border-2 border-amber-500 flex items-center justify-center text-xs font-medium">TN</div>
                                </div>
                                <span class="text-xs">Hạn: 30/06/2023</span>
                            </div>
                        </div>

                        <div class="project-card bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-xl">
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="font-bold">Phân tích dữ liệu</h3>
                                <span class="bg-green-400 bg-opacity-30 text-xs py-1 px-2 rounded-full">Đang thực hiện</span>
                            </div>
                            <p class="text-sm text-green-100 mb-4">Phân tích dữ liệu người dùng và báo cáo hiệu suất</p>
                            <div class="mb-3">
                                <div class="flex justify-between text-xs mb-1">
                                    <span>Tiến độ</span>
                                    <span>30%</span>
                                </div>
                                <div class="w-full bg-green-400 bg-opacity-30 rounded-full h-2">
                                    <div class="bg-white h-2 rounded-full w-[30%]"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex -space-x-2">
                                    <div class="w-7 h-7 rounded-full bg-green-300 border-2 border-green-500 flex items-center justify-center text-xs font-medium">HT</div>
                                    <div class="w-7 h-7 rounded-full bg-green-300 border-2 border-green-500 flex items-center justify-center text-xs font-medium">+1</div>
                                </div>
                                <span class="text-xs">Hạn: 10/07/2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Tasks --> */}
            <div class="lg:col-span-1">
                <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg font-bold text-gray-800">Công việc hôm nay</h2>
                        <button class="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                    </div>
                    <div class="space-y-3">
                        <div class="task-item flex items-center p-3 border border-gray-100 rounded-lg">
                            <input type="checkbox" class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3"/>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Họp với nhóm thiết kế</h4>
                                <p class="text-xs text-gray-500">10:00 - 11:30</p>
                            </div>
                            <span class="priority-high text-xs py-1 px-2 rounded-full">Cao</span>
                        </div>
                        <div class="task-item flex items-center p-3 border border-gray-100 rounded-lg">
                            <input type="checkbox" class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3"/>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Hoàn thiện báo cáo dự án</h4>
                                <p class="text-xs text-gray-500">13:00 - 15:00</p>
                            </div>
                            <span class="priority-medium text-xs py-1 px-2 rounded-full">Trung bình</span>
                        </div>
                        <div class="task-item flex items-center p-3 border border-gray-100 rounded-lg">
                            <input type="checkbox" class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3"/>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Kiểm tra tiến độ website</h4>
                                <p class="text-xs text-gray-500">15:30 - 16:30</p>
                            </div>
                            <span class="priority-low text-xs py-1 px-2 rounded-full">Thấp</span>
                        </div>
                        <div class="task-item flex items-center p-3 border border-gray-100 rounded-lg">
                            <input type="checkbox" class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3"/>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Gửi email cho khách hàng</h4>
                                <p class="text-xs text-gray-500">16:45 - 17:15</p>
                            </div>
                            <span class="priority-high text-xs py-1 px-2 rounded-full">Cao</span>
                        </div>
                    </div>
                    <button class="w-full mt-4 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:text-blue-600 hover:border-blue-500 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        Thêm công việc mới
                    </button>
                </div>

                {/* <!-- Team Members --> */}
                <div class="bg-white rounded-xl shadow-sm p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg font-bold text-gray-800">Thành viên nhóm</h2>
                        <button class="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium mr-3">NT</div>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Nguyễn Thành</h4>
                                <p class="text-xs text-gray-500">Quản lý dự án</p>
                            </div>
                            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium mr-3">TL</div>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Trần Linh</h4>
                                <p class="text-xs text-gray-500">Nhà phát triển</p>
                            </div>
                            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-medium mr-3">HM</div>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Hoàng Minh</h4>
                                <p class="text-xs text-gray-500">Nhà thiết kế</p>
                            </div>
                            <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-medium mr-3">LH</div>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Lê Hương</h4>
                                <p class="text-xs text-gray-500">Marketing</p>
                            </div>
                            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-medium mr-3">VH</div>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-gray-800">Vũ Hùng</h4>
                                <p class="text-xs text-gray-500">Nhà phát triển</p>
                            </div>
                            <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Dashboard;
