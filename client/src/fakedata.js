export const initData = {
    board: {
        id: "board-1",
        columnOrder: ["column-3", "column-2", "column-1"],
        columns: [
            {
                id: "column-1",
                title: "Đã Xong",
                taskOrder: ["task-1", "task-2", "task-3"],
                tasks: [
                    {
                        id: "task-1",
                        tag: "research",
                        color: "pink",
                        title: "Thiết kế giao diện",
                        dec: "Mô phỏng giao diện trên photoshop của trang web quản lý giao diện",
                        date: "Feb 09",
                    },
                    {
                        id: "task-2",
                        title: "Làm báo cáo",
                        tag: "Design",
                        color: "yellow",
                        dec: "Làm chi tiết báo cáo về xây dựng web quản lý giao diện",
                        date: "Feb 09",
                    },
                    {
                        id: "task-3",
                        tag: "Dev",
                        color: "green",
                        title: "Thiết kế giao diện 2",
                        dec: "Mô phỏng giao diện trên photoshop của trang web quản lý giao diện 2",
                        date: "Feb 09",
                    },
                ],
            },
            
            {
                id: "column-2",
                title: "Đang làm",
                taskOrder: ["task-6", "task-4", "task-5"],
                tasks: [
                    {
                        id: "task-4",
                        title: "Thiết kế giao diện 4",
                        tag: "Dev",
                        color: "green",
                        dec: "Mô phỏng giao diện trên photoshop của trang web quản lý giao diện 4",
                        date: "Feb 09",
                    },
                    {
                        id: "task-5",
                        title: "Làm báo cáo 5",
                        tag: "Content",
                        color: "blue",
                        dec: "Làm chi tiết báo cáo về xây dựng web quản lý giao diện 5",
                        date: "Feb 09",
                    },
                    {
                        id: "task-6",
                        tag: "Content",
                        color: "blue",
                        title: "Thiết kế giao diện 6",
                        dec: "Mô phỏng giao diện trên photoshop của trang web quản lý giao diện 6 ",
                        date: "Feb 09",
                    },
                ],
            },
            {
                id: "column-3",
                title: "Cần làm",
                taskOrder: ["task-8", "task-9", "task-7"],
                tasks: [
                    {
                        id: "task-7",
                        title: "Thiết kế giao diện 7",
                        tag: "Content",
                        color: "blue",
                        dec: "Mô phỏng giao diện trên photoshop của trang web quản lý giao diện 7",
                        date: "Feb 09",
                    },
                    {
                        id: "task-8",
                        title: "Làm báo cáo 8",
                        tag: "Content",
                        color: "violet",
                        dec: "Làm chi tiết báo cáo về xây dựng web quản lý giao diện 8",
                        date: "Feb 09",
                    },
                    {
                        id: "task-9",
                        title: "Thiết kế giao diện 9",
                        tag: "Content",
                        color: "violet",
                        dec: "Mô phỏng giao diện trên photoshop của trang web quản lý giao diện 9",
                        date: "Feb 09",
                    },
                ],
            },
        ],
    },
};
