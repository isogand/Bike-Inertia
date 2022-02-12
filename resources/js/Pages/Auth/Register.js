import React, {useEffect} from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import {Head, Link, useForm} from "@inertiajs/inertia-react";
import "./Register.css";

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <div className="disc">
                <div className="ram p-10">
                    <div className="text">Register</div>
                    <form onSubmit={submit}>
                        <div>
                            <Label
                                forInput="name"
                                value="Name"
                                className="text-left "
                            />

                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-0.5 block w-full "
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Label
                                forInput="email"
                                value="Email"
                                className="text-left"
                            />

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-0.5 block w-full "
                                autoComplete="username"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Label
                                forInput="password"
                                value="Password"
                                className="text-left"
                            />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-0.5 block w-full "
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Label
                                forInput="password_confirmation"
                                value="Confirm Password"
                                className="text-left"
                            />

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-0.5 block w-full "
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route("login")}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Already registered?
                            </Link>

                            <Button
                                className="ml-4 bg-purple-500 "
                                processing={processing}
                            >
                                Register
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="rar animate-pulse"></div>
            </div>
        </>
    );
}
