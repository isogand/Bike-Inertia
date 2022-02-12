import React from "react";
import {Link, Head} from "@inertiajs/inertia-react";
import "animate.css";

export default function Welcome(props) {
    return (
        <>
            <Head title="Bicycle">
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <title>Bicycle</title>
            </Head>
            <div className="fixed top-0  right-10 px-6 py-4 sm:block">
                {props.auth.user ? (
                    <Link href="/dashboard" className="text-sm text-gray-700">
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href="#wheel"
                            className="ml-4 text-sm text-gray-700 "
                        >
                            Home
                        </Link>
                        <Link
                            href={route("login")}
                            className="ml-4 text-sm text-gray-700 "
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 text-sm text-gray-700 "
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
            <body>
                <header className="p-5">
                    <div className="logo" style={{color: "#070707"}}>
                        <img
                            style={{
                                borderRadius: "20px",
                                width: "100px",
                                height: "100px",
                            }}
                            src={"/image/20.png"}
                            alt=" Logo"
                        />
                    </div>
                    <div className="hero-text">
                        {/*<span className="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ...">*/}
                        {/*  Hello<br>*/}
                        {/*  World*/}
                        {/*</span>*/}
                        <h1>
                            Welcome
                            <br />
                            to Wheel.
                        </h1>
                        <a
                            className="animate-pulse btn  btn-full js--scroll-to-plans"
                            href={route("login")}
                        >
                            Get Start
                        </a>
                        <a
                            className="btn btn-ghost js--scroll-to-start"
                            href="#"
                        >
                            Show me more
                        </a>
                    </div>
                </header>

                <section
                    className="p-5 features bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 js--features"
                    id="home"
                >
                    {" "}
                    {/* Use for sticky nav activation */}
                    <a className="svg bg-clip-padding">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            fill="currentColor"
                            className="stroke-current stroke-5 animate-bounce fill-current text-green-600 bi bi-arrow-up"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    </a>
                    <figure
                        className=" bg-gray-100 rounded-xl p-8 "
                        style={{borderRadius: "0px 40px 0px 40px"}}
                    >
                        <img
                            className="animate-pulse w-32 h-32 rounded-full mx-auto"
                            src={"/image/6.jpg"}
                            alt
                            width={384}
                            height={512}
                        />
                        <div className="pt-6 text-center space-y-4">
                            <blockquote>
                                <p className="text-lg font-semibold">
                                    “Tailwind CSS is the only framework that
                                    I've seen scale on large teams. It’s easy to
                                    customize, adapts to any design, and the
                                    build size is tiny.”
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="animate__animated animate__bounce animate__flip">
                                    <div className="text-cyan-600 text-green-400">
                                        Sogand
                                    </div>
                                </div>
                                <div className="text-gray-500">
                                    Staff Engineer, Algolia
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </section>

                <section className="meals">
                    <div className=" bg-blue-200 ">
                        <div className="grid border-3 grid-flow-col grid-rows-2 grid-cols-3 gap-4">
                            <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                                <img
                                    style={{borderRadius: "20px"}}
                                    src={"/image/2.jpg"}
                                    alt=""
                                />
                            </div>
                            <div className="transform scale-50 -rotate-4">
                                <img
                                    style={{borderRadius: "20px"}}
                                    src={"/image/4.png"}
                                    alt=""
                                />
                            </div>
                            <div className="transform scale-50 -rotate-12">
                                <img
                                    style={{borderRadius: "20px"}}
                                    src={"/image/17.jpg"}
                                    alt=""
                                />
                            </div>
                            <div className="animate-bounce p-16 transform scale-50 -hue-rotate-30">
                                <img
                                    style={{borderRadius: "50px"}}
                                    src={"/image/1.png"}
                                    alt=""
                                />
                            </div>
                            <div className="animate-pulse p-16 transform scale-50 -right-1.5 -rotate-1">
                                <img
                                    style={{borderRadius: "20px"}}
                                    src={"/image/16.jpg"}
                                    alt=""
                                />
                            </div>
                            <div className="col-start-3 transform scale-75  -hue-rotate-60 translate-x-1 -translate-y-9">
                                <img
                                    style={{borderRadius: "20px"}}
                                    src={"/image/15.jpg"}
                                    alt="Omnifood Logo"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{backgroundColor: "#C1AFFC"}} className="p-5">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16 bg-purple-500 "
                        style={{borderRadius: "4rem"}}
                    >
                        <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
                            <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
                                Beach House in Collingwood
                            </h2>
                            <h4 className="sm:text-gray-400 font-light sm:text-xl ">
                                Worried about remembering all of these class
                                names? The Tailwind CSS IntelliSense extension
                                for VS Code has you covered. Get intelligent
                                autocomplete suggestions, linting, class
                                definitions and more, all within your editor and
                                with no configuration required.
                            </h4>
                        </div>

                        <div className="col-start-1 row-start-2  px-4 sm:pb-16">
                            <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4 text-yellow-500">
                                <svg
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="text-violet-600"
                                >
                                    <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
                                </svg>
                                <div className="ml-1">
                                    <span className="text-black">4.94</span>
                                    <span className="sm:hidden md:inline">
                                        (128)
                                    </span>
                                </div>
                                <div className="text-base font-normal mx-2">
                                    ·
                                </div>
                                <div className="text-black">
                                    Collingwood, Ontario
                                </div>
                            </div>
                        </div>
                        <div className="col-start-1 row-start-3 pt-0 space-y-3 px-4">
                            <p className="flex items-center text-black text-ce font-medium">
                                <img
                                    src={"/image/6.jpg"}
                                    alt
                                    className="w-6 h-6 rounded-full mr-2 bg-gray-100"
                                />
                                Hosted by sogand
                            </p>
                            <button
                                type="button"
                                className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg text-green-400"
                            >
                                Check availability
                            </button>
                        </div>
                        <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
                            <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                                <div className="relative col-span-3 row-span-2 md:col-span-2 ml-9">
                                    <img
                                        style={{borderRadius: "20px"}}
                                        src={"/image/7.jpg"}
                                        alt
                                        className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" p-10" style={{backgroundColor: "#C1AFFC"}}>
                    <div
                        className="bg-yellow-400 p-10"
                        style={{borderRadius: "0px 35px 35px 0px"}}
                    >
                        <figure className="md:flex bg-gray-100 rounded-xl p-4 md:p-0">
                            <img
                                className="w-32 -ml-1 rounded-l-lg h-32 md:w-48 md:h-auto w-auto  md:rounded-none rounded-full mx-auto"
                                src={"/image/4.jpg"}
                                alt
                                width={384}
                                height={512}
                            />
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <blockquote>
                                    <p className="text-lg font-semibold">
                                        “CSS is the only framework that I've
                                        seen scale on large teams. It’s easy to
                                        customize, adapts to any design, and the
                                        build size is tiny.”
                                    </p>
                                </blockquote>
                                <figcaption className="font-medium">
                                    <div className="text-cyan-600">Sogand</div>
                                    <div className="text-gray-500">
                                        Staff Engineer, Algolia
                                    </div>
                                </figcaption>
                                <a>coming soon ...</a>
                            </div>
                        </figure>
                    </div>
                </section>

                <section style={{backgroundColor: "#C1AFFC"}}></section>

                {/* Footer section */}
                <footer>
                    <div className="row">
                        <div className="col span-1-of-2">
                            <div className="col span-1-of-2">
                                <ul className="footer-nav">
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Press</a>
                                    </li>
                                    <li>
                                        <a href="#">iOS App</a>
                                    </li>
                                    <li>
                                        <a href="#">Android App</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                Merriam Webster Learn a new word every day.
                                Delivered to your inbox!
                            </div>
                            <div className="search ">
                                <input
                                    style={{borderRadius: "5px"}}
                                    placeholder="Search..."
                                />
                            </div>

                            <ul className="social-icons">
                                <li>
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-facebook"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-twitter"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-instagram"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-google"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="#home" id="back-to-top" title="home" role="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="currentColor"
                            className="stroke-current stroke-5 animate-bounce   bi bi-arrow-up"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                            />
                        </svg>
                    </a>
                </footer>
            </body>
        </>
    );
}
