import React from 'react';
import { HeaderDropdown} from './HeaderDropdown';
import { HeaderNonActiveDropdown} from './HeaderNonActiveDropdown';

export function Header(props) {

    const headerOptions = ["Home", "Upload", "Compare"];

    return (
        <div>

            <header className="headerFlex">


            <nav className="navBarMenuMargin navbar navbar-expand-lg navbar-light bg-red">

                <a className="navbar-brand" href="#"></a>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../page_images/menu-outline.svg" alt="Menu icon"></img></a>    
                
                <div className="navbar-collapse" id="navbarSupportedContent">

                <HeaderDropdown props={headerOptions}/>
         
            

                <HeaderNonActiveDropdown props={headerOptions}/>
    
                </div>
            </nav>
            

            <h1 className="pageTitle text-white">
                <p>CarQueen</p>
            </h1>


            <a href="index.html" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
            <img src="page_images/Lightning_McQueen_logo.gif" alt="CarQueen Logo"></img>
            </a>

            </header>
        </div>
    )
}