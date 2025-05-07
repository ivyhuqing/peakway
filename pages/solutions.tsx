import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Solutions() {
  return (
    <Layout>
      <Seo title="行业解决方案" description="提供智慧城市/工业/商业/民生等行业应用方案" />
      <div className="w-full px-6 py-16 lg:px-32">
        <h1 className="text-2xl font-bold text-center mb-6">行业解决方案</h1>
        <p className="text-center text-gray-500">提供智慧城市/工业/商业/民生等行业应用方案</p>
      </div>
    </Layout>
  )
}
