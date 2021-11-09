import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

export default function Form({ addUser, sentData }) {
  const [value, setValue] = useState(null);

  return (
    <form onSubmit={addUser} className="form">
      <h2>הזמנה חדשה</h2>
      <InputLabel shrink>שם פרטי</InputLabel>
      <TextField name="firstName" required />
      <InputLabel shrink>שם משפחה</InputLabel>
      <TextField name="lastName" required />
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
      <Button type="submit" variant="contained" onClick={sentData(value)} style={{width: '219px', marginTop: '40px'} }>
        הוספה
      </Button>
    </form>
  );
}
