import { makePersisted } from "@solid-primitives/storage"
import { createMemo } from "solid-js"
import { createStore } from "solid-js/store"


type PersistedState = {
    name: string
    recipient_title: string
    recipient_address: string
    date: string,
    due_date: string,
    invoice_no: number
    new_item_name: string
    new_item_quantity: number
    new_item_rate: number
    items: Item[]
}

export type State = {
    name: string
    recipient_title: string
    recipient_address: string
    date: Date,
    due_date: Date,
    invoice_no: number
    new_item_name: string
    new_item_quantity: number
    new_item_rate: number
    items: Item[],
    balance_due: number
    total: number
}

export type Item = {
    title: string
    quantity: number
    rate: number
}


export type Actions = {
    set_name: (name: string) => void,
    set_date: (date: Date) => void,
    set_due_date: (due_date: Date) => void,
    set_invoice_no: (invoice_no: number) => void,
    set_new_item_name: (new_item_name: string) => void,
    set_new_item_quantity: (new_item_quantity: number) => void,
    set_new_item_rate: (new_item_rate: number) => void,
    set_recipient_address: (recipient_address: string) => void,
    set_recipient_title: (recipient_title: string) => void,
    add_item: () => void,
    remove_item: (index: number) => void
}

export type Store = [State, Actions]

export const make_invoice_store = (): Store => {
    const default_date = () => new Date()
    const default_due_date = () => new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)


    const [state, set_state] = makePersisted(createStore<PersistedState>({
        name: '',
        recipient_title: '',
        recipient_address: '',
        date: default_date().toString(),
        due_date: default_due_date().toString(),
        invoice_no: 1,
        new_item_name: '',
        new_item_quantity: 1,
        new_item_rate: 30,
        items: []
    }), { name: 'just-print-invoice.v1'})

    const date = createMemo(() => new Date(state.date))
    const due_date = createMemo(() => new Date(state.due_date))

    const total = createMemo(() => state.items.map(_ => _.quantity * _.rate).reduce((a, b) => a + b, 0))
    const balance_due = createMemo(() => total())

    const set_name = (name: string) => set_state('name', name)
    const set_recipient_title = (recipient_title: string) => set_state('recipient_title', recipient_title)
    const set_recipient_address = (recipient_address: string) => set_state('recipient_address', recipient_address)
    const set_date = (date: Date) => set_state('date', date.toString())
    const set_due_date = (due_date: Date) => set_state('due_date', due_date.toString())
    const set_invoice_no = (invoice_no: number) => set_state('invoice_no', invoice_no)


    const set_new_item_name = (item_name: string) => set_state('new_item_name', item_name)
    const set_new_item_rate = (item_rate: number) => set_state('new_item_rate', item_rate)
    const set_new_item_quantity = (item_quantity: number) => set_state('new_item_quantity',item_quantity)

    const remove_item = (i: number) => set_state('items', _ => _.toSpliced(i, 1))

    const add_item = () => {
        if (state.new_item_name === '') {
            return
        }
        let item: Item = {
            title: state.new_item_name,
            quantity: state.new_item_quantity,
            rate: state.new_item_rate
        }
        set_state('items', state.items.length, item)
    }

    let get_state: State = {
        get name() {
            return state.name
        },
        get recipient_title() {
            return state.recipient_title
        },
        get recipient_address() {
            return state.recipient_address
        },
        get date() {
            return date()
        },
        get due_date() {
            return due_date()
        },
        get balance_due() {
            return balance_due()
        },
        get total() {
            return total()
        },
        get invoice_no() {
            return state.invoice_no
        },
        get new_item_name() {
            return state.new_item_name
        },
        get new_item_quantity() {
            return state.new_item_quantity
        },
        get new_item_rate() {
            return state.new_item_rate
        },
        get items() {
            return state.items
        }
    }

    let actions: Actions = {
        set_name,
        set_date,
        set_due_date,
        set_invoice_no,
        set_new_item_name,
        set_new_item_quantity,
        set_new_item_rate,
        set_recipient_address,
        set_recipient_title,
        add_item,
        remove_item
    }

    return [get_state, actions]

}