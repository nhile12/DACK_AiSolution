import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const menu =
  [
    {
      name: "Tạo yêu cầu mua hàng",
      path: "/",
    },

    {
      name: "Kết quả đánh giá AI",
      path: "/dashboard",
    },

    {
      name: "Phê duyệt",
      path: "/approval",
    },
  ];

  return (
    <aside className="w-64 bg-blue-700 text-white">

      <div className="text-2xl font-bold p-6 border-b border-blue-600">
        MENU
      </div>

      <nav className="flex flex-col mt-4">

        {
          menu.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-6 py-4 transition ${
                  isActive
                    ? "bg-blue-900"
                    : "hover:bg-blue-800"
                }`
              }
            >
              {item.name}

            </NavLink>

          ))
        }

      </nav>

    </aside>
  );
}