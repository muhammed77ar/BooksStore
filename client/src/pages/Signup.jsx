import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Signup() {
    return (
        <div className="h-screen overflow-hidden bg-neutral-900">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center w-full">
                <div className="mt-12 w-full max-w-lg sm:mt-10">
                    <div className="-mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
                    <div className="mx-5 border bg-black text-white dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                        <div className="flex flex-col p-6">
                            <h3 className="text-xl font-semibold leading-6 tracking-tighter">Sign up</h3>
                            <p className="mt-1.5 text-sm font-medium text-white/50">Welcome, enter your credentials to sign up.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <form>
                                <div>
                                    <div>
                                        <div className="group rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Username</label>
                                            </div>
                                            <input type="text" name="username" autoComplete="off" className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div>
                                        <div className="group rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Email</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="text" name="email" className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div>
                                        <div className="group rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="password" name="password" className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div>
                                        <div className="group rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Confirm Password</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="password" name="confirmPassword" className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" name="remember" className="outline-none focus:outline focus:outline-sky-300" />
                                        <span className="text-xs">Remember me</span>
                                    </label>
                                    <a className="text-sm font-medium text-foreground underline" href="/forgot-password">Forgot password?</a>
                                </div>
                                <div className="mt-4 flex items-center justify-end gap-x-2">
                                    <Link className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200" to="/login">Log in</Link>
                                    <button className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2" type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
