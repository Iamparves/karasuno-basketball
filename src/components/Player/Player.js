import React, { useState } from 'react';
import './Player.css';

const Player = (props) => {
    const { name, club, birthYear, height, position, img, salary } = props.player;
    const handlePlayerSelection = props.handlePlayerSelection;
    const [btnDisable, setBtnDisable] = useState(false);

    return (
        <div className="player__card">
            <div className="player__img--box">
                <img src={img} alt={name} className="player__img" />
            </div>
            <div className="player__info--box">
                <h2 className="player__name">{name}</h2>
                <h4 className="player__position">({position})</h4>
                <h3 className="player__club">{club}</h3>
                <table className="player__table">
                    <tbody>
                        <tr>
                            <td>Birth Year</td>
                            <td>{birthYear}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>{height} m.</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>${salary}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="player__btn--box">
                    <button className={btnDisable ? "player__btn disable" : "player__btn"} onClick={() => {
                        handlePlayerSelection(props.player);
                        setBtnDisable(true);
                    }}>{btnDisable ? "Selected" : "Select"} for team</button>
                </div>
            </div>
        </div>
    );
};

export default Player;