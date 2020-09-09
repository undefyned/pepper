import React, { useContext } from 'react';
import { CustomThemeContext } from '../../themes/CustomThemeProvider';
import Switch from '@material-ui/core/Switch';

function ThemeSwitch() {
  function refreshPage() { 
    window.location.reload(false);
  }
  
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
      document.querySelector('meta[name="theme-color"]').setAttribute("content", '#000000')
    } else {
      setTheme('light')
      document.querySelector('meta[name="theme-color"]').setAttribute("content", '#FFFFFF')
    }
  }

  return (
    <Switch type="checkbox" checked={isDark} onChange={handleThemeChange} onClick={refreshPage} color="primary" />
  )
}

export default ThemeSwitch;