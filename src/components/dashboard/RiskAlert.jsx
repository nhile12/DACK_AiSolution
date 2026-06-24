import Card from "../common/Card";
import { riskVendor } from "../../data/dashboardData";

export default function RiskAlert() {
  return (
    <Card title="Cảnh báo từ AI">

      <div className="space-y-4">

        {riskVendor.map((item) => (

          <div
            key={item.vendor}
            className="border-l-4 border-red-500 bg-red-50 rounded-lg p-4"
          >

            <h3 className="font-semibold text-red-600">
              {item.vendor}
            </h3>

            <p className="text-gray-600 mt-1">
              {item.message}
            </p>

          </div>

        ))}

      </div>

    </Card>
  );
}