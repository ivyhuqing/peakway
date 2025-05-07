export default function Hero() {
  return (
    <section className="w-full bg-primary text-white py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">全流程物联网终端解决方案平台</h1>
      <p className="mt-4 text-lg">连接数据采集、传输、显示与存储终端，打造高可靠、可部署的智能硬件体系</p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-accent-green hover:bg-cta-hover px-6 py-2 rounded text-white font-semibold">立即咨询</button>
        <button className="border border-white px-6 py-2 rounded text-white">了解产品</button>
      </div>
    </section>
  );
}
