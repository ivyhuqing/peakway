import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-bold">AI-B2B</div>
      <div className="flex gap-6 text-sm">
        <Link href="/">首页</Link>
        <Link href="/products">产品中心</Link>
        <Link href="/solutions">解决方案</Link>
        <Link href="/outlook">前沿展望</Link>
        <Link href="/consulting">咨询服务</Link>
        <Link href="/member">会员专区</Link>
      </div>
    </nav>
  );
}

