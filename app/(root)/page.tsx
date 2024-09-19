import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName:'Aditya'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext = "Access and manage your account and transctions efficently"
                />
            
            <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1265.65}
            />
            </header>


            TRANSACTION
        </div>
      
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[]}

      />
    </section>
  )
}

export default Home