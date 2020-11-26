import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import { Container, Card } from 'semantic-ui-react'
import { DB } from '../file/History.json'

function Home() {
  return (
    <div>
      <Container onDragStart={event => event.preventDefault()}>
        <h1>2-1 알리미</h1>
        <Card.Group itemsPerRow={2} stackable centered>
          {
            Object.keys(DB).map(id => (
              <Link to={{
                pathname: `/view/${id}`
              }} key={id}>
                <Card className='MonthCard'>
                  <Card.Content className='IdCard'>{id}</Card.Content>
                </Card>
              </Link>
            ))
          }
        </Card.Group>
      </Container>
    </div>
  );
}

export default Home;
