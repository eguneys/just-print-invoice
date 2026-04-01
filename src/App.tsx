import { HashRouter, Route } from "@solidjs/router"
import { lazy } from "solid-js"
import { InvoiceProvider } from "./state/State"

const Home = lazy(() => import('./routes/Home'))
const Print = lazy(() => import('./routes/Print'))


function AppRouter() {
  return (<>
    <InvoiceProvider>
      <HashRouter>
        <Route path="/" component={Home} />
        <Route path="/print" component={Print} />
      </HashRouter>
    </InvoiceProvider>
  </>)
}


export default AppRouter
