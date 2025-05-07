export default function IndustrySolutionsPreview() {
  const categories = ["城市类", "工业类", "商业类", "民生类", "公共安全类"];
  return (
    <section className="w-full py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">覆盖多行业物联网应用场景</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((name, i) => (
          <div key={i} className="bg-accent-green text-white px-6 py-4 rounded font-medium">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
