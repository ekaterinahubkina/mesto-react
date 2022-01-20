import api from '../../utils/api';
import React from 'react';
import Card from '../Card/Card';

function Main (props) {

    const [userAvatar, setUserAvatar] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');

    React.useEffect(() => {
        api.getUserData()
            .then(res => {
                console.log(res);
                setUserAvatar(res.avatar);
                setUserName(res.name);
                setUserDescription(res.about);        
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

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
                        <img className="profile__avatar" src={userAvatar} alt="Аватар" onClick={props.onEditAvatar}/>
                        <div className="profile__avatar-hover"></div>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <p className="profile__occupation">{userDescription}</p>
                        <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditAvatar}></button>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards" aria-label="Карточки мест">
                {cards.map((item) => {
                    return (
                        <Card card={item} {...item} key={item._id} onCardClick={props.onCardClick}/>                
                    )
                }
                )}
            </section>
        </main>
    );

    // function handleEditAvatarClick () {
    //     const editAvatarButton = document.querySelector('.profile__avatar');
    //     const popupEditAvatar = document.querySelector('.popup_type_avatar');
    //     editAvatarButton.addEventListener('click', () => {
    //         popupEditAvatar.classList.add('popup_opened');
    //     })
    // }

    // function handleEditProfileClick () {
    //     const editButton = document.querySelector('.profile__edit-button');
    //     const popupEdit = document.querySelector('.popup_type_edit');
    //     editButton.addEventListener('click', () => {
    //         popupEdit.classList.add('popup_opened');
    //     })
    // }

    // function handleAddPlaceClick () {
    //     const addPlaceButton = document.querySelector('.profile__add-button');
    //     const popupEditAvatar = document.querySelector('.popup_type_add');
    //     addPlaceButton.addEventListener('click', () => {
    //         popupEditAvatar.classList.add('popup_opened');
    //     })
    // }
}

export default Main;