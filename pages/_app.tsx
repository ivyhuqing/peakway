import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Page() {
  return (
    <Layout>
      <Seo title="全局入口" description="全局入口页面描述" />
      <div className="w-full px-6 py-16 lg:px-32 text-center">
        <h1 className="text-2xl font-bold">全局入口</h1>
        <p className="text-gray-500">这里是 全局入口 的主体内容。</p>
      </div>
    </Layout>
  )
}