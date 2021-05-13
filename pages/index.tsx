import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemPainted from '../components/ItemPainted';

const index = () => {
  const [files, setfiles] = useState([]);
  const [url, seturl] = useState('');

  // axios.post("https://nlp-rut-flask-server.herokuapp.com/api/descarga_archivos", )

  useEffect(() => {
    console.log('thse are the file', files);
    console.log('thse are the url', url);
  }, [files,url]);

  // const arrayToSent = (arreglo) => {
  //   const array = { archivos_rut: [] };
  // };

  // const handleNotUrl = () => {

  // }

  return (
    <>
      <div className='p-9'>
        <input
          type='file'
          className=''
          multiple
          onChange={(e) => {
            setfiles([...files, e.target.files]);
          }}
          placeholder='Agregue el documento rut'
        />
        <input
          type='text'
          className=''
          onChange={(e) => {
            let urlData = e.target.value
            // seturl(urlData.indexOf('http') > -1 ? urlData : '' );
            seturl(urlData);
          }}
          value={url}
          placeholder='Agregue el documento rut'
        />
        <button className='ml-3 p-2 rounded-lg  bg-green-600 text-white hover:text-green-800 hover:bg-green-200 hover:border-green-600 hover:border-solid'>
          Cargar RUT
        </button>
      </div>

      <div className='grid grid-cols-3 gap-4 p-9'>
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
        <ItemPainted label='Test' span='testspan' />
      </div>
    </>
  );
};
export default index;
