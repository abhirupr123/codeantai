import React from 'react'
import image from '../repoassets/database.svg'
import './repos.css'

const Repos = ({repo, type, language, size, update}) => {
  return (
    <div className="frame">
        <div className="framecontent">
            <div className="size">
                <div className="name">{repo}</div>
                <div className="badge">
                    <div className="badgetext">{type}</div>
                </div>
            </div>
            <div className="repotype">
                <div className="size">
                    <div className="lang">{language}</div>
                    <div className="ellipse"></div>
                </div>
                <div className="size">
                    <img src={image}/>
                    <div className="lang">{size}</div>
                </div>
                <div className="size">
                    <div className="lang">Updated {update} ago</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Repos