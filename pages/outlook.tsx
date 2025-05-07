import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Outlook() {
  return (
    <Layout>
      <Seo title="趋势洞察中心" description="获取最新趋势分析、AI选型建议与投标机会" />
      <div className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-2xl font-bold text-center mb-6">趋势洞察中心</h1>
        <p className="text-center text-gray-500">获取最新趋势分析、AI选型建议与投标机会</p>
      </div>
    </Layout>
  )
}
