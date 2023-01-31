import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import { PacmanLoader } from 'react-spinners'

function PageWrapper(props) {

  const renderContent = () => {

    if (props.isLoading) {
      return (
        <div className='flex-col App'>
          <Header user={props.user} setUser={props.setUser} />
          <MainContent>
            <PacmanLoader color="#ba55d3" />
          </MainContent>
        </div>
      )
    } else {
      return (
        <div className='flex-col App'>
          <Header user={props.user} setUser={props.setUser} />
          <MainContent>
            {props.children}
          </MainContent>
        </div>
      )
    }

  }

  return (
    renderContent()
  )
}

export default PageWrapper