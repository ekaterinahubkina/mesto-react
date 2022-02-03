import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import api from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  //Создайте стейт currentUser в корневом компоненте
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        console.log(res);
        setCurrentUser(res);
      })
  }, [])



  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups () {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick (card) {
    setSelectedCard(card)
  }


  return (
    //Создайте объект контекста и используйте провайдер
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm title={'Редактировать профиль'} name={'edit'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
        <input className="form__input form__input_edit form__input_type_name" type="text" name="name" id="name-input" required minLength="2" maxLength="40" />
        <span className="form__error form__error_type_edit name-input-error"></span>
        <input className="form__input form__input_edit form__input_type_occupation" type="text" name="occupation" id="occupation-input" required minLength="2" maxLength="200" />
        <span className="form__error form__error_type_edit occupation-input-error"></span>
      </PopupWithForm>
      <PopupWithForm title={'Обновить автар'} name={'avatar'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
        <input className="form__input form__input_add form__input_type_link" type="url" placeholder="Ссылка на аватар" name="link" id="avatar-link-input" required/>
        <span className="form__error form__error_type_avatar avatar-link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm title={'Новое место'} name={'add'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
        <input className="form__input form__input_add form__input_type_title" type="text" placeholder="Название" name="name" id="title-input" required minLength="2" maxLength="30"/>
        <span className="form__error form__error_type_add title-input-error"></span>
        <input className="form__input form__input_add form__input_type_link" type="url" placeholder="Ссылка на картинку" name="link" id="link-input" required/>
        <span className="form__error form__error_type_add link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm title={'Вы уверены?'} name={'confirm'} buttonText={'Да'}>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
    </CurrentUserContext.Provider>
    

  );
}

export default App;
