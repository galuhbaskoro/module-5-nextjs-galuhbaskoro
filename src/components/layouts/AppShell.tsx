import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface AppShellProps {
  children: React.ReactNode
}

function AppShell(props: AppShellProps) {
  const {children} = props;
  return (
    <div>
      <Navbar/>
        <section className='mt-16 py-10 px-10'>
          {children}
        </section>
      <Footer/>
    </div>
  );
};

export default AppShell