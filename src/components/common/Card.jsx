export default function Card({
  title,
  children,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

      {title && (
        <h2 className="text-xl font-semibold mb-6">
          {title}
        </h2>
      )}

      {children}

    </div>
  );
}