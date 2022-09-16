export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestao/>

          
        </div>
    )
}



function Sugestao() {

    const Obj_Sugestao = [
        { imagem: "img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
        { imagem: "img/chibirdart.svg", nome: "chibirdart" },
        { imagem: "img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
        { imagem: "img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
        { imagem: "img/smallcutecats.svg", nome: "smallcutecats" }
    ]

    return (
        Obj_Sugestao.map((Obj) => (
            <div class="sugestao">
                <div class="usuario">
                    <img src={Obj.imagem} />
                    <div class="texto">
                        <div class="nome">{Obj.nome}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        ))


    )
}