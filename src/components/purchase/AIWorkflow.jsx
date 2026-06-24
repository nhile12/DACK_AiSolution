import Card from "../common/Card";

const steps = [
  "Tiếp nhận yêu cầu",
  "Thu thập dữ liệu ERP",
  "Phân tích bằng AI",
  "Đánh giá nhà cung cấp",
  "Xếp hạng Vendor",
  "Đề xuất nhà cung cấp",
  "Chờ quản lý phê duyệt",
];

export default function AIWorkflow() {
  return (
    <Card title="Quy trình xử lý AI">

      <div className="space-y-4">

        {steps.map((step, index) => (

          <div key={index}>

            <div className="flex items-center gap-3">

              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">

                {index + 1}

              </div>

              <span>{step}</span>

            </div>

            {index < steps.length - 1 && (
              <div className="ml-4 h-6 border-l-2 border-blue-300"></div>
            )}

          </div>

        ))}

      </div>

    </Card>
  );
}