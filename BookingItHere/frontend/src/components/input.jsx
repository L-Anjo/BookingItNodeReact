import React from "react";

/**
 *
 * @author João Ponte
 * @param label
 * @param type
 * @param id
 * @param className
 * @param name
 * @param placeholder
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
export const Input = ({label, type, id, className = 'form-control', name, placeholder, onChange}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input id={id} type={type} className={className} name={name} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}
