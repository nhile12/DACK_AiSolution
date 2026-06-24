import Card from "../common/Card";
import approvalData from "../../data/approvalData";

export default function ApprovalTable() {
  return (
    <Card title="Danh sách yêu cầu chờ phê duyệt">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100">

              <th className="border p-3">Mã</th>

              <th className="border p-3">Vật tư</th>

              <th className="border p-3">Vendor AI đề xuất</th>

              <th className="border p-3">Điểm AI</th>

              <th className="border p-3">Rủi ro</th>

              <th className="border p-3">Thao tác</th>

            </tr>
          </thead>

          <tbody>

            {approvalData.map((item) => (

              <tr key={item.id}>

                <td className="border p-3">{item.id}</td>

                <td className="border p-3">{item.material}</td>

                <td className="border p-3">{item.vendor}</td>

                <td className="border p-3">{item.score}</td>

                <td className="border p-3">{item.risk}</td>

                <td className="border p-3">

                  <div className="flex gap-2 justify-center">

                    <button className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                      Phê duyệt
                    </button>

                    <button className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700">
                      Từ chối
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
}