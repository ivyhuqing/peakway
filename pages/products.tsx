export default function ProductsPage() {
  return (
    <main className="w-full px-6 py-16 lg:px-32">
      <h1 className="text-3xl font-bold text-center mb-12">我们的产品</h1>

      {/* 分类导航锚点 */}
      <nav className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-medium">
        <a href="#collect" className="text-blue-600 hover:underline">数据采集类</a>
        <a href="#transmit" className="text-blue-600 hover:underline">数据传输类</a>
        <a href="#display" className="text-blue-600 hover:underline">数据显示类</a>
        <a href="#store" className="text-blue-600 hover:underline">数据储存类</a>
      </nav>

      {/* ✅ 数据采集类 */}
      <section id="collect" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">数据采集类</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <img src="/images/products/camera.png" alt="摄像头" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">工业摄像头</h3>
            <p className="text-sm text-gray-500">用于目标识别、监控采集等视觉系统</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <img src="/images/products/scanner.png" alt="扫码器" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">二维码扫码器</h3>
            <p className="text-sm text-gray-500">支持1D/2D码读取，适配零售与制造场景</p>
          </div>
        </div>
      </section>

      {/* ✅ 数据传输类 */}
      <section id="transmit" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">数据传输类</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <img src="/images/products/gateway.png" alt="工业网关" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">工业网关</h3>
            <p className="text-sm text-gray-500">多协议接入，适配工业现场数据采集</p>
          </div>
        </div>
      </section>

      {/* ✅ 数据显示类 */}
      <section id="display" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">数据显示类</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <img src="/images/products/panel-pc.png" alt="工业平板" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">工业触控平板</h3>
            <p className="text-sm text-gray-500">支持防尘防水，适用于车间与控制终端</p>
          </div>
        </div>
      </section>

      {/* ✅ 数据储存类 */}
      <section id="store" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">数据储存类</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <img src="/images/products/ai-server.png" alt="AI服务器" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">AI服务器</h3>
            <p className="text-sm text-gray-500">支持GPU加速，满足边缘推理与训练需求</p>
          </div>
        </div>
      </section>
    </main>
  );
}
