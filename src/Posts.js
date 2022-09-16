export default function Posts() {
    return (
        <div class="posts">
           <Post/>
        </div>
    )
}

function Post() {
    const Obj_Post = [
        { usuario: "meowed", img_usuario: "img/meowed.svg", conteudo: "img/gato-telefone.svg", img_curtidas: "img/respondeai.svg", curtida: "respondeai", n_curtidas: "101.523 " },
        { usuario: "barked", img_usuario: "img/barked.svg", conteudo: "img/dog.svg", img_curtidas: "img/adorable_animals.svg", curtida: "adorable_animals", n_curtidas: "99.159" }
    ]

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
                    <img src={Obj.conteudo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={Obj.img_curtidas} />
                        <div class="texto">
                            Curtido por <strong>{Obj.curtida}</strong> e <strong>outras {Obj.n_curtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}