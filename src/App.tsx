import { AnimationProvider } from '@/contexts/AnimationContext'
import { Layout } from '@/components/layout'

function App() {
  return (
    <AnimationProvider>
      <Layout />
    </AnimationProvider>
  )
}

export default App
