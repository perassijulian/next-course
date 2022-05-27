import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>Juli App</title>
        </Head>
        <main>
            <Navbar />
            {children}
        </main>
    </>
  )
}
export default Layout