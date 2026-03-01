import { Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-extrabold text-white mb-4">Let's Connect</h1>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl">
                Open to discussing analytics leadership roles, AI-driven revenue systems, or collaboration on data problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
                <div className="space-y-12">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-800 rounded-lg">
                            <Mail className="text-slate-400" size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                            <a
                                href="mailto:bhushankamble2393@gmail.com"
                                className="text-lg font-semibold text-white hover:text-slate-400 transition-colors"
                            >
                                bhushankamble2393@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-800 rounded-lg">
                            <Linkedin className="text-slate-400" size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">LinkedIn</div>
                            <a
                                href="https://linkedin.com/in/bhushan-kamble/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-white hover:text-slate-400 transition-colors"
                            >
                                linkedin.com/in/bhushan-kamble
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-800 rounded-lg">
                            <MapPin className="text-slate-400" size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</div>
                            <div className="text-lg font-semibold text-white">Mumbai, India</div>
                        </div>
                    </div>
                </div>

                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-700 transition-all text-slate-100 placeholder:text-slate-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-700 transition-all text-slate-100 placeholder:text-slate-600"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                        <textarea
                            rows={4}
                            placeholder="What would you like to discuss?"
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-700 transition-all resize-none text-slate-100 placeholder:text-slate-600"
                        ></textarea>
                    </div>
                    <a
                        href="mailto:bhushankamble2393@gmail.com?subject=Let's connect"
                        className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-md hover:bg-slate-200 transition-all"
                    >
                        Send Message
                    </a>
                </form>
            </div>
        </div>
    );
}
