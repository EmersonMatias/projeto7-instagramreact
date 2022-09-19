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
        { imagem: "img/bad.vibes.memes.svg", nome: "bad.vibes.memes", segue: "Segue você"},
        { imagem: "img/chibirdart.svg", nome: "chibirdart", segue: "Segue você" },
        { imagem: "img/razoesparaacreditar.svg", nome: "razoesparaacreditar", segue: "Novo do Instagram" },
        { imagem: "img/adorable_animals.svg", nome: "adorable_animals", segue: "Segue você"},
        { imagem: "img/smallcutecats.svg", nome: "smallcutecats", segue: "Segue você"}
    ]

    return (
        Obj_Sugestao.map((Obj) => (
            <div class="sugestao">
                <div class="usuario">
                    <img src={Obj.imagem} />
                    <div class="texto">
                        <div class="nome">{Obj.nome}</div>
                        <div class="razao">{Obj.segue}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        ))


    )
}