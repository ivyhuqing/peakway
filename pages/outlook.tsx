import NavBar from '../components/NavBar';

export default function OutlookPage() {
  return (
    <>
      <NavBar />
      <main className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-3xl font-bold text-center mb-12">前沿趋势 × 洞察中心</h1>

        {/* 分类导航 */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-10">
          <a href="#trends" className="text-blue-600 hover:underline">趋势洞察</a>
          <a href="#tech" className="text-blue-600 hover:underline">技术解读</a>
          <a href="#bids" className="text-blue-600 hover:underline">项目机会</a>
          <a href="#cases" className="text-blue-600 hover:underline">案例分析</a>
        </nav>

        {/* 趋势洞察 */}
        <section id="trends" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">趋势洞察</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src="/images/outlook/edge-ai.jpg" alt="边缘AI趋势" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold mb-2">边缘AI：2025年的硬件选型逻辑</h3>
                <p className="text-sm text-gray-600 mb-3">大模型推动下，边缘计算开始重塑终端部署方案，GPU与异构计算将逐步下沉。</p>
                <a href="#" className="text-sm text-blue-600 hover:underline">阅读全文 →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 技术解读 */}
        <section id="tech" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">技术解读</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src="/images/outlook/protocol.jpg" alt="协议兼容" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold mb-2">如何判断工业协议是否兼容你的系统？</h3>
                <p className="text-sm text-gray-600 mb-3">MODBUS、OPCUA、CAN等协议选型建议与适配技巧汇总。</p>
                <a href="#" className="text-sm text-blue-600 hover:underline">阅读全文 →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 项目机会 */}
        <section id="bids" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">项目机会</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src="/images/outlook/telecom-bid.jpg" alt="电信投标" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold mb-2">东南亚某电信公司边缘网关项目启动</h3>
                <p className="text-sm text-gray-600 mb-3">预计采购周期为6个月，已启动预算申请流程。</p>
                <a href="#" className="text-sm text-blue-600 hover:underline">阅读全文 →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 案例分析 */}
        <section id="cases" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">案例分析</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src="/images/outlook/retail-pos.jpg" alt="零售POS部署" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold mb-2">智慧零售部署案例：POS终端统一上云</h3>
                <p className="text-sm text-gray-600 mb-3">覆盖门店100+，兼容多品牌硬件与支付协议。</p>
                <a href="#" className="text-sm text-blue-600 hover:underline">阅读全文 →</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 引导 */}
        <section className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-4">需要最新招标信息或技术文章合集？</h3>
          <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm hover:bg-gray-800 transition">
            获取洞察合集
          </a>
        </section>
      </main>
    </>
  );
}
