class AppBar extends HTMLElement{
    constructor() {
        super();
        this._attachShadow = this.attachShadow({mode:"closed"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this._attachShadow.innerHTML = `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
             }
             
            host:{
                display: block;
                align-items: center;
                text-align: left;
                padding: 5px;
                font-weight: bolder;
               
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
                position: sticky;
                top: 0;
                z-index: 1;
            }

            h1{
                background-color: rgb(247, 247, 247);
                letter-spacing: 15px;
                padding: 10px;
                color: rgb(34, 34, 34);
                text-shadow: -4px 0 0 rgba(0,0,0,0.1);
                position: sticky;
                top: 0;
                font-family: 'Quicksand', sans-serif;
            }
            
        </style>
        <h1>BAKUIND</h1>
        `;
    }
}

customElements.define("app-bar", AppBar);