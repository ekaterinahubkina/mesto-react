function Card ({card, onCardClick}) {
    function handleClick () {
        onCardClick(card);
    }

    return (
        <article className="card" onClick={handleClick}>
            <img className="card__image" alt={card.name} src={card.link}/>
            <h2 className="card__title">{card.name}</h2>
            <div className="card__likes-wrapper">
                <button className="card__like-button" type="button" aria-label="Нравится"></button>
                <div className="card__likes-number">{card.likes.length}</div>
            </div>
            <button className="card__delete-button" type="button" aria-label="Удалить"></button>
        </article>
    );
}

export default Card;