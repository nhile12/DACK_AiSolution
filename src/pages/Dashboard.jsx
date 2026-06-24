import MainLayout from "../layouts/MainLayout";
import PageTitle from "../components/common/PageTitle";

export default function Dashboard() {
  return (
    <MainLayout>

      <PageTitle
        title="Kết quả đánh giá nhà cung cấp"
        subtitle="Dashboard trực quan hóa kết quả phân tích và đánh giá nhà cung cấp bằng AI."
      />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

        <div className="aspect-video rounded-lg overflow-hidden border">

          <iframe
            title="Power BI"
            width="100%"
            height="100%"
            src=""
            frameBorder="0"
            allowFullScreen
          />

        </div>

      </div>

    </MainLayout>
  );
}