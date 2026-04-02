import { For } from "solid-js";
import { useState } from "../state/State";
import { A } from "@solidjs/router";

export const format_currency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount)
}



export default function Home() {

    const [{ invoice_state: state }, { invoice_actions: {
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
    }} ] = useState()

    const goto_print_page = () => {
        window.location.href = 'print'
    }

    return (<>
    <div class='flex flex-col'>
        <Header/>

        <main role="main" class='min-h-[calc(100vh-90px)] flex flex-1 flex-col xl:flex-row bg-gray-200'>
                <div class='flex bg-gray-900 text-white self-center'>
                    {/*
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8375052900987944"
                        crossorigin="anonymous"></script>
                    <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-8375052900987944"
                        data-ad-slot="1370398970"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({ });
                    </script>
                    */}
            </div>
            <div class='fields flex-1'>
                <h2 class='text-center font-bold text-2xl text-slate-800'>Fields</h2>
                <div class='flex flex-col gap-2 p-5'>
                    <span class='text-xs'>Your Name:</span>
                    <input autocomplete="false" id="Name" class='border rounded-sm  text-xl p-2' type='text' title='Name' placeholder="Your Name" value={state.name} onInput={e => set_name(e.target.value)}></input>
                    <span class='text-xs'>Recipient Title:</span>
                    <input autocomplete="false" id="Recipient" class='border rounded-sm  text-xl p-2' type='text' title='Recipient Title' placeholder="Recipient Title" value={state.recipient_title} onInput={e => set_recipient_title(e.target.value)}></input>
                    <span class='text-xs'>Recipient Address:</span>
                    <textarea id="RecipientAddress" rows={5} class='border rounded-sm  text-xl p-2 resize-none' title='Recipient Address' placeholder="Recipient Address" value={state.recipient_address} onInput={e => set_recipient_address(e.target.value)}></textarea>
                    <div class='flex gap-2 justify-end flex-col xl:flex-row'>
                        <div class="flex-1"></div>
                        <div class='flex p-2 flex-row bg-blue-400 rounded'>
                            <label class='self-center'>Date:</label>
                            <input class='cursor-pointer p-2' id="Date" type='date' title='Date' value={state.date.toISOString().split('T')[0]} onInput={e => set_date(new Date(e.target.value)) }></input>
                        </div>
                        <div class='flex p-2 bg-yellow-600 rounded'>
                            <label class='self-center'>Due Date:</label>
                            <input class='cursor-pointer p-2' id="DueDate" type='date' title='Due Date' value={state.due_date.toISOString().split('T')[0]} onInput={e => set_due_date(new Date(e.target.value))}></input>
                        </div>
                        <div class='flex flex-col self-end'>
                            <label class='text-xs'>Invoice No:</label>
                            <input min={1} autocomplete="false" id="InvoiceNo" class='w-35 border rounded-sm  text-xl p-2' type='number' title='Invoice No' placeholder="Invoice No" value={state.invoice_no} onChange={e => set_invoice_no(parseInt(e.target.value))}></input>
                        </div>
                    </div>
                    <div class='flex flex-col gap-2'>
                        <span class='text-xs'>Item Name:</span>
                        <input id="Item Name" class='border rounded-sm  text-xl p-2' type='text' title='Item Name' placeholder="Item Name" value={state.new_item_name} onInput={e => set_new_item_name(e.target.value)}></input>
                        <div class='flex justify-end gap-2'>
                            <label class='self-center'>Quantity:</label>
                            <input min="1" id="Quantity" class='w-30 border rounded-sm  text-xl p-2' type='number' title='Quantity' placeholder="Quantity" value={state.new_item_quantity} onInput={e => set_new_item_quantity(parseInt(e.target.value))}></input>
                            <label class='self-center'>Rate:</label>
                            <input min="1" id="Rate" class='w-30 border rounded-sm  text-xl p-2' type='number' title='Rate' placeholder="Rate" value={state.new_item_rate} onInput={e => set_new_item_rate(parseFloat(e.target.value))}></input>
                        </div>
                        <div class='flex flex-col'>
                            <button class='cursor-pointer hover:bg-amber-500 flex-1 bg-amber-600 p-2 rounded text-xl' onClick={() => add_item()}>+ Add </button>
                            <small class='text-s self-end'>*To Remove an item, click the item on the preview.</small>
                        </div>
                    </div>
                </div>
            </div>
                <div class='flex bg-gray-900 text-white self-center'>
                    {/*
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8375052900987944"
                        crossorigin="anonymous"></script>
                    <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-8375052900987944"
                        data-ad-slot="1370398970"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({ });
                    </script>
                    */}
                </div>
                <div class='h-199 max-h-190 flex preview flex-1 flex-col'>
                    <h2 class='whitespace-nowrap text-center font-bold text-2xl text-slate-800'>Preview</h2>
                    <div class='overflow-auto flex-1 border m-5 rounded-xs bg-white p-5 text-slate-800'>
                        <div class='flex flex-col gap-7 min-w-160'>
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
                                <div class='flex-2 flex gap-5 justify-end'>
                                    <div class='flex flex-col'>
                                        <label class='text-gray-700 self-end'>Date:</label>
                                        <label class='text-gray-700 self-end'>Due Date:</label>
                                        <label class='mt-1 font-bold text-lg self-end'>Balance Due:</label>
                                    </div>
                                    <div class='flex flex-col'>
                                        <span class='self-end'>{state.date.toString().split(' ').slice(0, 4).join(' ')}</span>
                                        <span class='font-bold self-end'>{state.due_date.toString().split(' ').slice(0, 4).join(' ')}</span>
                                        <span class='mt-1 font-bold text-lg self-end'>{format_currency(state.balance_due)}</span>
                                    </div>
                                </div>
                            </div>
                            <div class='flex flex-col'>
                                <div class='flex bg-gray-900 text-white gap-5 py-2 px-5 rounded'>
                                    <span class='flex-10'>Item</span>
                                    <span class='flex-2'>Quantity</span>
                                    <span class='flex-2 border-r pl-1'>Rate</span>
                                    <span class='flex-2'>Amount</span>
                                </div>
                                <div class='flex-1'>
                                    <For each={state.items}>{(item, i) =>
                                        <div class='cursor-pointer hover:bg-red-500 flex gap-5 py-2 px-4 rounded' title='Remove Item' onClick={() => remove_item(i())}>
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
                    </div>
                    <div class='flex p-5 justify-center'>
                    <button class="cursor-pointer hover:underline hover:bg-emerald-700 font-bold text-slate-100 text-xl lg:text-2xl bg-emerald-800 px-3 py-2 rounded-sm" onClick={goto_print_page}>Goto Your Invoice Page <small>And Press Print as PDF <span class='text-xs'>(Ctrl+P)</span></small></button>
                </div>
            </div>
        </main>


<Footer/>
</div>
    </>)
}

export const Footer = () => {
    return (<>
        <footer class='text-gray-800 pt-15 pb-20 flex flex-col sm:flex-row justify-center items-center bg-gray-200 gap-5'>
            <div class='flex items-center gap-4'>
                <A href="/"><img alt="Logo" class="h-10 border-cyan-100 border-2 rounded-xl" src="./favicon.png"></img></A>
                <span>© 2026 JustPrintInvoice<span class='text-gray-500'>.com</span></span>
            </div>
            <div class='flex gap-4 flex-col sm:flex-row'>
                <A class="hover:underline hover:text-slate-900" href="/terms">Terms</A>
                <A class="hover:underline hover:text-slate-900" href="/privacy">Privacy</A>
                <A class="hover:underline hover:text-slate-900" href="/about">About</A>
                <A class="hover:underline hover:text-slate-900" href="https://github.com/eguneys/just-print-invoice">Github</A>
            </div>
        </footer>
    </>)
}


export function Header() {
    return (<>
        <header role="banner" class='h-15 lg:h-20 flex bg-purple-800 p-3 drop-shadow-lg drop-shadow-cyan-500/70 justify-center'>
            <nav role="navigation" class='gap-8 flex font-bold text-xl md:text-2xl lg:text-3xl self-center'>
                <A href="/">
                    <img alt="Logo" class="h-12 md:h-13 lg:h-15 border-cyan-100 border-2 rounded-xl" src="./favicon.png"></img>
                </A>
                <A class='self-center text-pink-400' href="/">Just Print <span class="text-cyan-300">Invoice</span></A>
            </nav>
        </header>
    </>)
}