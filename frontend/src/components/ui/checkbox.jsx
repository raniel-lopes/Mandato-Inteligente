// src/components/ui/checkbox.jsx
import React from 'react';

export function Checkbox({ id, label, checked, onChange }) {
    return (
        <div className="flex items-center space-x-2">
            <input type="checkbox" id={id} checked={checked} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

