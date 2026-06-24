export default function RequestDetailModal({
  open,
  onClose,
  request,
}) {
  if (!open || !request) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[700px] p-8">

        <h2 className="text-2xl font-bold mb-6">
          Chi tiết yêu cầu mua hàng
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Mã yêu cầu</p>
            <p className="font-semibold">{request.id}</p>
          </div>

          <div>
            <p className="text-gray-500">Vật tư</p>
            <p className="font-semibold">{request.material}</p>
          </div>

          <div>
            <p className="text-gray-500">Danh mục</p>
            <p className="font-semibold">{request.category}</p>
          </div>

          <div>
            <p className="text-gray-500">Ngày gửi</p>
            <p className="font-semibold">{request.date}</p>
          </div>

          <div>
            <p className="text-gray-500">Trạng thái</p>
            <p className="font-semibold">{request.status}</p>
          </div>

          <div>
            <p className="text-gray-500">Tiến trình AI</p>
            <p className="font-semibold">
              {request.progress}%
            </p>
          </div>

        </div>

        <div className="mt-8 flex justify-end">

          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Đóng
          </button>

        </div>

      </div>

    </div>
  );
}