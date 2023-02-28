import React from 'react'
import { NavLink } from 'react-router-dom';
import { dash_icon, user_icon, history_icon, docs_icon, wallet_icon, setting_icon } from "../Assets/Images";


export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        
        <div className="sidelinks">
          <ul>
            <NavLink to="/dashboard" className="nav-item" title="Dashboard">
                <img src={dash_icon} alt="dashboard" className="default" />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="/innerpage" className="nav-item" title="Users">
                <img src={user_icon} alt="users" className="default" />
                <span>Users</span>
            </NavLink>
            <NavLink to="/history" className="nav-item" title="History">
                <img src={history_icon} alt="history" className="default" />
                <span>History</span>
            </NavLink>
            <NavLink to="/docs" className="nav-item" title="Docs">
                <img src={docs_icon} alt="Docs" className="default" />
                <span>Docs</span>
            </NavLink>
            <NavLink to="/wallet" className="nav-item" title="Wallet">
                <img src={wallet_icon} alt="wallet" className="default" />
                <span>Wallet</span>
            </NavLink>
            <NavLink to="/setting" className="nav-item" title="Setting">
                <img src={setting_icon} alt="setting" className="default" />
                <span>Setting</span>
            </NavLink>
          </ul>
        </div>


      </div>
    </>
  )
}
