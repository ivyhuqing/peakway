import NavBar from '../components/NavBar';

export default function ConsultingPage() {
  return (
    <>
      <NavBar />
      <main className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-3xl font-bold text-center mb-12">我们不仅提供产品，更提供解决方案</h1>

        {/* 服务列表 */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">我们的咨询服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img src="/images/consulting/oem.png" alt="OEM定制" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">OEM 定制选型</h3>
              <p className="text-sm text-gray-600">根据您的目标市场与预算推荐合适的品牌与硬件组合。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img src="/images/consulting/ckd.png" alt="CKD交付" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">CKD/SKD 交付咨询</h3>
              <p className="text-sm text-gray-600">提供物料清单、包装方式、配套本地化服务建议。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img src="/images/consulting/cert.png" alt="认证咨询" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">合规认证协助</h3>
              <p className="text-sm text-gray-600">指导您完成CE、FCC、本地检测等资质准备工作。</p>
            </div>
          </div>
        </section>

        {/* 表单提交区 */}
        <section className="bg-gray-50 py-12 px-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-6">提交您的问题或项目需求</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="您的姓名"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <input
              type="email"
              placeholder="您的邮箱"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <textarea
              rows={4}
              placeholder="请简要描述您的问题或需求场景"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <button
              type="submit"
              className="w-full bg-black text-white text-sm py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            >
              提交咨询
            </button>
          </form>
        </section>

        {/* CTA + 背书 */}
        <section className="mt-20 text-center text-sm text-gray-500">
          已为全球 20+ 国家客户提供定制服务 | 10+ 年 OEM 实战经验 | 多语言技术团队支持
        </section>
      </main>
    </>
  );
}
