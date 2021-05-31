import Link from 'next/link';

const Header = () => {
  return (
    <div className=' flex bg-morado text-azul flex-wrap p-5 flex-col md:flex-row items-center'>
      <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
        <span className='ml-3 text-2xl text-white'>NLP RUT</span>
      </a>
      <nav className='md:ml-auto md:mr-auto flex flex-row items-start text-base justify-start'>
        <button className='mr-5 rounded-lg text-white bg-azul hover:bg-white hover:text-azul p-2'>
          <Link href='/'>Pagina Principal</Link>
        </button>
        <button className='mr-5 rounded-lg text-white bg-azul hover:bg-white hover:text-azul p-2'>
        <Link href='/project'>Acerca del Proyecto</Link>
        </button>
        <button className='mr-5 rounded-lg text-white bg-azul hover:bg-white hover:text-azul p-2'>
          <Link href='/developers'>Desarrolladores</Link>
        </button>
      </nav>
    </div>
  );
};

export default Header;
