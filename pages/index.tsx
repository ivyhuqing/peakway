import NavBar from '../components/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-3xl font-bold text-center mb-12">这是首页（含导航）</h1>
        <p className="text-center text-gray-600">你可以从上方导航进入产品页、解决方案等。</p>
      </main>
    </>
  );
}
