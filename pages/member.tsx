import NavBar from '../components/NavBar';

export default function MemberPage() {
  return (
    <>
      <NavBar />
      <main className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-3xl font-bold text-center mb-12">加入我们的全球合作网络</h1>

        {/* 权益列表 */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">会员专属权益</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img src="/images/member/rebate.png" alt="返点政策" className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">项目返点</h3>
              <p className="text-sm text-gray-600">年度累计销售返点，激励持续合作。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img src="/images/member/package.png" alt="资料包" className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">专属资料包</h3>
              <p className="text-sm text-gray-600">获取品牌授权书、产品宣传图、技术白皮书等。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img src="/images/member/pricing.png" alt="专属报价" className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">专属价格政策</h3>
              <p className="text-sm text-gray-600">代理商专属折扣体系，保障合理利润。</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img src="/images/member/region.png" alt="区域保护" className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">区域保护</h3>
              <p className="text-sm text-gray-600">优先享有本地客户线索及市场支持资源。</p>
            </div>
          </div>
        </section>

        {/* 注册表单 */}
        <section className="bg-gray-50 py-12 px-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-6">申请成为会员 / 代理商</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="您的姓名"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <input
              type="email"
              placeholder="邮箱地址"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <input
              type="text"
              placeholder="公司名称"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <textarea
              rows={4}
              placeholder="请简要说明您的合作意向"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <button
              type="submit"
              className="w-full bg-black text-white text-sm py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            >
              提交申请
            </button>
          </form>
        </section>

        {/* 信任背书 */}
        <section className="mt-20 text-center text-sm text-gray-500">
          已有来自 20+ 国家和地区的合作伙伴加入我们的分销网络
        </section>
      </main>
    </>
  );
}
