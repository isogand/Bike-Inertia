import React, {useEffect, useState} from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import {useSelector} from "react-redux";
import DropdownCart from "@/Components/DropdownCart";

const Authenticated = ({auth, header, children, ...props}) => {
    const cartQuantity = useSelector((state) => state.cart.items || []).length;
    const cart = useSelector((state) => state.cart.items) || [];
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className="min-h-screen bg-gray-100 ">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 ">
                        <div className="flex justify-between h-16 ">
                            <div className="flex " style={{width: "90%"}}>
                                <div className="flex-shrink-0 flex items-center">
                                    <div className="-pr-10">
                                        <img
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                            }}
                                            src={"/image/oup 1.svg"}
                                            alt=" Logo"
                                        />
                                    </div>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Product
                                    </NavLink>
                                </div>
                                {auth.user.role_id === 1 ? (
                                    <div className="hidden space-x-8 sm:-my-px sm:ml-16 sm:flex">
                                        <NavLink
                                            href={route("bicycle")}
                                            active={route().current("bicycle")}
                                        >
                                            Bicycle
                                        </NavLink>
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex justify-content-end sm:items-center sm:ml-6 mt-5">
                                <Dropdown>
                                    <Dropdown.Trigger2>
                                        <span className="inline-flex rounded-md">
                                            <button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="pink"
                                                    width="25"
                                                    height="25"
                                                    fill="currentColor"
                                                    className="bi bi-cart4 "
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                </svg>
                                                {cartQuantity > 0 ? (
                                                    <div className="absolute -top-2 ml-4 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                                                        {cartQuantity}
                                                    </div>
                                                ) : null}
                                            </button>
                                        </span>
                                    </Dropdown.Trigger2>
                                    <Dropdown.Linke
                                        href={route("cart")}
                                        method="get"
                                        as="button"
                                        bicycles={props.bicycles}
                                    >
                                        <Dropdown.Content>
                                            {cart.map((item) => {
                                                return (
                                                    <DropdownCart
                                                        key={item.product_id}
                                                        item={{
                                                            id: item.product_id,
                                                            name: item.name,
                                                            quantity:
                                                                item.quantity,
                                                            total: item.totalPrice,
                                                            price: item.price,
                                                        }}
                                                    />
                                                );
                                            })}
                                            <div
                                                className="text-center mt-9 shadow-inner hover:bg-gray-100"
                                                style={{
                                                    border: "1px solid #bebebe",
                                                    padding: "10px",
                                                    borderRadius: "15px",
                                                    margin: "1.5rem",
                                                }}
                                            >
                                                Check Out
                                            </div>
                                        </Dropdown.Content>
                                    </Dropdown.Linke>
                                </Dropdown>
                            </div>

                            <div
                                className="hidden sm:flex sm:items-center sm:ml-6"
                                style={{width: "15%"}}
                            >
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {auth.user.name}
                                                </button>
                                                <button>
                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                                {auth.user.photo && (
                                                    <img
                                                        className="block w-8 h-8 ml-5 rounded-full hover:w-25 h-25 rounded-full"
                                                        src={`/images/${auth.user.photo}`}
                                                    />
                                                )}
                                            </span>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            {auth.user.role_id === 1 ? (
                                                <>
                                                    <Dropdown.Link
                                                        href={route(
                                                            "user",
                                                            auth.user.id
                                                        )}
                                                        method="get"
                                                        as="button"
                                                    >
                                                        Manager User
                                                    </Dropdown.Link>

                                                    <Dropdown.Link
                                                        // href={route("registers")}
                                                        href={route(
                                                            "user.edit",
                                                            auth.user.id
                                                        )}
                                                        method="get"
                                                        as="button"
                                                    >
                                                        My profile
                                                    </Dropdown.Link>

                                                    <Dropdown.Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        Log Out
                                                    </Dropdown.Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Dropdown.Link
                                                        // href={route("registers")}
                                                        href={route(
                                                            "user.edit",
                                                            auth.user.id
                                                        )}
                                                        method="get"
                                                        as="button"
                                                    >
                                                        My profile
                                                    </Dropdown.Link>

                                                    <Dropdown.Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        Log Out
                                                    </Dropdown.Link>
                                                </>
                                            )}
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {auth.user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {auth.user.email}
                                </div>
                            </div>
                            {auth.user.photo && (
                                <img
                                    className="block w-8 h-8 ml-5 rounded-full hover:w-25 h-25 rounded-full"
                                    src={`/images/${auth.user.photo}`}
                                />
                            )}
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink
                                    href={route("user", auth.user.id)}
                                    as="button"
                                >
                                    Manager User
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route("user.edit", auth.user.id)}
                                    as="button"
                                >
                                    My profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("user.edit", auth.user.id)}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <div className="bg-white shadow m-0">
                        <div className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </div>
                )}

                <main>{children}</main>
            </div>
        </>
    );
};
export default Authenticated;
