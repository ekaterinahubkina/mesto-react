import avatar from '../../images/Avatar.png';

function Main () {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__main-info">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={avatar} alt="Аватар" onClick={handleEditAvatarClick}/>
                        <div className="profile__avatar-hover"></div>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">Жак-ив Кусто</h1>
                        <p className="profile__occupation">Исследователь океана</p>
                        <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={handleEditProfileClick}></button>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="cards" aria-label="Карточки мест">

            </section>
            <article class="popup popup_type_edit">
                <div class="popup__container">
                    <button class="popup__close-button popup__close-button_type_edit" type="button" aria-label="Закрыть"></button>
                    <h3 class="popup__title">Редактировать профиль</h3>
                    <form class="form form_type_edit" name="edit-profile" novalidate>
                        <input class="form__input form__input_edit form__input_type_name" type="text" name="name" id="name-input" required minlength="2" maxlength="40"/>
                        <span class="form__error form__error_type_edit name-input-error"></span>
                        <input class="form__input form__input_edit form__input_type_occupation" type="text" name="occupation" id="occupation-input" required minlength="2" maxlength="200"/>
                        <span class="form__error form__error_type_edit occupation-input-error"></span>
                        <button class="form__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </article>
            <article class="popup popup_type_avatar">
                <div class="popup__container popup__container_type_avatar">
                    <button class="popup__close-button popup__close-button_type_avatar" type="button" aria-label="Закрыть"></button>
                    <h3 class="popup__title">Обновить автар</h3>
                    <form class="form form_type_avatar" name="add-avatar" novalidate>
                        <input class="form__input form__input_add form__input_type_link" type="url" placeholder="Ссылка на аватар" name="link" id="avatar-link-input" required/>
                        <span class="form__error form__error_type_avatar avatar-link-input-error"></span>
                        <button class="form__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </article>
            <article class="popup popup_type_add">
                <div class="popup__container">
                    <button class="popup__close-button popup__close-button_type_add" type="button" aria-label="Закрыть"></button>
                    <h3 class="popup__title">Новое место</h3>
                    <form class="form form_type_add" name="add-card" novalidate>
                        <input class="form__input form__input_add form__input_type_title" type="text" placeholder="Название" name="name" id="title-input" required minlength="2" maxlength="30"/>
                        <span class="form__error form__error_type_add title-input-error"></span>
                        <input class="form__input form__input_add form__input_type_link" type="url" placeholder="Ссылка на картинку" name="link" id="link-input" required/>
                        <span class="form__error form__error_type_add link-input-error"></span>
                        <button class="form__button" type="submit">Создать</button>
                    </form>
                </div>
            </article>
        </main>
    );

    function handleEditAvatarClick () {
        const editAvatarButton = document.querySelector('.profile__avatar');
        const popupEditAvatar = document.querySelector('.popup_type_avatar');
        editAvatarButton.addEventListener('click', () => {
            popupEditAvatar.classList.add('popup_opened');
        })
    }

    function handleEditProfileClick () {
        const editButton = document.querySelector('.profile__edit-button');
        const popupEdit = document.querySelector('.popup_type_edit');
        editButton.addEventListener('click', () => {
            popupEdit.classList.add('popup_opened');
        })
    }

    function handleAddPlaceClick () {
        const addPlaceButton = document.querySelector('.profile__add-button');
        const popupEditAvatar = document.querySelector('.popup_type_add');
        addPlaceButton.addEventListener('click', () => {
            popupEditAvatar.classList.add('popup_opened');
        })
    }
}

export default Main;