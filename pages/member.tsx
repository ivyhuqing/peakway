import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Member() {
  return (
    <Layout>
      <Seo title="加入会员 / 代理计划" description="享专属报价、返点政策与资料支持" />
      <div className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-2xl font-bold text-center mb-6">加入会员 / 代理计划</h1>
        <p className="text-center text-gray-500">享专属报价、返点政策与资料支持</p>
      </div>
    </Layout>
  )
}
