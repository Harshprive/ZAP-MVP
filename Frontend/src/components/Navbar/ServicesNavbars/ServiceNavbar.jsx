import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Select, MenuItem, TextField, Button, Box, Drawer, InputAdornment } from '@mui/material';
import NotificationDrawer from "../../services/SubServices/NavElement/Notification/Notification"; // Import Drawer Component
import { Bell, MessageSquare, ClipboardList, Clock, Menu } from 'lucide-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Margin } from '@mui/icons-material';
import Logo from '../../../assets/sub logo-1.png';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasService, setHasService] = useState(true);
  const [location, setLocation] = useState('Nagpur');
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const [openNotificationDrawer, setOpenNotificationDrawer] = useState(false);

  const toggleDrawer = (isOpen) => {
    setOpenNotificationDrawer(isOpen);
  };


  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
          <AppBar position="sticky" color="default" sx={{ boxShadow: 2, paddingY: 1 }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent:{xs:'space-between',md:'space-evenly'}, flexWrap: 'wrap', gap: {md:2} }}>
        {/* Logo Section */}
        {isMobile ?(
          <Link to='/'>
            <img src={Logo} className="h-10 w-10 " alt="Logo" />
          </Link>
        ):(
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none',sm:'50px',fontSize:'24px', fontWeight: 'bold', color:'#7e22ce', flexShrink: 0 ,}}>
          ZAP-Services
        </Typography>
        )}

        {/* Search Bar Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'grey.100', border: 1, borderColor: 'grey.300', borderRadius: 10, px: 2, py: 1, flexGrow: {md:1}, maxWidth: { xs:'69%', sm: '50%', md: '45%' }, minWidth: '100px' }}>
        <Select
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  displayEmpty
  variant="standard"
  sx={{ 
    minWidth:{md:120,xs:80} , 
    color: 'gray', 
    '& .MuiSelect-icon': { color: 'gray' } 
  }}
  startAdornment={
    <InputAdornment position="start">
      <LocationOnIcon color="disabled" />
    </InputAdornment>
  }
  disableUnderline
>
  <MenuItem value="Nagpur">Nagpur</MenuItem>
  <MenuItem value="Pune">Pune</MenuItem>
  <MenuItem value="Mumbai">Mumbai</MenuItem>
</Select>
          <TextField
            variant="standard"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            InputProps={{ disableUnderline: true, sx: { px: 2, fontSize: 14, color: 'gray' } }}
          />
          {isMobile ?(
            <Button variant="contained" color="black" onClick={handleSearch} sx={{  borderRadius: "50%", // Makes it circular
              fontWeight: "bold",
              boxShadow:'none',
               // Equal width & height for a circle
              
              minWidth: 0, // Removes extra padding
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 0,  }}>
            <SearchIcon/>
          </Button>
          ):(<Button variant="contained" color="primary" onClick={handleSearch} sx={{ borderRadius: 10, fontWeight: 'bold', px: 3,background:'#7e22ce' }}>
            Search
          </Button>)}
        </Box>

        {/* Menu Button for Mobile View */}
        <IconButton onClick={() => setDrawerOpen(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
          <Menu size={24} />
        </IconButton>

        {/* Navigation Icons for Large Screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems:'flex-end', gap: 2 }}>
          {hasService && (
            <IconButton sx={{display:'flex',flexDirection:'column', color: 'inherit','&:hover': {color: 'purple', backgroundColor: 'transparent',}}} component={Link} to="/services/own-services" color="inherit">
              <ClipboardList size={24} />
              <Typography sx={{fontSize:'15px'}} variant="h6" color="initial">Own Service</Typography>
            </IconButton>
          )}
          <IconButton sx={{display:'flex',flexDirection:'column', color: 'inherit', 
    '&:hover': {color: 'purple', backgroundColor: 'transparent', }}} component={Link} to="/services/tracker" color="inherit">
            <Clock size={24} />
            <Typography sx={{fontSize:'15px'}} variant="h6" color="initial">In Process</Typography>
          </IconButton>
          <IconButton sx={{display:'flex',flexDirection:'column', color: 'inherit', // Default color (no hover effect)
    '&:hover': {color: 'purple',backgroundColor: 'transparent',}}} component={Link} to="/services/Message-and-takeway" color="inherit">
            <MessageSquare size={24} />
            <Typography sx={{fontSize:'15px'}} variant="h6" color="initial">Messages</Typography>
          </IconButton>
          <IconButton sx={{display:'flex',flexDirection:'column', color: 'inherit', // Default color (no hover effect)
    '&:hover': {
      color: 'purple', // Change to desired color on hover
      backgroundColor: 'transparent', // Prevents default hover background
    }}} component={Link} to="/services/Orders" color="inherit">
            <ClipboardList size={24} />
            <Typography sx={{fontSize:'15px'}} variant="h6" color="initial">Order</Typography>
          </IconButton>
          <IconButton sx={{display:'flex',flexDirection:'column', color: 'inherit','&:hover': {color: 'purple',backgroundColor: 'transparent',}}} color="inherit" onClick={() => toggleDrawer(true)}>
            <Bell size={24} />
            <Typography sx={{fontSize:'15px'}} variant="h6" color="initial">Notification</Typography>
          </IconButton>
        </Box>

        {/* Navigation Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ height:400,width: 250, p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Search Bar Section */}
        {/*<Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'grey.100', border: 1, borderColor: 'grey.300', borderRadius: 10, px: 2, py: 1, flexGrow: 1, maxWidth: { xs: '100%', sm: '60%', md: '45%' }, minWidth: '100px' }}>
        <Select
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  displayEmpty
  variant="standard"
  sx={{ 
    minWidth: 80, 
    color: 'gray', 
    '& .MuiSelect-icon': { color: 'gray' } 
  }}
  startAdornment={
    <InputAdornment position="start">
      <LocationOnIcon color="disabled" />
    </InputAdornment>
  }
  disableUnderline
>
  <MenuItem value="Nagpur">Nagpur</MenuItem>
  <MenuItem value="Pune">Pune</MenuItem>
  <MenuItem value="Mumbai">Mumbai</MenuItem>
</Select>
          <TextField
            variant="standard"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            InputProps={{ disableUnderline: true, sx: { px: 2, fontSize: 14, color: 'gray' } }}
          />
          <Button variant="contained" color="primary" onClick={handleSearch} sx={{borderRadius: "50%",height:'40px', width:'10px',fontWeight: 'bold',background:'#7e22ce' }}>
            <SearchIcon/>
          </Button>
        </Box>*/}
           <Box sx={{height:400,display:'flex',flexDirection:'column',alignItems:'flex-start'
           }}>
           {hasService && (
              <IconButton sx={{fontSize:'16px'}} component={Link} to="/services/own-services" color="inherit" onClick={() => setDrawerOpen(false)}>
                <ClipboardList size={20} /> Own Service
              </IconButton>
            )}
            <IconButton sx={{fontSize:'16px',display:'flex',justifyContent:'space-between',borderRadius:'none'}} component={Link} to="/services/tracker" color="inherit" onClick={() => setDrawerOpen(false)}>
              <Clock size={20}  /> In Process
            </IconButton>
            <IconButton sx={{fontSize:'16px'}} component={Link} to="/services/Message-and-takeway" color="inherit" onClick={() => setDrawerOpen(false)}>
              <MessageSquare size={20} /> Messages
            </IconButton>
            <IconButton sx={{fontSize:'16px'}} component={Link} to="/services/Orders" color="inherit" onClick={() => setDrawerOpen(false)}>
              <ClipboardList size={20} /> Orders
            </IconButton>
            <IconButton sx={{fontSize:'16px'}} color="inherit" onClick={() => toggleDrawer(true)}>
              <Bell size={20} /> Notifications
            </IconButton>
           </Box>
          </Box>
        </Drawer>
        
        
      </Toolbar>
      {/* Notification Drawer (Imported) */}
      
    </AppBar>

    <NotificationDrawer open={openNotificationDrawer} toggleDrawer={toggleDrawer} />

    </>
  );
};

export default Navbar;
