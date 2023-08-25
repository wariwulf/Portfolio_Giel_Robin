import React, { useState } from 'react';
import axios from 'axios';
import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../customHooks';
import styles from './login.scss';
import { API_ROUTES } from '../constants';
import { storeInLocalStorage } from '../api/api';

function SignIn({ setUser }) {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    navigate('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ error: false, message: '' });
  const signIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'post',
        url: API_ROUTES.SIGN_IN,
        data: {
          email,
          password,
        },
      });
      if (!response?.data?.token) {
        setNotification({ error: true, message: 'Une erreur est survenue' });
        console.log('Something went wrong during signing in: ', response);
      } else {
        storeInLocalStorage(response.data.token, response.data.userId);
        setUser(response.data);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      setNotification({ error: true, message: err.message });
      console.log('Some error occured during signing in: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const errorClass = notification.error ? styles.Error : null;

  return (
    <div className={`${styles.SignIn} container`}>
      <div className={`${styles.Notification} ${errorClass}`}>
        {notification.message.length > 0 && <p>{notification.message}</p>}
      </div>
      <div className='avertisement'>
        <h2>Connexion</h2>
        <p>Cadre réservé à l'administrateur du site!<br/>Merci de vous rediriger vers l'acceuil.</p>
      </div>
      <div className='form'>
        <label htmlFor="email">
          <p>Adresse email</p>
          <input
            className=""
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <p>Mot de passe</p>
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className={styles.Submit}>
          <button
            type="submit"
            className="
            flex justify-center
            p-2 rounded-md w-1/2 self-center
            bg-gray-800  text-white hover:bg-gray-800"
            onClick={signIn}
          >
            {isLoading ? <div className="" /> : null}
            <span>
              Se connecter
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SignIn;

