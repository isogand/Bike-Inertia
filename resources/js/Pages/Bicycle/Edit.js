import React from "react";
import {Inertia} from "@inertiajs/inertia";
import {InertiaLink, usePage, useForm, Link} from "@inertiajs/inertia-react";
import DeleteButton from "@/Shared/DeleteButton";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";

const Edit = () => {
    const {bicycle} = usePage().props;
    console.log(bicycle);
    const {data, setData, post, processing} = useForm({
        price: bicycle.data.price,
        name: bicycle.data.name,
        photo_leftWheel: bicycle.data.photo_leftWheel || "",
        photo_rightWheel: bicycle.data.photo_rightWheel || "",
        photo_chair: bicycle.data.photo_chair || "",
        photo_body: bicycle.data.photo_body || "",
        photo_saddle: bicycle.data.photo_saddle || "",

        _method: "PUT",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("bicycle.update", bicycle.data.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this Bicycle?")) {
            Inertia.delete(route("bicycle.destroy", bicycle.data.id));
        }
    }

    function restore() {
        if (confirm("Are you sure you want to restore this Bicycle?")) {
            Inertia.put(route("bicycle.restore", bicycle.data.id));
        }
    }

    return (
        <div className="p-9">
            <div className="flex justify-start max-w-lg mb-8 p-5">
                <div className="text-3xl font-bold">Edit Bicycle</div>
            </div>
            {/*{bicycle.deleted_at && (*/}
            {/*    <TrashedMessage onRestore={restore}>*/}
            {/*        This organization has been deleted.*/}
            {/*    </TrashedMessage>*/}
            {/*)}*/}
            <div className="max-w-3xl overflow-hidden bg-gray-50 shadow-lg rounded border border-info">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            style={{borderRadius: "10px"}}
                            label="Price"
                            className="form-control"
                            name="price"
                            type="number"
                            value={data.price}
                            onChange={(e) => {
                                setData("price", e.target.value);
                            }}
                        />
                        <TextInput
                            style={{borderRadius: "10px"}}
                            label="Name"
                            className="form-control"
                            name="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => {
                                setData("name", e.target.value);
                            }}
                        />
                        <input
                            className="form-control p-5 "
                            type="file"
                            name="photo_leftWheel"
                            placeholder="leftWheel"
                            onChange={(e) => {
                                setData("photo_leftWheel", e.target.files[0]);
                            }}
                        />
                        <input
                            className="form-control p-5"
                            type="file"
                            placeholder="rightWheel"
                            name="photo_rightWheel"
                            onChange={(e) =>
                                setData("photo_rightWheel", e.target.files[0])
                            }
                            // onChange={photo_rightWheel => setData('photo_rightWheel', photo_rightWheel)}
                        />
                        <input
                            className="form-control p-5"
                            type="file"
                            placeholder="chair"
                            name="photo_chair"
                            onChange={(e) =>
                                setData("photo_chair", e.target.files[0])
                            }
                            // onChange={photo_chair => setData('photo_chair', photo_chair)}
                        />
                        <input
                            className="form-control p-5"
                            type="file"
                            placeholder="body"
                            name="photo_body"
                            onChange={(e) =>
                                setData("photo_body", e.target.files[0])
                            }
                            // onChange={photo_body => setData('photo_body', photo_body)}
                        />
                        <input
                            className="form-control p-5"
                            type="file"
                            placeholder="saddle"
                            name="photo_saddle"
                            onChange={(e) =>
                                setData("photo_saddle", e.target.files[0])
                            }
                            // onChange={photo_saddle => setData('photo_saddle', photo)}
                        />
                    </div>
                    <div className="flex items-center px-8 py-4 bg-gray-200 border-t border-gray-200 mt-9">
                        {/*{!organization.deleted_at && (*/}
                        <DeleteButton onDelete={destroy}>
                            <div
                                style={{
                                    backgroundColor: "#fad7d7",
                                    width: "80%",
                                    borderColor: "#1234",
                                    borderRadius: "0.75rem",
                                }}
                                type="submit"
                            >
                                Delete Organization
                            </div>
                        </DeleteButton>
                        {/*)}*/}
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="ml-auto btn-indigo"
                        >
                            <div
                                style={{
                                    backgroundColor: "#dcdafd",
                                    width: "80%",
                                    borderColor: "#1234",
                                    borderRadius: "0.75rem",
                                }}
                                type="submit"
                            >
                                Update Organization
                            </div>
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Edit.layout = page => <Layout children={page} />;

export default Edit;
