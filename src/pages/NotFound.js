import React from 'react'

function NotFound({ location: { pathname } }) {
    return (
        <>
            <h1>404</h1>
            <h1>웹을 돌아다니는 고야이가 {pathname} 라는 경로를 찾지 못했습니다</h1>
        </>
    )
}

export default NotFound