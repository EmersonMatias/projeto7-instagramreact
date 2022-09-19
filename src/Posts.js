import React from "react"

function Post(props) {
    const [like, setLike] = React.useState(true)
    const [bookmark , setBookmark] = React.useState(true)
    
    function likes(){
       setLike(!like)
    }

    function save(){
        setBookmark(!bookmark)
    }


    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.img_usuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudo} onClick={likes}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like === true ? "heart-outline" : "heart" } class={like === true ? "" : "red"}  onClick={likes}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmark === true ? "bookmark-outline" : "bookmark"} onClick={save}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.img_curtidas} />
                    <div class="texto">
                        Curtido por <strong>{props.curtida}</strong> e <strong>outras {like === true ? props.n_curtidas : props.n_curtidas+1} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default function Posts() {

    const Obj_Post = [
        { usuario: "meowed", img_usuario: "img/meowed.svg", conteudo: "img/gato-telefone.svg", img_curtidas: "img/respondeai.svg", curtida: "respondeai", n_curtidas: 101523 },
        { usuario: "barked", img_usuario: "img/barked.svg", conteudo: "img/dog.svg", img_curtidas: "img/adorable_animals.svg", curtida: "adorable_animals", n_curtidas: 99159 }
    ]

    return (
        <div class="posts">
            {Obj_Post.map((obj) => (
                <Post
                    usuario={obj.usuario}
                    img_usuario={obj.img_usuario}
                    conteudo={obj.conteudo}
                    img_curtidas={obj.img_curtidas}
                    curtida={obj.curtida}
                    n_curtidas={obj.n_curtidas}
                />
            ))}
        </div>
    )
}
