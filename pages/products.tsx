import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Page() {
  return (
    <Layout>
      <Seo title="产品中心" description="产品中心页面描述" />
      <div className="w-full px-6 py-16 lg:px-32 text-center">
        <h1 className="text-2xl font-bold">产品中心</h1>
        <p className="text-gray-500">这里是 产品中心 的主体内容。</p>
      </div>
    </Layout>
  )
}