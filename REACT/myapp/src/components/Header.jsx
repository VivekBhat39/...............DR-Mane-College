import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to={'/'} class="navbar-brand">
                        <img style={{ width: "100px" }} src="https://igaptechnologies.com/assets/images/logo.png" alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={'/about'} class="nav-link" aria-current="page">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/style'} class="nav-link">Style</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/gallery'} class="nav-link">Gallery</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/contact'} class="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Header;