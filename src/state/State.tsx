import { createContext, type JSX, useContext } from "solid-js"
import { make_invoice_store, type Actions, type State } from "./invoice_state"

export const useState = () => useContext(InvoiceContext)!

const InvoiceContext = createContext<InvoiceStore>()

type InvoiceState = {
    invoice_state: State
}

type InvoiceActions = {
    invoice_actions: Actions
}

export type InvoiceStore = [InvoiceState, InvoiceActions]



export const InvoiceProvider = (props: { children: JSX.Element }) => {

    const [invoice_state, invoice_actions] = make_invoice_store()

    const state = {
        invoice_state
    }

    const actions = {
        invoice_actions
    }

    const store: InvoiceStore = [state, actions]

    return <InvoiceContext.Provider value={store}>
        {props.children}
    </InvoiceContext.Provider>
}