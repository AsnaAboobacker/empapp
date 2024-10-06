import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography>Employe</Typography>&nbsp;
                  <Link to='/add'>
                      <Button variant="contained">ADD</Button>
                  </Link>
                  &nbsp;
                  <Link to='/view'>
                      <Button variant="contained">View</Button>
                  </Link>
                  &nbsp;
                  
              </Toolbar>
          </AppBar><br />
    </div>
  )
}

export default Navbar
