/* eslint-disable */
import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import PropTypes from 'prop-types';
import GuessForm from "../GuessForm/GuessForm";
import GuessResult from '../GuessResult/GuessResult';
import { Icon, notification } from 'antd';
import dotProp from "dot-prop";
import { RaccoonIcon } from '../../assets/icons/raccoon/RaccoonIcon';


import { config } from "../../etc/config.js";

import styles from './GameScreen.module.css';
import {useHistory} from "react-router-dom";

const { audDApiToken } = config;

const openNotification = placement => {
    notification.info({
        message: `Ohh ... Sorry darning, I not found such song :(((`,
        icon: <Icon component={RaccoonIcon} />,
        description:
            'Come on, try again )))',
        placement,
    });
};

function GameScreen(props) {
    const { setWinner, setScore, score } = props;
    const history = useHistory();

  const [lyrics, setLyrics] = useState('');
  const [userName, setUserName] = useState('');
  const [isGuessFormOpen, setIsGuessFormOpen ] = useState(true);
  const [previewLink, setPreviewLink ] = useState('');
  const [guessedData, setGuessedData] = useState({artist: '', title: ''});
    const [round, setRound] = useState(0);

    function onSetRound() {
        setRound(round + 1);
    }

    function onSetScore(newScore) {
        setScore(newScore);
    }

    function checkScore () {
        if(score.user === 5 ){
            setWinner(userName);
            history.push('/Akinator_Int20h/winner')
        } else if(score.akinator === 5){
            setWinner('Akinator');
            history.push('/Akinator_Int20h/winner')
        }
    }

  useEffect(() => {
      const name = localStorage.getItem('gameUserName');
      setUserName(name)
  }, []);

    useEffect( () => {
        checkScore()
    }, [isGuessFormOpen]);

  const onLyricsChange = useCallback( (e) => {
      const text = e.target.value;
      setLyrics(text)
  }, []);

  const onSubmitLyrics = useCallback(async () => {
      try{
          // const data = JSON.stringify({
          //     q: lyrics,
          //     api_token: audDApiToken
          // });
          //
          // const response = await fetch('https://api.audd.io/findLyrics/?jsonp=?', {
          //     method: 'POST',
          //     body: data
          // });
          //
          // const respTest = await response.text();
          // const cutResponse = JSON.parse(respTest.slice(2, respTest.length -1)).result;


          // if(cutResponse.length === 0){
          //     openNotification('bottomRight');
          //     return;
          // }

          // const artist = dotProp.get(cutResponse, `0.artist`);
          // const title = dotProp.get(cutResponse, `0.title`);

          const artist = 'Eminem';
          const title = 'Lose yourself';

          setGuessedData({artist, title });

         // const randomIndex = getRandomIndex(0, 10);

          console.log(`https://api.deezer.com/search?q=track:"${title.toLowerCase()}" q=artist:"${artist}"`);

         const deezerData = await fetch(`https://api.deezer.com/search?q=track:"${title.toLowerCase()}" q=artist:"${artist}"`);
         const previewData = await deezerData.json();

         const preview = await dotProp.get(previewData, 'data.0.preview', '');
          setPreviewLink(preview);
          setIsGuessFormOpen(false);

      } catch (err) {
          console.error(err)
      }
  }, [lyrics]);

  return (
    <div className={styles.gameContainer}>
        {
            isGuessFormOpen
            ? (
                    <GuessForm
                        userName={userName}
                        score={score}
                        round={round}
                        onLyricsChange={onLyricsChange}
                        onSubmitLyrics={onSubmitLyrics}
                    />
                )
                : (
                    <GuessResult
                        userName={userName}
                        setIsGuessFormOpen={setIsGuessFormOpen}
                        guessedData={guessedData}
                        preview={previewLink}
                        onSetRound={onSetRound}
                        onSetScore={onSetScore}
                        score={score}
                        round={round}
                    />
                )
        }

    </div>
  );
}

export default GameScreen;
