import React from 'react';
import { TextField } from '@material-ui/core'

export default function Input(props) {
  const {name,label,value,error=null,onChange, ...other} = props
  return (
    // 把EmployeeForm.js的這一段剪下來加工
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange = {onChange}
      {...other}
      {...(error && {error:true, helperText:error})}
    />
  );
}
