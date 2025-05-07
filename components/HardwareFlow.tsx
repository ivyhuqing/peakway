export default function HardwareFlow() {
  const items = [
    { title: "数据采集终端", desc: "连接人、设备与环境" },
    { title: "数据传输终端", desc: "支持有线与无线多种协议" },
    { title: "数据显示终端", desc: "实现人机交互与边缘呈现" },
    { title: "数据存储终端", desc: "本地缓存与边缘计算能力" },
  ];
  return (
    <section className="w-full py-16 bg-background">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">支持全流程的智能终端</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-card shadow rounded p-6 text-center text-text-main">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-text-subtle">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
