import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FaPaperPlane,
  FaRedo,
  FaUpload,
} from "react-icons/fa";

import Card from "../common/Card";
import Button from "../common/Button";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import TextAreaField from "../common/TextAreaField";

export default function PurchaseForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success("Yêu cầu đánh giá đã được gửi thành công!");

      navigate("/dashboard");
    }, 2000);
  };

  return (
    <Card title="Thông tin yêu cầu mua hàng">
      <div className="grid grid-cols-2 gap-6">

        <SelectField label="Danh mục vật tư" required>
          <option>Chọn danh mục vật tư</option>
          <option>Nguyên vật liệu</option>
          <option>Linh kiện</option>
          <option>Thiết bị</option>
          <option>Dịch vụ</option>
        </SelectField>

        <InputField
          label="Tên vật tư cần mua"
          placeholder="Ví dụ: Thép tấm SS400"
          required
        />

        <InputField
          label="Số lượng"
          type="number"
          placeholder="Nhập số lượng"
          required
        />

        <SelectField label="Đơn vị tính" required>
          <option>Kg</option>
          <option>Tấn</option>
          <option>Mét</option>
          <option>Chiếc</option>
          <option>Bộ</option>
        </SelectField>

        <InputField
          label="Ngày cần giao"
          type="date"
          required
        />

        <SelectField label="Mức độ ưu tiên">
          <option>Thấp</option>
          <option>Trung bình</option>
          <option>Cao</option>
        </SelectField>

      </div>

      <div className="mt-6">
        <TextAreaField
          label="Mô tả yêu cầu"
          placeholder="Ví dụ: Cần thép đạt tiêu chuẩn ASTM A36. Ưu tiên nhà cung cấp từng hợp tác..."
        />
      </div>

      <div className="mt-6">

        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Đính kèm tài liệu
        </label>

        <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:bg-blue-50 transition cursor-pointer">

          <FaUpload className="mx-auto text-4xl text-blue-500 mb-3" />

          <p className="font-medium">
            Kéo & thả tài liệu hoặc nhấn để tải lên
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Hỗ trợ PDF, Word, Excel, Hình ảnh
          </p>

        </div>

      </div>

      <div className="flex gap-4 mt-8">

        <Button
          onClick={handleSubmit}
          disabled={loading}
        >
          <div className="flex items-center gap-2">

            <FaPaperPlane />

            {loading
              ? "AI đang phân tích..."
              : "Gửi yêu cầu đánh giá"}

          </div>
        </Button>

        <Button variant="secondary">

          <div className="flex items-center gap-2">

            <FaRedo />

            Làm mới

          </div>

        </Button>

      </div>
    </Card>
  );
}