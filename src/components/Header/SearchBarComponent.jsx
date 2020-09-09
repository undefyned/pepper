import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';


export default function SearchAppBar() {

  return (
      <AppBar position="fixed" color="inherit" style={{boxShadow: 'none', zIndex: '99998'}}>
        <Toolbar variant="dense">
            <InputBase
              placeholder="Search…"
              onKeyUp={searchFn}
              id="searchHere"
              inputProps={{ 'aria-label': 'search' }}
              autoFocus
              autoComplete="off"
              className="searchAutoFocus"
              style={{width: 'calc(100% - 42px)'}}
            />
        </Toolbar>
      </AppBar>
  );
}

function searchFn() {
  var input = document.getElementById("searchHere");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('searchContent');

  for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
          nodes[i].style.display = "block";
      } else {
          nodes[i].style.display = "none";
      }
  }
}

