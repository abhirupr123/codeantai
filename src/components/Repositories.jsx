import React, { useState } from 'react'
import './repositories.css'
import sidelogo from '../assets/repologo.svg'
import home from '../assets/home.svg'
import code from '../assets/code.svg'
import cloud from '../assets/cloud.svg'
import howto from '../assets/howto.svg'
import settings from '../assets/settings.svg'
import support from '../assets/support.svg'
import logout from '../assets/logout.svg'
import dropdown from '../assets/dropdown.svg'
import refresh from '../assets/refresh.svg'
import add from '../assets/add.svg'
import search from '../assets/search.svg'
import Repos from './Repos'
import bars from '../assets/bars.svg'
import close from '../assets/close.svg'
import drop from '../assets/dropdownmobile.svg'

const Repositories = () => {

    const [selected, selecttab] = useState(0)
    const[drawer, drawerToggle] = useState(false)
    const navItems = [
        { id: 1, navtext: "Repositories", icon: home },
        { id: 2, navtext: "AI Code Review", icon: code },
        { id: 3, navtext: "Cloud Security", icon: cloud },
        { id: 4, navtext: "How to Use", icon: howto },
        { id: 5, navtext: "Settings", icon: settings },
      ];
    const repoItems = [
        { id: 1, repo: "design-system", type:"Public", language:"React", size:"7320 KB", update: "1 day" },
        { id: 2, repo: "codeant-ci-app", type:"Private", language:"Javascript", size:"5871 KB", update: "2 days" },
        { id: 3, repo: "analytics-dashboard", type:"Private", language:"Python", size:"4521 KB", update: "5 days" },
        { id: 4, repo: "mobile-app", type:"Public", language:"Swift", size:"3096 KB", update: "3 days" },
        { id: 5, repo: "e-commerce-platform", type:"Private", language:"Java", size:"6210 KB", update: "6 days" },
        { id: 6, repo: "blog-website", type:"Public", language:"HTML/CSS", size:"1876 KB", update: "4 days" },
        { id: 7, repo: "social-network", type:"Private", language:"PHP", size:"5432 KB", update: "7 days" },

    ]
  return (
    <div className="repositories">
        <div className="sidebar">
            <div className="navigation">
                <div className="sideheader">
                    <div className="sidelogo">
                        <img src={sidelogo}/>
                    </div>
                    <div className="dropdown">
                        <img src={dropdown}/>
                    </div>
                    <div className="drawerbutton">
                        {(drawer===false) && (
                            <img src={bars} onClick={()=>(drawerToggle(true))}/>
                        )}
                        {(drawer===true) && (
                            <img src={close} onClick={()=>(drawerToggle(false))}/>                            
                        )}
                    </div>
                </div>
                <div className="sidenavigation">
                    {navItems.map((items, index)=>(
                        <div key={items.id} className="navitem"
                        onClick={()=>{selecttab(index)}}>
                            {selected===index? (
                                <div className="navcontent">
                                    <img src={items.icon}/>
                                    <div className="navtext">{items.navtext}</div>
                                </div>
                            ):(
                                <div className="navnot">
                                    <img src={items.icon}/>
                                    <div className="navnotselected">{items.navtext}</div>
                                </div>
                            )}
                        </div>    
                    ))}
                </div>
                <div className="footer">
                    <div className="footerbase">
                        <img src={support}/>
                        <div className="footertext">Support</div>
                    </div>
                    <div className="footerbase">
                        <img src={logout}/>
                        <div className="footertext">Logout</div>
                    </div>      
                </div>
            </div>
            {drawer && (
                    <div className={`drawer ${drawer ? "open" : ""}`}>
                        <img src={drop}/>
                        <div className="sidenavmobile">
                            {navItems.map((items, index)=>(
                                <div key={items.id} className="navitem"
                                onClick={()=>{selecttab(index)}}>
                                    {selected===index? (
                                        <div className="navcontent">
                                            <img src={items.icon}/>
                                            <div className="navtext">{items.navtext}</div>
                                        </div>
                                    ):(
                                        <div className="navnot">
                                            <img src={items.icon}/>
                                            <div className="navnotselected">{items.navtext}</div>
                                        </div>
                                    )}
                                </div>    
                            ))}
                            <div className="navitem">
                                <div className="navnot">
                                    <img src={support}/>
                                    <div className="navnotselected">Support</div>
                                </div>
                            </div>
                            <div className="navitem">
                                <div className="navnot">
                                    <img src={logout}/>
                                    <div className="navnotselected">Logout</div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    )}
        </div>
        <div className="mainframe">
            <div className="maincontent">
                <div className="mainheader">
                    <div className="framebuttons">
                        <div className="repo">
                            <div className="text1">Repositories</div>
                            <div className="text2">33 total repositories</div>
                        </div>
                        <div className="buttonframe">
                            <button className="refresh">
                                <img src={refresh}/>
                                <div className="refreshtext">Refresh All</div>
                            </button>
                            <button className="add">
                                <img src={add}/>
                                <div className="addtext">Add Repository</div>
                            </button>
                        </div>
                    </div>
                    <div className="search">
                        <img src={search}/>
                        <input type='text' className="refreshtext" placeholder="Search Repositories" style={{border:"none", outline:"none"}}/>                        
                    </div>
                </div>
                <div className="content">
                    {repoItems.map((items)=>(
                        <Repos key={items.id} repo = {items.repo} type={items.type} 
                        language = {items.language} 
                        size={items.size} update={items.update}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Repositories