import { Route, Router } from "@solidjs/router"
import { lazy } from "solid-js"
import { InvoiceProvider } from "./state/State"
import { MetaProvider } from "@solidjs/meta"

const Home = lazy(() => import('./routes/Home'))
const Print = lazy(() => import('./routes/Print'))
const About = lazy(() => import('./routes/About'))
const Terms = lazy(() => import('./routes/Terms'))
const Privacy = lazy(() => import('./routes/Privacy'))


function AppRouter() {
  return (<>
    <MetaProvider>
      <InvoiceProvider>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/print" component={Print} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
        </Router>
      </InvoiceProvider>
    </MetaProvider>
  </>)
}


export default AppRouter
