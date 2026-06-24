import {
  FaBuilding,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

import { summary } from "../../data/dashboardData";

export default function DashboardSummary() {
  const cards = [
    {
      title: "Tổng Vendor",
      value: summary.totalVendor,
      color: "bg-blue-100 text-blue-600",
      icon: <FaBuilding />,
    },
    {
      title: "Đạt chuẩn",
      value: summary.approved,
      color: "bg-green-100 text-green-600",
      icon: <FaCheckCircle />,
    },
    {
      title: "Cần theo dõi",
      value: summary.warning,
      color: "bg-orange-100 text-orange-600",
      icon: <FaExclamationTriangle />,
    },
    {
      title: "Rủi ro",
      value: summary.risk,
      color: "bg-red-100 text-red-600",
      icon: <FaTimesCircle />,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl border shadow-sm p-5"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
            </div>

            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${card.color}`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}