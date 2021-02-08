import React from 'react'
import '../../styles/Header.css'
import GDriveLogo from '../../media/google-drive-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from "@material-ui/core/TextField"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';


const index = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive" />
                <span>ClouDoc</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <TextField type="text" placeholder='Search in ClouDoc' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
               
            </div>
        </div>
    )
}

export default index
