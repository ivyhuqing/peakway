import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Consulting() {
  return (
    <Layout>
      <Seo title="专业咨询服务" description="OEM定制、CKD交付、认证合规全流程支持" />
      <div className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-2xl font-bold text-center mb-6">专业咨询服务</h1>
        <p className="text-center text-gray-500">OEM定制、CKD交付、认证合规全流程支持</p>
      </div>
    </Layout>
  )
}
