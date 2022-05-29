import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>Meetings App</title>
        </Head>
        <main>
            <Navbar />
            {children}
        </main>
    </>
  )
}
export default Layout