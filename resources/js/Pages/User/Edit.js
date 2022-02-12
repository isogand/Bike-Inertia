import React from "react";
import {Inertia} from "@inertiajs/inertia";
import {InertiaLink, usePage, useForm, Link} from "@inertiajs/inertia-react";
import TextInput from "@/Shared/TextInput";
import DeleteButton from "@/Shared/DeleteButton";
import LoadingButton from "@/Shared/LoadingButton";
import SelectInput from "@/Shared/SelectInput";

const Edit = () => {
    const {data: user} = usePage().props.user;

    const {data, setData, post} = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone,
        photo: user.photo,
        password: user.password,
        address: user.address,
        country: user.country,
        zip_code: user.zip_code,

        _method: "PUT",
    });
    // console.log(user);
    function handleSubmit(e) {
        e.preventDefault();
        post(route("user.update", user.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("user.destroy", user.id));
        }
    }

    function restore() {
        if (confirm("Are you sure you want to restore this user?")) {
            Inertia.put(route("user.restore", user.id));
        }
    }

    return (
        <>
            <div className="p-9">
                <div className="flex justify-start max-w-lg mb-8 ">
                    <div className="text-3xl font-bold">
                        <Link
                            href={route("dashboard")}
                            style={{textColor: "blue"}}
                            className="text-indigo-500 hover:text-indigo-700"
                        >
                            Users
                        </Link>
                        <span className="mx-2 font-medium text-indigo-500 ">
                            /
                        </span>
                        <div className="text-indigo-400">{user.name}</div>
                    </div>
                    {user.photo && (
                        <img
                            className="block w-8 h-8 ml-4 rounded-full"
                            src={`/images/${user.photo}`}
                        />
                    )}
                </div>
                <div className="p-9 ">
                    <div className="max-w-3xl overflow-hidden bg-gray-50 shadow-lg rounded border border-info">
                        <form onSubmit={handleSubmit}>
                            <div
                                className="flex flex-wrap p-8 -mb-8 -mr-6"
                                // style={{backgroundColor: "red"}}
                            >
                                <TextInput
                                    style={{borderRadius: "10px"}}
                                    type="text"
                                    name="name"
                                    className="w-full pb-8 pr-6 lg:w-1/2 "
                                    value={data.name}
                                    label="Name"
                                    placeholder="name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                <TextInput
                                    style={{borderRadius: "10px"}}
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    type="password"
                                    label="Password"
                                    name="password"
                                    placeholder="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <TextInput
                                    style={{borderRadius: "10px"}}
                                    type="text"
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    value={data.email}
                                    name="email"
                                    label="Email"
                                    placeholder="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <TextInput
                                    style={{borderRadius: "10px"}}
                                    type="text"
                                    placeholder="address"
                                    name="address"
                                    label="Address"
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                />
                                {/*hover:transform: scale(2.2)*/}
                                <TextInput
                                    style={{borderRadius: "10px"}}
                                    type="text"
                                    placeholder="phone"
                                    name="phone"
                                    label="Phone"
                                    className="w-full pb-8 pr-6 lg:w-1/2 "
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                                <TextInput
                                    style={{borderRadius: "10px"}}
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    type="number"
                                    name="zip_code"
                                    label="Zip Code"
                                    placeholder="Zip Code"
                                    value={data.zip_code}
                                    onChange={(e) =>
                                        setData("zip_code", e.target.value)
                                    }
                                />
                                <SelectInput
                                    style={{borderRadius: "10px"}}
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="country"
                                    name="country"
                                    value={data.country}
                                    onChange={(e) =>
                                        setData("country", e.target.value)
                                    }
                                >
                                    <option value="1">USA</option>
                                    <option value="2">PRC</option>
                                    <option value="3">BEL</option>
                                    <option value="4">BRA</option>
                                    <option value="5">CAN</option>
                                    <option value="6">CHN</option>
                                </SelectInput>

                                <input
                                    style={{
                                        flex: "0 0 200px",
                                        marginLeft: "15px",
                                    }}
                                    type="file"
                                    name="photo"
                                    // accept="images/*"
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    // value={data.photo}
                                    onChange={(e) =>
                                        setData("photo", e.target.files[0])
                                    }
                                />
                            </div>
                            <div className="flex items-center px-8 py-4 bg-gray-200 border-t border-gray-200">
                                {/*{!organization.deleted_at && (*/}
                                <DeleteButton onDelete={destroy}>
                                    <div
                                        style={{
                                            backgroundColor: "#f8c0c0",
                                            width: "80%",
                                            borderColor: "#1234",
                                            borderRadius: "0.75rem",
                                        }}
                                        type="submit"
                                    >
                                        Delete User
                                    </div>
                                </DeleteButton>
                                {/*)}*/}
                                <LoadingButton
                                    type="submit"
                                    className="ml-auto btn-indigo"
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#c6c3fd",
                                            width: "80%",
                                            borderColor: "#1234",
                                            borderRadius: "0.75rem",
                                        }}
                                        type="submit"
                                    >
                                        Update User
                                    </div>
                                </LoadingButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Edit;
