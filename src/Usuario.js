import React from "react"

export default function Usuario(props) {
    
    const [nome, setNome] = React.useState(props.nome)
    const [img, setImg] = React.useState(props.img)
    const [nome_usuario, setNome_usuario] = React.useState(props.nome_usuario)


    function alteranome(){
        let newName = prompt("Escolha seu novo nome:")
        let newNameusu = prompt("Escolha seu novo nome de usuário:")
        if (newName !== null){
            setNome(newName)
        }
        if (newNameusu !== null){
            setNome_usuario(newNameusu)
        }
    }

    function alteraimg(){
        let newImage = prompt("Insira o link da sua nova imagem:")
        if (newImage !== null){
            setImg(newImage)
        }
        
    }
    
    return (
        <div class="usuario">
            <img onClick={alteraimg} src={img}/>
            <div class="texto">
                <strong>{nome_usuario}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={alteranome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}