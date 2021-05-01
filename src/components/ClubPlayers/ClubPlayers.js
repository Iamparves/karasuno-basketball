import React, { useEffect, useState } from 'react';
import './ClubPlayers.css';
import playerData from '../../playerData/players.json';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from '../Player/Player';
import Team from '../Team/Team';


const ClubPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    useEffect(() => {
        setPlayers(playerData)
    }, [])

    const handlePlayerSelection = player => setSelectedPlayers([...selectedPlayers, player]);

    return (
        <main>
            <section className="team">
                <Container>
                    <Team selectedPlayers={selectedPlayers} />
                </Container>
            </section>
            <section className="players">
                <Container>
                    <Row noGutters={true}>
                        {
                            players.map(player => {
                                return (
                                    <Col sm={6} lg={4} xl={3} className="player" key={player.id}>
                                        <Player player={player} handlePlayerSelection={handlePlayerSelection} key={player.id} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default ClubPlayers;