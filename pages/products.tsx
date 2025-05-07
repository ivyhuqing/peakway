import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Products() {
  return (
    <Layout>
      <Seo title="产品中心" description="探索我们的AI硬件产品目录" />
      <div className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-2xl font-bold text-center mb-6">产品中心</h1>
        <p className="text-center text-gray-500">探索我们的AI硬件产品目录</p>
      </div>
    </Layout>
  )
}
