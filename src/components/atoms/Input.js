import React from "react"
import { TextField } from "@mui/material"

export const Input = ({
    type = "text",
    label,
    error,
    helperText,
    name,
    onChange,
    value,
}) => {
    return (
        <TextField
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            label={label}
            error={error}
            helperText={helperText}
            sx={{
                width: 500,
                marginTop: 5,
                "& fieldset": {
                    borderRadius: `20px`,
                },
            }}
        />
    );
};