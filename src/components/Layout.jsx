import {Outlet, Link, useLocation} from 'react-router-dom' 

function Layout() {

    const location = useLocation()

    console.log(location)


  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h3 className='text3xl font-black text-center text-white'>Crm - Opticamene</h3>
            <nav className='mt-10'>
                <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-1xl block mt-2 hover:text-blue-300`}  to="/">Inicio</Link>
                <Link className={`${location.pathname === '/clientes' ? 'text-blue-300' : 'text-white'} text-1xl block mt-2 hover:text-blue-300'`} to="/clientes">Clientes</Link>
                <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} 'text-1xl block mt-2 hover:text-blue-300'`} to="/clientes/nuevo">Nuevo Cliente</Link>

            </nav>
        </aside>


        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />

        </main>

    </div>
  )
}

export default Layout