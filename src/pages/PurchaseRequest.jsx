import MainLayout from "../layouts/MainLayout";
import PageTitle from "../components/common/PageTitle";

import PurchaseForm from "../components/purchase/PurchaseForm";
import RequestTable from "../components/purchase/RequestTable";
import AIWorkflow from "../components/purchase/AIWorkflow";
import SummaryCards from "../components/purchase/SummaryCards";
export default function PurchaseRequest() {
  return (
    <MainLayout>

      <PageTitle
        title="Tạo yêu cầu mua hàng"
        subtitle="Nhập thông tin nhu cầu mua hàng để AI tự động phân tích, đánh giá và đề xuất nhà cung cấp phù hợp nhất."
      />

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8">

          <PurchaseForm />

        </div>

        <div className="col-span-4">

          <AIWorkflow />

        </div>

      </div>

      <div className="mt-6">

        <RequestTable />

      </div>

    </MainLayout>
  );
}