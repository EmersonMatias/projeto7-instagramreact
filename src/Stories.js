export default function Stories() {
    return (
        <div class="stories">

            <Story/>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story() {

    const Obj_Story = [
        { imagem: "img/9gag.svg", usuario: "9gag" },
        { imagem: "img/meowed.svg", usuario: "meowed" },
        { imagem: "img/barked.svg", usuario: "barked" },
        { imagem: "img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { imagem: "img/wawawicomics.svg", usuario: "wawawicomics" },
        { imagem: "img/respondeai.svg", usuario: "respondeai" },
        { imagem: "img/filomoderna.svg", usuario: "filomoderna" },
        { imagem: "img/memeriagourmet.svg", usuario: "memeriagourmet"}
    ]


    return (
        Obj_Story.map((Obj) => (
            <div class="story">
                <div class="imagem">
                    <img src={Obj.imagem} />
                </div>
                <div class="usuario">
                    {Obj.usuario}
                </div>
            </div>
        ))


    )
}