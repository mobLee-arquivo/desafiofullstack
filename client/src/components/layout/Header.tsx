import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

// import { Container } from './styles';

const Header: React.FC = () => (
  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        StackOverflow Search
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
