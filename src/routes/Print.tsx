import { For } from "solid-js"
import { useState } from "../state/State"
import { format_currency } from "./Home"

export default function Print() {

    const [{ invoice_state: state }] = useState()

    return (<>
        <div class='overflow-auto flex-1 flex flex-col gap-7 m-5 rounded-xs bg-white p-1 text-slate-800'>
            <div class='flex justify-between'>
                <h3 class='text-2xl font-bold'>{state.name === '' ? 'Your Name' : state.name}</h3>
                <div class='flex flex-col'>
                    <h2 class='text-4xl'>INVOICE</h2>
                    <span class='self-end text-xl text-gray-700'>#{state.invoice_no}</span>
                </div>
            </div>
            <div class='flex justify-between'>
                <div>
                    <h2 class='text-gray-700'>Bill To:</h2>
                    <div>
                        <h2 class='font-bold'>{state.recipient_title === '' ? 'Recipient Title' : state.recipient_title}</h2>
                        <p class='text-wrap w-70 whitespace-pre-wrap'>{state.recipient_address === '' ? 'Recipient Address' : state.recipient_address}</p>
                    </div>
                </div>
                <div class='flex-1'></div>
                <div class='flex-2 flex justify-between'>
                    <div class='flex flex-col'>
                        <label class='text-gray-700'>Date:</label>
                        <label class='text-gray-700'>Due Date:</label>
                        <label class='mt-3 font-bold text-xl'>Balance Due:</label>
                    </div>
                    <div class='flex flex-col'>
                        <span class='self-end'>{state.date.toString().split(' ').slice(0, 4).join(' ')}</span>
                        <span class='font-bold self-end'>{state.due_date.toString().split(' ').slice(0, 4).join(' ')}</span>
                        <span class='mt-3 font-bold text-xl self-end'>{format_currency(state.balance_due)}</span>
                    </div>
                </div>
            </div>
            <div class='flex flex-col'>
                <div class='flex text-black border gap-5 py-2 px-5'>
                    <span class='flex-10'>Item</span>
                    <span class='flex-2'>Quantity</span>
                    <span class='flex-2 border-r'>Rate</span>
                    <span class='flex-2'>Amount</span>
                </div>
                <div class='flex-1'>
                    <For each={state.items}>{(item, i) =>
                        <div class='cursor-pointer flex gap-5 py-2 px-4 rounded'>
                            <span class='flex-10 font-bold'>{item.title}</span>
                            <span class='flex-2'>{item.quantity}</span>
                            <span class='flex-2'>{format_currency(item.rate)}</span>
                            <span class='flex-2'>{format_currency(item.quantity * item.rate)}</span>
                        </div>
                    }</For>
                </div>
            </div>
            <div class='flex justify-end p-5 gap-10'>
                <div class='text-gray-700'>Total:</div>
                <div class=''>{format_currency(state.total)}</div>
            </div>
        </div>
    </>)
}