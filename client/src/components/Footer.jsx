import { assets } from "../assets/assets";

export default function Footer() {
    return (
        <>  
            <footer className="mt-32 px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="/">
                            <img src={assets.logo} alt="logo" />
                        </a>
                        <p className="text-sm/7 mt-6">
                            ProfileExchange is a modern social media marketplace where creators can
                            securely buy and sell digital profiles with confidence and transparency.
                        </p>
                    </div>

                    <div className="flex flex-col lg:items-center lg:justify-center">
                        <div className="flex flex-col text-sm space-y-2.5">
                            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                            <a className="hover:text-slate-600 transition" href="#">About ProfileExchange</a>
                            <a className="hover:text-slate-600 transition" href="#">
                                Careers
                                <span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">
                                    We’re hiring!
                                </span>
                            </a>
                            <a className="hover:text-slate-600 transition" href="#">Contact Support</a>
                            <a className="hover:text-slate-600 transition" href="#">Privacy & Security</a>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold text-gray-800 mb-5">
                            Join the ProfileExchange newsletter
                        </h2>
                        <div className="text-sm space-y-6 max-w-sm">
                            <p>
                                Product updates, marketplace tips, and the latest announcements —
                                delivered straight to your inbox.
                            </p>
                            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">
                                <input
                                    className="focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2"
                                    type="email"
                                    placeholder="Enter your email address"
                                />
                                <button className="bg-indigo-600 px-4 py-2 text-white rounded">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="py-4 text-center border-t mt-6 border-slate-200">
                    Copyright {new Date().getFullYear()} © ProfileExchange. All rights reserved.
                </p>
            </footer>
        </>
    );
};
