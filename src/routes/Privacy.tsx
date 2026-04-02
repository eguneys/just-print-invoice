import { Footer, Header } from "./Home";

export default function About() {
    return (<>
        <div class='flex flex-col'>
            <Header />
            <main class='flex flex-col min-h-[calc(100vh-90px)] flex-1 bg-gray-200'>
                <div class='w-170 flex flex-col self-center'>
                    <h1 class='text-zinc-900 text-4xl font-bold my-6'>Privacy Policy</h1>
                    <p class='text-zinc-800 mb-4'>
                        <span class='font-bold'>Last updated: April 2, 2026.</span>
                    </p>
                    <p class='text-zinc-800 mb-4'>
                        Just Print Invoice, is commited to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service at justprintinvoice.com.
                    </p>
                    <h2 class='text-zinc-900 text-3xl font-bold my-5'>Information We Collect</h2>
                    <p class='text-zinc-800 mb-4'>
                        <h4 class='font-bold'>Usage Data</h4> 
                        We may collect limited, anonymouse usage data such as your IP address, browser type (User Agent), and pages visited. This data does not directly identify you.
                        <h4 class='font-bold'>Invoice Details</h4> 
                        The information you enter to create invoices (such as names, items, and amounts) is stored locally in your browser and is not transmitted to our servers.
                    </p>
                    <h2 class='text-zinc-900 text-3xl font-bold my-5'>How We Use Your Information</h2>
                    <p class='text-zinc-800 mb-4'>
                        <ul>
                        <li class='mb-1'><span class='font-bold'>Usage data</span> is used to analyse trends, monitor performance, and improve the user experience.</li>
                        <li><span class='font-bold'>Invoice Details</span> are used solely to generate your invoice and to allow you to reuse your data on future visits.</li>
                        </ul>
                    </p>
                    <h2 class='text-zinc-900 text-3xl font-bold my-5'>Data Storage And Security</h2>
                    <p class='text-zinc-800 mb-4'>
                        <ul>
                            <li>Usage data may be processed or temporarily stored by third-party infrastructure providers used to host the website.</li>
                            <li>Invoice details are stored exclusively in your browser's local storage and never leave your device.</li>
                        </ul>
                    </p>
                    <h2 class='text-zinc-900 text-3xl font-bold my-5'>Cookies and Tracking</h2>
                    <p class='text-zinc-800 mb-4'>
                        We use Google AdSense to display ads. These providers may use cookies or similar tracking technologies to deliver and measure ads.
                    </p>
                    <h2 class='text-zinc-900 text-3xl font-bold my-5'>Your Rights</h2>
                    <p class='text-zinc-800 mb-4'>
                        You have full control over your data:
                        <ul>
                            <li>You can export and print your generated invoices at any time.</li>
                            <li>You can delete your invoice data by clearing your browser's local storage.</li>
                            <li>You may stop using the service at any time.</li>
                        </ul>
                    </p>
                    <h2 class='text-zinc-900 text-3xl font-bold my-5'>Third-Party Links</h2>
                    <p class='text-zinc-800 mb-4'>
                        Our website may include links to third-party services such as advertisements or our GitHub repository. We are not responsible for the privacy practices of these external sites.
                    </p>
                    <h2 class='text-zinc-900 text-3xl font-bold my-5'>Changes to This Policy</h2>
                    <p class='text-zinc-800 mb-4'>
                        We may update this Privacy Policy, from time to time. Any changes will be reflected by updating the "Last updated" date at the top of this page.
                    </p>
                    <h2 class='text-zinc-900 text-3xl font-bold my-5'>Contact Us</h2>
                    <p class='text-zinc-800 mb-4'>
                        You can contact us for further questions or requests at iplaythefrench@gmail.com
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    </>)
}