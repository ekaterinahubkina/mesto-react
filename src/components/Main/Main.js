import api from '../../utils/api';
import React from 'react';
import Card from '../Card/Card';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main (props) {

    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        const isLiked = card.likes.some(like => like._id === currentUser._id);

        (!isLiked) ?
        api.putLike(card)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        }) :
        api.deleteLike(card)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        })
    }

    function handleCardDelete(card) {
        const isOwn = card.owner._id === currentUser._id;

        isOwn && api.deleteMyCard(card)
            .then((res) => {
                console.log(res);
                setCards((state) => state.filter((c) => c._id !== card._id))
            })
    }

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getCards()
            .then(res => {
                console.log(res);
                setCards(res);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__main-info">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" onClick={props.onEditAvatar}/>
                        <div className="profile__avatar-hover"></div>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <p className="profile__occupation">{currentUser.about}</p>
                        <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards" aria-label="Карточки мест">
                {cards.map((item) => {
                    return (
                        <Card card={item} {...item} key={item._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>                
                    )
                }
                )}
            </section>
        </main>
    );

}

export default Main;