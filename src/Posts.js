import React from "react"

export default function Posts() {
    return (
        <div class="posts">
            <Post />
        </div>
    )
}





function Post() {
    const [save1, setSave1] = React.useState(true)
    const [save2, setSave2] = React.useState(true)

    const [like1, setLike1] =  React.useState(true)
    const [like2, setLike2] =  React.useState(true)

    const [red1, setRed1] = React.useState(true)
    const [red2, setRed2] = React.useState(true)
    

    const Obj_Post = [
        { usuario: "meowed", img_usuario: "img/meowed.svg", conteudo: "img/gato-telefone.svg", img_curtidas: "img/respondeai.svg", curtida: "respondeai", n_curtidas: 101523, salvar: save1, like: like1, red: red1},
        { usuario: "barked", img_usuario: "img/barked.svg", conteudo: "img/dog.svg", img_curtidas: "img/adorable_animals.svg", curtida: "adorable_animals", n_curtidas: 99159, salvar: save2, like: like2, red: red2}
    ]
    
    const [salvar, setSalvar] = React.useState(true)
    let salvo = true


    

    function Salvamento(Obj){
        if (Obj.usuario === "meowed"){
            setSave1(!save1)
        } else if (Obj.usuario === "barked"){
            setSave2(!save2)
        }
        
    }

    function Like(Obj){
        if (Obj.usuario === "meowed"){
            setLike1(!like1)
            setRed1(!red1)
        } else if (Obj.usuario === "barked"){
            setLike2(!like2)
            setRed2(!red2)
        }
    }
       
    return (
        Obj_Post.map((Obj) => (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={Obj.img_usuario} />
                        {Obj.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={Obj.conteudo} onClick={() => {Like(Obj)}} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon onClick={() => {Like(Obj)}} name={Obj.like === true ? "heart-outline" : "heart"} class={Obj.red === true ? "" : "red"}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon  onClick={() => {Salvamento(Obj)}} name={(Obj.salvar === true ? "bookmark-outline": "bookmark")}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={Obj.img_curtidas} />
                        <div class="texto">
                            Curtido por <strong>{Obj.curtida}</strong> e <strong>outras {Obj.like === true ? String(Obj.n_curtidas) : String(Obj.n_curtidas+1)} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}