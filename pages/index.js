import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import { Button, Grid, TextField } from "@material-ui/core";

const App = () => {
  const [inputString, setInputString] = useState("")
  const [isCopy, setIsCopy] = useState(false)

  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <TextField
          label="カンマとスペース区切りでいれてね"
          id="users"
          fullWidth
          margin="normal"
          placeholder="a, b, c"
          onChange={(event) => setInputString(event.target.value)}
        />

      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        {SortString(inputString)}<br />
        <Button variant="outlined" onClick={() => {
          navigator.clipboard.writeText(SortString(inputString)).then(function() {
            setIsCopy(true);
          }, function() {
            alert("failed");
          });
        }}> { isCopy ? "Copied" : "Copy!" } </Button>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    </>
  );
};

const SortString = (str) => {
  console.log(str);
  const splitted = str.replaceAll(' ', '').split(',');
  return splitted.sort(function (a, b) {
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    return (a > b) ?  1 :
           (b > a) ? -1 : 0;
    }).join(', ');
}

export default App;