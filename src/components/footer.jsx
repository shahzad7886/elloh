import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <div className="wrapper">
                    <div>
                        <div className="logo d-flex align-items-center me-auto me-lg-0">
                            <img height="40" src="assets/img/logo.png" alt="" />
                            <h1 className="sitename">TetraWave</h1>
                            <span>.</span>
                        </div>
                        <ul>
                            <li>© 2024 TetraWave.</li>
                            <li>All rights reserved.</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
