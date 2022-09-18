import React from "react"

export default function Usuario(props) {
    
    const [nome, setNome] = React.useState(props.nome)
    const [img, setImg] = React.useState(props.img)


    function alteranome(){
        setNome(prompt("Escolha seu novo nome:"))
    }

    function alteraimg(){
        setImg(prompt("Insira o link da sua nova imagem:"))
    }
    
    return (
        <div class="usuario">
            <img onClick={alteraimg} src={img}/>
            <div class="texto">
                <strong>{props.nome_usuario}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={alteranome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}