import React from "react"
import { FormControl } from "@mui/material"

export const FormContainer = ({children}) => {
   return (
   <FormControl
   style={{
       marginTop: "15px",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
   }}
   >
       {children}
   </FormControl>
   );
}