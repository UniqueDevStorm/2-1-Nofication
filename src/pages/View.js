import React from 'react';
import './View.css'
import { Card, Button, Container } from 'semantic-ui-react'
import Clipbaord from 'react-clipboard.js'
import { DB } from '../file/History.json'

function Commands({ match: { params: { id } } }) {
  return (
    <div className='View'>
      <Container>
        {DB[id] ? (
          <>
            <h1>{id}</h1>
            <Clipbaord
              data-clipboard-text={Object.entries(DB[id]).map(([id, { header, description }]) => `${header} : ${description}`).join('\n')}
              component={Button}
              onSuccess={() => alert('복사 완료')}
              onError={() => alert('오류가 발생하였습니다. 개발자에게 문의해주세요.')}
              style={{
                marginBottom: 20
              }}
              className='blue'
            >답 복사하기</Clipbaord>
            <Card.Group items={DB[id]} itemsPerRow={4} stackable />
          </>
        ) : <h1>{id} 자료가 없습니다.</h1>}
      </Container>
    </div >
  );
}

export default Commands;