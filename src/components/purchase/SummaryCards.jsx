import {
  FaClipboardList,
  FaRobot,
  FaUserCheck,
  FaCheckCircle,
} from "react-icons/fa";

const cards = [
  {
    title: "Tổng yêu cầu",
    value: 125,
    icon: <FaClipboardList />,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Đang đánh giá",
    value: 18,
    icon: <FaRobot />,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Chờ phê duyệt",
    value: 9,
    icon: <FaUserCheck />,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    title: "Đã phê duyệt",
    value: 98,
    icon: <FaCheckCircle />,
    color: "text-green-600",
    bg: "bg-green-100",
  },
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                {card.value}
              </h2>
            </div>

            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${card.bg} ${card.color}`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}