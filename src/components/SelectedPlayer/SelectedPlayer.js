import React from 'react';

const SelectedPlayer = (props) => {
    const { id, name, position, salary } = props.player;
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{position}</td>
            <td>${salary}</td>
        </tr>
    );
};

export default SelectedPlayer;