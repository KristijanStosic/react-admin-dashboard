import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Language from '@mui/icons-material/Language'
import Settings from '@mui/icons-material/Settings'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
            <Link className='logo' to='/'>Admin Dashboard</Link>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNoneIcon />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  )
}
