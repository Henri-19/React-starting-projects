import  AppBar from "@mui/material/AppBar";
import  Toolbar from "@mui/material/Toolbar";
import  Typography from "@mui/material/Typography";
import  Button from "@mui/material/Button";

const Navbar = () => {
return(
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div">
                React Web
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
        </Toolbar>
    </AppBar>
)
}
export default Navbar;