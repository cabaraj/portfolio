class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">

                <a class="navbar-brand" style="font-family: Arial, Helvetica, sans-serif;" href="index.html"><b style="color: rgb(38, 195, 38);">Carlos Barajas</b></a>

                <button
                    class="navbar-toggler"
                    type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"    
                >
                    <span class="navbar-toggler-icon"></span>
                </button>                    
            
                <!--To Show in Toggler Menu-->
                <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <div></div>
                        <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body" id="offcanvasBody">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" id="nav-sub" href="index.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="nav-sub" href="projects.html">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="nav-sub" href="certificates.html">Certificates</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <!--Space between nav and body content-->
        <div style="margin-top: 75px;"></div>
        `
  }
}

customElements.define('my-navbar', NavBar);