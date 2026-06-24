export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      <div>

        <h1 className="text-xl font-bold text-blue-600">
          AI Vendor Evaluation Agent
        </h1>

      </div>

      <div className="flex items-center gap-6">

        <button className="text-2xl">
          🔔
        </button>

        <div className="text-right">

          <div className="font-semibold">
            Nguyễn Văn A
          </div>

          <div className="text-sm text-gray-500">
            Nhân viên mua hàng
          </div>

        </div>

      </div>

    </header>
  );
}