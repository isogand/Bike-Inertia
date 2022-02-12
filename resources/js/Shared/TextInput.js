import React from "react";

export default ({label, name, className, errors = [], ...props}) => {
    return (
        <div className={className}>
            {label && (
                <label
                    style={{flex: "0 0 200px", margin: "20px"}}
                    className="form-label"
                    htmlFor={name}
                >
                    {label}:
                </label>
            )}
            <input
                id={name}
                name={name}
                {...props}
                className={`form-input  ${errors.length ? "error" : ""}`}
            />
            {errors && <div className="form-error">{errors}</div>}
        </div>
    );
};
