import React from "react";
import api from "../utils/api.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import ImagePopup from "../components/ImagePopup.js";
import EditProfilePopup from "../components/EditProfilePopup.js";
import EditAvatarPopup from "../components/EditAvatarPopup.js";
import InfoTooltip from "../components/InfoTooltip.js";
import AddPlacePopup from "../components/AddPlacePopup.js";
import { CurrentUserContext } from "./../contexts/CurrentUserContext.js";
import Register from "../components/Register.js";
import Login from "../components/Login.js";
import * as mestoAuth from "../mestoAuth.js";
import ProtectedRoute from "../components/ProtectedRoute.js";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import success from "./../images/login-yes.svg";
import fail from "./../images/login-no.svg";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isZoomPopupOpen, setIsZoomPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: "",
  });
  const [registerPopup, setRegisterPopup] = React.useState({
    message: "",
    image: "",
  });

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token){
      return;
    }
    api.setToken(token);
    setLoggedIn(true);
    tokenCheck(token);
    }, []);

  // Монтирование эффекта через Promise.all
  React.useEffect(() => {
    if (loggedIn) {
      api.setToken(localStorage.getItem('jwt'));
      history.push('/');
      Promise.all([api.getUserData(), api.getInitialCards()])
        .then(([userData, cardData]) => {
          setCurrentUser(userData);
          setCards(cardData);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [loggedIn, history]);

  // Функция регистрации
  function handleRegister(data) {
    const { email, password } = data;
    return mestoAuth
      .register(email, password)
      .then((res) => {
        if (res) {
          onRegisterPopup();
          setRegisterPopup({
            message: "Вы успешно зарегистрировались!",
            image: success,
          });
        }
        return res;
      })
      .catch(() => {
        onRegisterPopup();
        setRegisterPopup({
          message: "Что-то пошло не так! Попробуйте еще раз.",
          image: fail,
        });
      });
  }

  // Функция авторизации
  function handleLogin (data) {
    const { email, password } = data;
    return mestoAuth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          setUserData({
            email: email,
          });
          api.setToken(res.token);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Функция выхода
  function handleSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/signin");
  }

  // Функция проверки токена
  function tokenCheck(jwt) {
    mestoAuth
      .getContent(jwt)
      .then((res) => {
        if (res) {
          const userData = {
            email: res.email,
          };
          setLoggedIn(true);
          setUserData(userData);
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Функция лайк-дизлайк
  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user === currentUser._id);
    if (!isLiked) {
      api
        .putLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard.data : c));
          setCards(newCards);
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      api
        .deleteLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard.data : c));
          setCards(newCards);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // Функция удаления карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCardsArr = cards.filter((c) => c._id !== card._id);
        setCards(newCardsArr);
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Функции открытия popup форм
  function onEditProfile() {
    setIsEditProfilePopupOpen(true);
  }
  function onAddPlace() {
    setIsAddPlacePopupOpen(true);
  }
  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }
  function onRegisterPopup() {
    setIsRegisterPopupOpen(true);
  }

  // Функция открытия popup окна зума карточки
  function handleCardClick(card) {
    setIsZoomPopupOpen(true);
    setSelectedCard(card);
  }

  // Функция закрытия popup форм
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsZoomPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  // Функция апдейта данных пользователя
  function handleUpdateUser(userData) {
    api
      .patchUserData(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Функция апдейта аватарки пользователя
  function handleUpdateAvatar(userAvatar) {
    api
      .patchUserAvatar(userAvatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Функция добавления новой карточки
  function handleAddPlaceSubmit(cardData) {
    api
      .postNewCard(cardData)
      .then((newCard) => {
        setCards([newCard.data, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            handleSignOut={handleSignOut}
            onEditProfile={onEditProfile}
            onAddPlace={onAddPlace}
            onEditAvatar={onEditAvatar}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            component={Main}
            userData={userData.email}
          />
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} tokenCheck={tokenCheck} />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup
          isOpen={isZoomPopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <InfoTooltip
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          InfoTool={registerPopup}
          name="register"
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);