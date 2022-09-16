export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src="img/catanacomics.svg" />
            <div class="texto">
                <strong>{props.nome_usuario}</strong>
                <span>
                    {props.nome}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}