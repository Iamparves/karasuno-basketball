import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './Team.css';

const Team = (props) => {
    const players = props.selectedPlayers;
    const totalSalary = players.reduce((total, player) => total + player.salary, 0)

    return (
        <div className="team__inner">
            <h2 className="team__title">Selected Players for Team - {players.length}</h2>
            <table className="team__table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map(player => <SelectedPlayer player={player} key={player.id} />)
                    }
                    <tr>
                        <td colSpan="2">Total Salary</td>
                        <td>${totalSalary}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Team;