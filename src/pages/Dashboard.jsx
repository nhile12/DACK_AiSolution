import MainLayout from "../layouts/MainLayout";
import PageTitle from "../components/common/PageTitle";

import DashboardSummary from "../components/dashboard/DashboardSummary";
import TopVendor from "../components/dashboard/TopVendor";
import RiskAlert from "../components/dashboard/RiskAlert";

export default function Dashboard() {
  return (
    <MainLayout>

      <PageTitle
        title="Kết quả đánh giá nhà cung cấp"
        subtitle="Dashboard trực quan hóa kết quả phân tích và đánh giá nhà cung cấp bằng AI."
      />

      <DashboardSummary />

      <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Dashboard Power BI
        </h2>

        <div className="aspect-video border rounded-lg flex items-center justify-center bg-gray-100">

          <p className="text-gray-500">
            Chèn Power BI Embed URL tại đây
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <TopVendor />

        <RiskAlert />

      </div>

    </MainLayout>
  );
}