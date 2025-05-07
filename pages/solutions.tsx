import NavBar from '../components/NavBar';

export default function SolutionsPage() {
  return (
    <>
      <NavBar />
      <main className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-3xl font-bold text-center mb-12">智慧行业解决方案</h1>

        {/* 分类导航 */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-10">
          <a href="#city" className="text-blue-600 hover:underline">智慧城市</a>
          <a href="#industry" className="text-blue-600 hover:underline">工业现场</a>
          <a href="#retail" className="text-blue-600 hover:underline">商业零售</a>
          <a href="#civic" className="text-blue-600 hover:underline">民生服务</a>
          <a href="#security" className="text-blue-600 hover:underline">公共安全</a>
        </nav>

        {/* 场景区块模板 */}
        <section id="city" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">智慧城市</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <img src="/images/solutions/smart-city.jpg" alt="城市大脑" className="rounded mb-4" />
              <h3 className="font-semibold mb-2">城市大脑数据接入方案</h3>
              <p className="text-sm text-gray-600">整合前端摄像头、感知终端与边缘AI服务器，实现统一管控。</p>
            </div>
          </div>
        </section>

        <section id="industry" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">工业现场</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <img src="/images/solutions/edge-gateway.jpg" alt="边缘网关" className="rounded mb-4" />
              <h3 className="font-semibold mb-2">工业边缘控制方案</h3>
              <p className="text-sm text-gray-600">通过工业网关、RTU和数据中台实现本地数据采集与上传。</p>
            </div>
          </div>
        </section>

        <section id="retail" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">商业零售</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <img src="/images/solutions/pos-retail.jpg" alt="零售终端" className="rounded mb-4" />
              <h3 className="font-semibold mb-2">智能POS部署方案</h3>
              <p className="text-sm text-gray-600">适用于连锁门店的扫码支付、热敏打印、网络同步。</p>
            </div>
          </div>
        </section>

        <section id="civic" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">民生服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <img src="/images/solutions/kiosk-health.jpg" alt="政务医疗终端" className="rounded mb-4" />
              <h3 className="font-semibold mb-2">自助政务与医疗终端解决方案</h3>
              <p className="text-sm text-gray-600">PDA / RFID 模块接入，实现智能分诊与证件读取。</p>
            </div>
          </div>
        </section>

        <section id="security" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">公共安全</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <img src="/images/solutions/emergency-ai.jpg" alt="AI识别" className="rounded mb-4" />
              <h3 className="font-semibold mb-2">应急通信与AI识别终端</h3>
              <p className="text-sm text-gray-600">支持断网环境下的本地布控、图像识别与远程汇报。</p>
            </div>
          </div>
        </section>

        {/* CTA 引导 */}
        <section className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-4">需要完整资料包或行业选型建议？</h3>
          <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm hover:bg-gray-800 transition">
            获取解决方案手册
          </a>
        </section>
      </main>
    </>
  );
}
