import { Router, Route } from "@solidjs/router"
import { lazy } from "solid-js"
import { InvoiceProvider } from "./state/State"
import { MetaProvider } from "@solidjs/meta"

const Home = lazy(() => import('./routes/Home'))
const Print = lazy(() => import('./routes/Print'))


function AppRouter() {
  return (<>
    <MetaProvider>
      <InvoiceProvider>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/print" component={Print} />
        </Router>
      </InvoiceProvider>
    </MetaProvider>
  </>)
}


export default AppRouter
