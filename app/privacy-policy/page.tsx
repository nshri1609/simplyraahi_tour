import Navbar from "@/components/navbar";
import C7 from "@/components/c7";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      {/* Privacy Policy Header */}
      <div className="bg-sky-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            PRIVACY POLICY
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            We at SimplyRaahi have a very strict code of conduct for any sort of
            information of the client that has been gathered by us through any
            source.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            We hereby declare the following:
          </p>

          <ul className="space-y-6 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">•</span>
              <span>
                At any Circumstance SimplyRaahi will not share Client's personal
                information to our Vendors, Customers or third party until and
                unless your consent has been taken. All your information like
                Contact number, Address, Identity proofs, will be kept under
                privacy and will not be used for personal or professional Use.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">•</span>
              <span>
                SimplyRaahi has the right to use any photograph for official
                purpose which has been clicked by us during the tour, if you
                have any objection related to it please inform to us, we will
                consider your reason and if found appropriate we can remove the
                photograph but the last call in this will be of SimplyRaahi.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">•</span>
              <span>
                Once you have shared your contacts and Email with us SimplyRaahi
                has the right to contact you further through the contact details
                shared by you.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">•</span>
              <span>
                Prior approval of SimplyRaahi is required if you are using our
                photograph anywhere whether it is for personal use or
                professionally.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fulfil Dreams */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-sky-950 mb-4">
                FULFIL DREAMS
              </h3>
              <p className="text-gray-600">
                At SimplyRaahi, we intend to encourage people, to take out time
                from their busy lives and join us on a journey of
                self-exploration in the Himalayas.
              </p>
            </div>

            {/* Contact Us */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-sky-950 mb-4">
                CONTACT US
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">Address:</span>
                  <br />
                  Talla Cheenakhan, Dharanaula Road,
                  <br />
                  Near Kapisha Petrol Pump,
                  <br />
                  Almora, 263601
                </p>
                <p>
                  <span className="font-semibold">Daily Business Hours:</span> 9
                  AM to 9 PM
                </p>
                <p>
                  <span className="font-semibold">Call:</span> +91-7902059525
                </p>
              </div>
            </div>

            {/* In a Nutshell */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-sky-950 mb-4">
                IN A NUTSHELL
              </h3>
              <p className="text-gray-600 mb-4">
                Certified by StartUpIndia, MSME and Uttarakhand Tourism, we are
                a 5 Star Rated Company with a 95% Customer Satisfaction Score.
                We deal in Trekking in the Himalayas, Customized group tours.
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://www.facebook.com/share/1BFCRZeiLw/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/simplyraahi?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/simplyraahi?igsh=bWN3a2hneGU1NXJj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/simplyraahi/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0077B5] rounded flex items-center justify-center hover:bg-[#005885] transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="bg-gray-900 text-white py-6"> */}
      {/* <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              SimplyRaahi © 2024 All Rights Reserved
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="/faq"
                className="flex items-center hover:text-sky-400 transition-colors"
              >
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                FAQ
              </a>
              <a
                href="/terms-conditions"
                className="flex items-center hover:text-sky-400 transition-colors"
              >
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Terms & Conditions
              </a>
              <a
                href="/cancellation-policy"
                className="flex items-center hover:text-sky-400 transition-colors"
              >
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Cancellation Policy
              </a>
              <a
                href="/privacy-policy"
                className="flex items-center text-sky-400"
              >
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Privacy Policy
              </a>
              <a
                href="/disclaimer"
                className="flex items-center hover:text-sky-400 transition-colors"
              >
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Disclaimer
              </a>
              <a
                href="/payment-policy"
                className="flex items-center hover:text-sky-400 transition-colors"
              >
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Payment Policy
              </a>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      <C7 />
    </>
  );
}
