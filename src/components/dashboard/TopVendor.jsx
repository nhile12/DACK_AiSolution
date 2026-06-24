import Card from "../common/Card";
import { topVendor } from "../../data/dashboardData";

export default function TopVendor() {
  return (
    <Card title="Top 5 nhà cung cấp được AI đề xuất">
      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">
              Nhà cung cấp
            </th>

            <th className="text-center">
              Điểm AI
            </th>

          </tr>

        </thead>

        <tbody>

          {topVendor.map((item) => (

            <tr
              key={item.name}
              className="border-b hover:bg-gray-50"
            >

              <td className="py-3">
                {item.name}
              </td>

              <td className="text-center font-bold text-blue-600">
                {item.score}
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </Card>
  );
}