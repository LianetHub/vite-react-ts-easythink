import { Header, Page, Footer } from "./components/Layout"
import { Promo, Services, Benefits, SignUp, Faq, Mission, Dignity } from "./components"

export default function App() {

  return (
    <>
      <Header />
      <Page>
        <Promo />
        <Services />
        <Benefits />
        <SignUp />
        <Dignity />
        <Faq />
        <Mission />
      </Page>
      <Footer />
    </>
  )
}

