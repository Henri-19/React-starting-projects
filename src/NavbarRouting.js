import { BrowserRouter as  Router, Route, Link, Routes} from "react-router-dom";
import About from '../src/pages/About/About';
import Services from '../src/pages/Services/Services';
import Contact from '../src/pages/Contact/Contact';
import  AppBar from "@mui/material/AppBar";
import  Toolbar from "@mui/material/Toolbar";
import  Typography from "@mui/material/Typography";
import  Button from "@mui/material/Button";

const NavbarRouting = () =>{
    return(
        <Router>
           <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" style={{marginRight: '10px'}}>
                        React Navbar
                    </Typography>
                    <Button color="inherit" component={Link} to="/about" style={{ textDecoration: 'none' }}>
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/services" style={{ textDecoration: 'none' }}>
                        Services
                    </Button>
                    <Button color="inherit" component={Link} to="/contact" style={{ textDecoration: 'none' }}>
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        <Routes>
            <Route path="/about" exact Component={About}/>
            <Route path="/services" exact Component={Services}/>
            <Route path="/contact" exact Component={Contact}/>
        </Routes>
        </Router>        
    )
}
export default NavbarRouting;