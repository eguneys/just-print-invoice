import { A } from "@solidjs/router";
import { Footer, Header } from "./Home";

export default function About() {
    return (<>
        <Header />
        <main class='flex flex-col min-h-[calc(100vh-90px)] flex-1 bg-gray-200'>
            <div class='w-170 flex flex-col self-center'>
                <h1 class='text-zinc-900 text-4xl font-bold my-6'>Terms of Service</h1>
                <p class='text-zinc-800 mb-4'>
                    <span class='font-bold'>Last updated: April 2, 2026.</span>
                </p>
                <p class='text-zinc-800 mb-4'>
                    Welcome to JustPrintInvoice.com (the "Service"), a free online tool for generating invoices without requiring sign-up or payment. By accessing or using the Service, you agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, you must not use the Service.
                </p>
                <h3 class='text-zinc-900 text-2xl font-bold my-5'>1. Description of the Service</h3>
                <p class='text-zinc-800 mb-4'>
                    JustPrintInvoice.com provides a simple online tool to create and print invoices. The Service is intended for personal or commercial use by individuals and businesses. 
                </p>
                <p class='text-zinc-800 mb-4'>
                    We do not store your invoice data on our servers. Invoice generation and storage occur locally within your browser.
                </p>
                <h3 class='text-zinc-900 text-2xl font-bold my-5'>2. Eligibility</h3>
                <p class='text-zinc-800 mb-4'>
                    By using the Service, you represent that you are at least 18 years old.
                </p>
                <h3 class='text-zinc-900 text-2xl font-bold my-5'>3. User Accounts</h3>
                <p class='text-zinc-800 mb-4'>
                    No user accounts are required to use the core features of the Service.
                </p>
                <h3 class='text-zinc-900 text-2xl font-bold my-5'>4. Acceptable Use</h3>
                <p class='text-zinc-800 mb-4'>
                    You agree to use the Service only for lawful purposes. Prohibited uses include:
                    <span class='block'>Generating fraudulent, illegal, or misleading invoices</span>
                    <span class='block'>Violating intellectual property rights, privacy laws, or applicable regulations</span>
                    <span class='block'>Attempting to hack, disrupt, or overload the Service</span>
                    We reserve the right to block access if misuse is suspected.
                </p>
                <h3 class='text-zinc-900 text-2xl font-bold my-5'>5. Intellectual Property</h3>
                <p class='text-zinc-800 mb-4'>
                    <span class='font-bold text-xl block'>Your Content</span>
                    Any data you input into the Service remains your property. You grant us limited, non-exclusive, and revocable license to process this data solely for the purpose of generating your invoice.
                    <span class='font-bold text-xl block'>Service Content</span>
                    All text, designs, code, and branding on JustPrintInvoice.com are owned by us or our licensors and are protected by applicable intellectual property laws. You may not copy, modify, or distribute them without permission.
                    <br/>
                    Generated invoices are for your own use. You must not use our branding in a way that implies endorsement or affiliation.
                </p>
                <h3 class='text-zinc-900 text-2xl font-bold my-5'>6. Privacy</h3>
                <p class='text-zinc-800 mb-4'>
                    We do not store your invoice data on our servers. For more details about how data is handled, plese refer to our <A class='text-blue-700' href='/privacy'>Privacy Policy.</A>
                </p>
                <h3 class='text-zinc-900 text-2xl font-bold my-5'>7. Disclaimers and Limitations of Liability</h3>
                <p class='text-zinc-800 mb-4'>
                    <span class='block'>The Service is provided "as is" without warranties of any kind, express or implied, including accuracy, reliability, or fitness for a particular purpose.</span>
                    <span class='block'>Generated invoices are templates only. You are solely responsible for ensuring their accuracy and compliance with applicable laws, including tax obligations.</span>
                    <span class='block'>To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.</span>
                </p>

                <h3 class='text-zinc-900 text-2xl font-bold my-5'>8. Termination</h3>
                <p class='text-zinc-800 mb-4'>
                    We may suspend or terminate access to the Service at any time, without prior notice, for any reason, including suspected violations of these Terms.
                </p>

                <h3 class='text-zinc-900 text-2xl font-bold my-5'>9. Changes to These Terms</h3>
                <p class='text-zinc-800 mb-4'>
                    We may update these Terms from time to time. Continued use of the Service after changes are made constitutes acceptance of the updated Terms.
                </p>

                <h3 class='text-zinc-900 text-2xl font-bold my-5'>10. Contact Us</h3>
                <p class='text-zinc-800 mb-4'>
                    If you have any questions about these Terms, email us at iplaythefrench@gmail.com.
                </p>
                <p class='text-zinc-800 mb-4'>
                    By using JustPrintInvoice.com, you acknowledge that you have read, understood, and agree to these Terms. Thank you for using our Service!
                </p>
            </div>
        </main>
        <Footer />
            </>)
}