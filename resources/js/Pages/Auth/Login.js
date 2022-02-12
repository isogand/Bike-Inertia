import React, {useEffect} from 'react';
import Checkbox from '@/Components/Checkbox';
import Input from '@/Components/Input';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import "./Login.css";



export default function Login({ status, canResetPassword }) {

    const { data, setData, post, processing, errors, reset } = useForm({
            email: 'j@gmail.com',
            password: '123456789',
            remember: 'true',
        });

        useEffect(() => {
            return () => {
                reset('password');
            };
        }, []);

        const onHandleChange = (event) => {
            setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        };

        const submit = (e) => {
            e.preventDefault();

            post(route('login'));
        };



    return (
        <>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            {/*<ValidationErrors errors={errors} />*/}
            <div className="rer"></div>
            <div  className="container">

                <img src={("/image/rocket.png")}  alt="rocket" className="rocket"/>
                <div className="text">
                    <h1>LOGIN</h1>
                </div>
                <form onSubmit={submit} className="form">
                    <div className="animated-input">
                        {/*<Label forInput="email" value="Email" />*/}

                        <Input
                            type="text"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="animated-input">
                        {/*<Label forInput="password" value="Password" />*/}

                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="check">
                        <label className="flex items-center">
                            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>

                    <p className="forget">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}

                            >
                                Forgot your password?
                            </Link>
                        )}

                        <button className="btn" processing={processing} >
                            Log in
                        </button>
                    </p>
                </form>
                <p className="account"><a href={route('register')}>Create Account ?</a></p>
            </div>


        </>
    );

}







