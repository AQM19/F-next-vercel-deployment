import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Main</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing.tsx</code>
      </p>

    </MainLayout>
  )
}
