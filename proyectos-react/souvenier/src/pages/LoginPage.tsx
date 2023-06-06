import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey', 
    display:'flex',flexDirection:'column',maxWidth:'max-content',
    justifyContent:'space-around', minHeight:'300px'}}>
      <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Hello World"
        />
      <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="Hello World"
        />
        <Link to="/character">
          <Button variant="outlined">Ingresar</Button>
        </Link>
    </Box>
  );
};
