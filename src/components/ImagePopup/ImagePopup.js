function ImagePopup () {
    return (
        <article className="popup popup_type_picture">
            <div className="popup__container popup__container_type_picture">
                <button className="popup__close-button popup__close-button_type_pic" type="button" aria-label="Закрыть"></button>
                <figure className="popup__figure">
                    <img className='popup__image' alt="место"/>
                    <figcaption className="popup__figcaption"></figcaption>
                </figure>
            </div>
        </article>
    );
}

export default ImagePopup;