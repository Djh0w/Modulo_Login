class Login{

    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estiloscss = null;
    static callback_ok = null;
    static callback_nok = null;
    static config = {
        cor: "048",
        img: "logo_cfbcursos.png"
    };
    static endpoint="https://86ac5da5-6aea-4134-be5a-ea30522a18ba-00-3g8xzonxnhxeu.picard.replit.dev//";

    static login = (callback_ok,callback_nok,config=null)=>{
       if(config!=null){
        this.config = config
       }

       this.callback_ok = ()=>{callback_ok()}
       this.callback_nok = ()=>{callback_nok()}

       this.estiloscss =

        ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0,0,0,0.75);box-sizing: border-box;}"+
        ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;}"+            
        ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        ".logoLogin{display: flex;justify-content: center;align-items: center;width: 100%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        ".logoLogin img{width: 90%;box-sizing: inherit;}"+
        ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}"+
        ".campoLogin label{font-size: 18px;}"+
        ".campoLogin input{font-size: 18px;padding: 5px;background-color: white;border-radius: 5px;}"+
        ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}"+
        `.botoesLogin button{cursor: pointer;background-color: #${this.config.cor};color: white;border-radius: 5px;padding: 10px;width: 100px;box-sizing: inherit;}`
            
        const styleEstilo = document.createElement("style")
        styleEstilo.setAttribute("id","id_estiloLogin")
        styleEstilo.setAttribute("rel","stylesheet")
        styleEstilo.setAttribute("type","text/css")
        styleEstilo.innerHTML = this.estiloscss

        document.head.appendChild(styleEstilo)

        //fundoLogin
        const fundoLogin = document.createElement("div")
        fundoLogin.setAttribute("id","fundoLogin")
        fundoLogin.setAttribute("class","fundoLogin")
        document.body.prepend(fundoLogin)

        //baseLogin
        const baseLogin = document.createElement("div")
        baseLogin.setAttribute("id","baseLogin")
        baseLogin.setAttribute("class","baseLogin")
        fundoLogin.appendChild(baseLogin)

        //elementosLogin
        const elementosLogin = document.createElement("div")
        elementosLogin.setAttribute("id","elementosLogin")
        elementosLogin.setAttribute("class","elementosLogin")
        baseLogin.appendChild(elementosLogin)

        //campoLogin
        const campoLoginUsername = document.createElement("div")
        campoLoginUsername.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLoginUsername)

        //label
        const labelUsername = document.createElement("label")        
        labelUsername.innerHTML = "Username"     
        campoLoginUsername.appendChild(labelUsername)

        //input
        const inputUsername = document.createElement("input")
        inputUsername.setAttribute("id","f_username")        
        inputUsername.setAttribute("type","text")        
        inputUsername.setAttribute("name","f_username")        
        campoLoginUsername.appendChild(inputUsername)

        //campoLoginSenha
        const campoLoginSenha = document.createElement("div")        
        campoLoginSenha.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLoginSenha)

        //labelSenha
        const labelSenha = document.createElement("label")
        labelSenha.innerHTML = "Senha"       
        campoLoginSenha.appendChild(labelSenha)

        //inputSenha
        const inputSenha = document.createElement("input")
        inputSenha.setAttribute("id","f_senha")        
        inputSenha.setAttribute("type","password")        
        inputSenha.setAttribute("name","f_senha")        
        campoLoginSenha.appendChild(inputSenha)

        //botoesLogin
        const botoesLogin = document.createElement("div")
        botoesLogin.setAttribute("class","botoesLogin")
        elementosLogin.appendChild(botoesLogin)
        //botaoLogin
        const btn_login = document.createElement("button")
        btn_login.setAttribute("id","btn_login")
        btn_login.innerHTML = "Login"
        btn_login.addEventListener("click",(evt)=>{
            this.verificaLogin()
        })
        botoesLogin.appendChild(btn_login)
        //botaoCancelar
        const btn_cancelar = document.createElement("button")
        btn_cancelar.setAttribute("id","btn_cancelar")
        btn_cancelar.innerHTML = "Cancelar"
        btn_cancelar.addEventListener("click", (evt)=>{
            this.fechar()
        })
        botoesLogin.appendChild(btn_cancelar)

        //LogoLogin
        const logoLogin = document.createElement("div")
        logoLogin.setAttribute("id","logoLogin")
        logoLogin.setAttribute("class","logoLogin")        
        baseLogin.appendChild(logoLogin)

        const imgLogoLogin = document.createElement("img")
        imgLogoLogin.setAttribute("src",this.config.img)
        imgLogoLogin.setAttribute("title","CFBCursos")        
        logoLogin.appendChild(imgLogoLogin)

        
    //     <div id="fundoLogin" class="fundoLogin"> OK
    //     <div id="baseLogin" class="baseLogin"> OK
    //             <div id="elementosLogin" class="elementosLogin">OK
    //                 <div class="campoLogin"> ok
    //                     <label>Username</label>ok
    //                     <input type="text" name="f_username" id="f_username">ok
    //                 </div>
    //                 <div class="campoLogin">ok
    //                     <label>Senha</label>ok
    //                     <input type="password" name="f_senha" id="f_senha">ok
    //                 </div>
    //                 <div class="botoesLogin">ok
    //                     <button id="btn_login">Login</button>ok
    //                     <button id="btn_cancelar">Cancelar</button>ok
    //                 </div>
    //             </div>
    //             <div id="logoLogin" class="logoLogin">
    //                 <img src="logo_cfbcursos.png" title="CFBCursos">
    //             </div>
    //     </div>
    // </div>
        
    }

    static verificaLogin = ()=>{
        const mat = document.querySelector("#f_username").value
        const pas = document.querySelector("#f_senha").value

        const endpoint = `https://86ac5da5-6aea-4134-be5a-ea30522a18ba-00-3g8xzonxnhxeu.picard.replit.dev/?matricula=${mat}&senha=${pas}`

        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true
                this.matlogado = mat
                this.nomelogado = res.nome
                this.acessologado = res.acesso
                this.callback_ok()
                this.fechar()
            }else{
                this.logado = false
                this.matlogado = null
                this.nomelogado = null
                this.acessologado = null  
                this.callback_nok()                            
            }
        })
        
    }

    static fechar = ()=>{
        const fundoLogin = document.querySelector("#fundoLogin")
        fundoLogin.remove()
        const id_estiloLogin = document.querySelector("#id_estiloLogin")
        id_estiloLogin.remove()

    }

}
// export {Login};