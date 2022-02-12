import React from "react";

export default ({label, name, className, children, errors = [], ...props}) => {
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
            <select
                id={name}
                name={name}
                {...props}
                className={`form-select ${errors.length ? "error" : ""}`}
            >
                {children}
            </select>
            {errors && <div className="form-error">{errors}</div>}
        </div>
    );
};
