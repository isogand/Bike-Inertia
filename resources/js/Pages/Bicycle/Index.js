import React from 'react';
import {usePage ,InertiaLink} from '@inertiajs/inertia-react';


const Index = () => {
    const { bicycle } = usePage().props;
    console.log(bicycle);
    return (
        <div className=" pt-8 bg-gray-100 position-relative">
            <h2 className="pl-8 text-3xl font-bold position-absolute">List Bicycle</h2>

            <div>
                <InertiaLink
                    style={{fontSize:'10px'}}
                    className="btn-indigo focus:outline-none mx-9 position-relative"
                    href={route("dashboard")}
                >
                    <button style={{fontSize:'5px'}} className="position-absolute top-0 start-100 translate-middle">
                        <h1><span style={{color:"black"}}> BACK TO STORE</span></h1>
                    </button>

                </InertiaLink>
            </div>

            <div>
                <InertiaLink
                    style={{fontSize:'20px'}}
                    className="btn-indigo focus:outline-none mx-9 position-relative"
                    href={route('bicycle.create')}
                >
                    <button style={{textShadow:'2px 2px gray,0 0 10px gray',fontSize:'10px'}} className="position-absolute top-0 start-100 translate-middle">
                        <h1><span> + Create</span> <span className="hidden md:inline"> Bicycle </span></h1>
                    </button>

                </InertiaLink>
            </div>

            <div style={{borderRadius:'70px 70px 0 0',marginTop:'50px'}} className="overflow-x-auto bg-white rounded shadow-2xl p-14 border">
                <table className="w-full whitespace-nowrap pt-9 ">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">price</th>
                        <th className="px-6 pt-5 pb-4">Name</th>
                        <th className="px-6 pt-5 pb-4">Description</th>
                        <th className="px-6 pt-5 pb-4">photo_leftWheel</th>
                        <th className="px-6 pt-5 pb-4">photo_rightWheel</th>
                        <th className="px-6 pt-5 pb-4">photo_chair</th>
                        <th className="px-6 pt-5 pb-4">photo_body</th>
                        <th className="px-6 pt-5 pb-4">photo_saddle</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bicycle.map(({ id, price,name,description, photo_leftWheel , photo_rightWheel , photo_chair , photo_body ,photo_saddle}) => (
                        <tr
                            key={id}
                            className="hover:bg-gray-100 focus-within:bg-gray-100 "
                        >
                            <td className="border-t">
                                <InertiaLink
                                    tabIndex="-1"
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                >
                                    {price}
                                </InertiaLink>
                            </td>
                            <td className="border-t">
                                <InertiaLink
                                    tabIndex="-1"
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                >
                                    {name}
                                </InertiaLink>
                            </td>
                            <td className="border-t">
                                <InertiaLink
                                    tabIndex="-1"
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                >
                                    {description}
                                </InertiaLink>
                            </td>

                            <td className="border-t">
                                <InertiaLink
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                >
                                    {photo_leftWheel && (

                                        <img
                                            src={`/images/${photo_leftWheel}`}

                                            className="block w-5 h-5 mr-2 -my-2 rounded-full"
                                        />
                                    )}
                                </InertiaLink>
                            </td>
                            <td className="border-t">
                                <InertiaLink
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                >
                                    {photo_rightWheel && (
                                        <img
                                            src={`/images/${photo_rightWheel}`}
                                            className="block w-5 h-5 mr-2 -my-2 rounded-full"
                                        />
                                    )}
                                </InertiaLink>
                            </td>
                            <td className="border-t">
                                <InertiaLink
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                >
                                    {photo_chair && (
                                        <img
                                            src={`/images/${photo_chair}`}
                                            className="block w-5 h-5 mr-2 -my-2 rounded-full"
                                        />
                                    )}
                                </InertiaLink>
                            </td>
                            <td className="border-t">
                                <InertiaLink
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                >
                                    {photo_body && (
                                        <img
                                            src={`/images/${photo_body}`}
                                            className="block w-5 h-5 mr-2 -my-2 rounded-full"
                                        />
                                    )}
                                </InertiaLink>
                            </td>
                            <td className="border-t">
                                <InertiaLink
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                >
                                    {photo_saddle && (
                                        <img
                                            src={`/images/${photo_saddle}`}
                                            className="block w-5 h-5 mr-2 -my-2 rounded-full"
                                        />
                                    )}
                                </InertiaLink>
                            </td>
                            <td className="w-px border-t">
                                <InertiaLink
                                    tabIndex="-1"
                                    href={route('bicycle.edit', id)}
                                    className="flex items-center px-4 focus:outline-none"
                                >
                                    >
                                </InertiaLink>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default Index;
