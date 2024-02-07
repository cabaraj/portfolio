
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="index.html">
                Carlos Barajas
            </a>
            <nav>
                <ul>
                    <li><a href="index.html">About</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="certificates.html">Certificates</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}

customElements.define('my-header', Header);

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ``
    }
}

customElements.define('my-footer', Footer);