function PopupWithForm ({title, name, isOpen, onClose, children}) {
    return (
        <article className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}  >
            <div className={`popup__container popup__container_type_${name}`}>
                <button className={`popup__close-button popup__close-button_type_${name}`} type="button" aria-label="Закрыть" onClick={onClose}></button>
                <h3 className="popup__title">{title}</h3>
                <form className={`form form_type_${name}`} name={`${name}`} noValidate>
                    {children}
                    <button className="form__button" type="submit">Да</button>
                </form>
            </div>
        </article>
    );
}
//name у формы не слвпадает
export default PopupWithForm;