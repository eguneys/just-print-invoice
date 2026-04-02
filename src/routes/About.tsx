import { Footer, Header } from "./Home";

export default function About() {
    return (<>
        <Header />
        <main class='flex flex-col min-h-[calc(100vh-90px)] flex-1 bg-gray-200'>
            <div class='w-170 flex flex-col self-center'>
                <h1 class='text-zinc-900 text-4xl font-bold my-6'>About Just Print Invoice</h1>
                <p class='text-zinc-800 mb-4'>
                    Just Print Invoice is a simple utility that let's you create invoices by filling out the fields and generating a clean, print-ready page containing only your invoice.
                </p>
                <p class='text-zinc-800 mb-4'>
                    Your information is saved locally, so you don't need to re-enter the same details each month.
                </p>
                <p class='text-zinc-800 mb-4'>
                    You can easily add or remove items, enter your details, and automatically calculate the total balance.
                </p>
                <p class='text-zinc-800 mb-4'>
                    The goal is to provide the lowest-friction way to generate and download invoices. The service is free to use, requires no signup, and is supported by ads—there are no paywalls or locked features.
                </p>
                <p class='text-zinc-800 mb-4'>
                    Just Print Invoice is built and maintained by a single hobbyist developer, originally created as a personal side project.
                </p>
                <p class='text-zinc-800 mb-4'>
                    We hope you find it useful, and we wish all of you the best of profits.
                </p>
            </div>
        </main>
        <Footer />
    </>)
}