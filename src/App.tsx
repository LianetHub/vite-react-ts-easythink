import { Header, Page, Footer } from "./components/Layout"
import { Promo } from "./components/Promo"

export default function App() {

  return (
    <>
      <Header />
      <Page>
        <Promo />
      </Page>
      <Footer />
    </>
  )
}

