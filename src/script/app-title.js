class AppTitle extends HTMLElement{

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "closed"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this._shadowRoot.innerHTML = `
            <style>
                h1{
                    margin-top: 20px;
                }
                h1, h5{
                    color: white;
                    text-align: center;  
                }
            </style>
            <h1>Aplikasi Perbaikan Kata Tidak Baku Menjadi Baku</h1>
            <h5>Masukkan teks yang akan diperbaiki pada text asli!</h5>
        `
    }
}

customElements.define("app-title", AppTitle);