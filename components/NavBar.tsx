import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 border-b">
      <Link href="/">首页</Link>
      <Link href="/products">产品</Link>
      <Link href="/solutions">解决方案</Link>
      <Link href="/outlook">前沿展望</Link>
      <Link href="/consulting">咨询服务</Link>
      <Link href="/member">会员专区</Link>
    </nav>
  )
}
