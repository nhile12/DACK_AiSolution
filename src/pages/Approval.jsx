import MainLayout from "../layouts/MainLayout";
import PageTitle from "../components/common/PageTitle";
import ApprovalTable from "../components/approval/ApprovalTable";

export default function Approval() {
  return (
    <MainLayout>

      <PageTitle
        title="Phê duyệt đề xuất nhà cung cấp"
        subtitle="Quản lý xem xét kết quả đánh giá AI và đưa ra quyết định cuối cùng."
      />

      <ApprovalTable />

    </MainLayout>
  );
}