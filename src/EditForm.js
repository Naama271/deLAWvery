import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";

export default function EditForm({ saveUpdateOrder, orderData, sentData }) {
  const date = orderData[0].date;
  const [value, setValue] = useState(date);
  const firstName = orderData[0].firstName;
  const lastName = orderData[0].lastName;
  const order = orderData[0].orderNum;

  return (
    <div>
      <form onSubmit={saveUpdateOrder} className="form">
        <h2>הזמנה {order} </h2>
        <InputLabel shrink>שם פרטי</InputLabel>
        <TextField name="firstName" defaultValue={firstName} />
        <InputLabel shrink>שם משפחה</InputLabel>
        <TextField name="lastName" defaultValue={lastName} />
        <InputLabel shrink>תאריך</InputLabel>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            name="date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue.toString().slice(4, 16));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant="contained" type="submit" onClick={sentData(value)} className="submitBTN" style={{width: '219px', marginTop: '40px'}}>
          עדכון
        </Button>
      </form>
    </div>
  );
}
