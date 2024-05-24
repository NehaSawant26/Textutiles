import React from 'react'
import PropTypes from 'prop-types'
import  { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
             </ul>

            <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} `}>
              <input className="form-check-input" onClick={props.toggleMode2} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="option1"  onChange={e => {}}/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Green mode
              </label>

              <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                <input className="form-check-input" onClick={props.toggleMode3} type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="option2"  onChange={e => {}} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Red mode
                </label>

                <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                  <input className="form-check-input" onClick={props.toggleMode4} type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="option3"   onChange={e => {}}/>
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Violet mode
                  </label>
                </div>
              </div>
            </div>

                 <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="felxSwitchCheckDefault"> Enable Dark Mode</label>
                </div>
          </div>
        </div>
      </nav>
   </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultprop = {
  title: 'Set title here',
  aboutText: 'Text here'
}


