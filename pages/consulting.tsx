import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Page() {
  return (
    <Layout>
      <Seo title="咨询服务页" description="咨询服务页页面描述" />
      <div className="w-full px-6 py-16 lg:px-32 text-center">
        <h1 className="text-2xl font-bold">咨询服务页</h1>
        <p className="text-gray-500">这里是 咨询服务页 的主体内容。</p>
      </div>
    </Layout>
  )
}