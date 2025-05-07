import NavBar from '../components/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="w-full px-6 py-16 lg:px-32">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">赋能智能硬件出海</h1>
          <p className="text-gray-600 text-lg mb-6">连接全球OEM资源，推动AI终端部署与本地化交付</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/products" className="px-6 py-3 bg-black text-white rounded-xl text-sm hover:bg-gray-800 transition">查看产品</a>
            <a href="/solutions" className="px-6 py-3 border border-black text-black rounded-xl text-sm hover:bg-gray-100 transition">了解方案</a>
          </div>
        </section>

        {/* 快速入口卡片 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <a href="/products" className="bg-white p-6 shadow rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">产品中心</h3>
            <p className="text-sm text-gray-500">探索数据采集、传输、显示与存储硬件设备</p>
          </a>
          <a href="/solutions" className="bg-white p-6 shadow rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">行业解决方案</h3>
            <p className="text-sm text-gray-500">智慧城市、工业边缘、商用终端、公共安全等场景覆盖</p>
          </a>
          <a href="/consulting" className="bg-white p-6 shadow rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">咨询服务</h3>
            <p className="text-sm text-gray-500">OEM选型、CKD交付、认证指导，一站式定制支持</p>
          </a>
        </section>

        {/* 合作伙伴墙 */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">合作伙伴</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
            <img src="/images/partners/foxconn.png" alt="Foxconn" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/images/partners/huawei.png" alt="Huawei" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/images/partners/zte.png" alt="ZTE" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/images/partners/lenovo.png" alt="Lenovo" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
          </div>
        </section>

        {/* 客户反馈 */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">客户评价</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-gray-700 mb-4">“他们的AI服务器部署体验非常顺畅，兼容性很好。”</p>
              <div className="text-sm text-gray-500">张伟 · 工业集成商 CEO</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-gray-700 mb-4">“平台提供了完整的CKD方案和认证文件，节省了大量时间。”</p>
              <div className="text-sm text-gray-500">Nguyen · 越南电信经理</div>
            </div>
          </div>
        </section>

        {/* CTA 区块 */}
        <section className="text-center mt-16">
          <h2 className="text-xl font-semibold mb-4">需要行业选型建议或样品申请？</h2>
          <a href="/member" className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm hover:bg-gray-800 transition">
            加入会员计划
          </a>
        </section>
      </main>
    </>
  );
}
