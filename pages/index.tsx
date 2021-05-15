import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemPainted from '../components/ItemPainted';

const index = () => {
  const [files, setfiles] = useState([]);
  const [url, seturl] = useState('');

  const array = { archivos_rut: []};
  const urls = { url_archivos: '' };

  useEffect(() => {
    if (files[0] != undefined) {
      Object.values(files[0]).forEach((file) => {
        console.log(file);
        array.archivos_rut.push(file);
      });
    }

    if (url !== '') {
      urls.url_archivos = url;
    }
  }, [files, url]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (url !== '') {
      console.log('VERDAD');
      try {
        await axios
          .post('https://nlp-rut-flask-server.herokuapp.com/api/descarga_archivos_url', urls)
          .then(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        console.log('ENTRE', array);
        let pkg = new FormData();
        array.archivos_rut.forEach((i) => {
          pkg.append('archivos_rut', i, i.name);
        
        });
        console.log('This is the bfd', pkg.getAll('archivos_rut'));

        // let arreglodebinarios = new Blob()
        // arreglodebinarios.
        // console.log("arreglode binarios", arreglodebinarios);
        

        await axios
          .post(
            'https://nlp-RUT-flask-server.herokuapp.com/api/descarga_archivos',pkg,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'content-type': 'application/json'
              },
            }
          )
          .then(function (response) {
            console.log(response);
          });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div className='p-9 flex flex-col'>
        <input
          type='file'
          className='mb-2'
          multiple
          onChange={(e) => {
            setfiles([...files, e.target.files]);
          }}
          placeholder='Agregue el documento RUT'
        />
        <input
          type='text'
          className='border-b-2 border-gray-600 mb-2 p-4'
          onChange={(e) => {
            let urlData = e.target.value;
            seturl(urlData);
          }}
          value={url}
          placeholder='Agregue el URL del documento RUT'
        />
        <button
          onClick={onSubmit}
          className='ml-3 p-2 rounded-lg  bg-green-600 text-white hover:text-green-800 hover:bg-green-200 hover:border-green-600 hover:border-solid'
        >
          Cargar RUT
        </button>
      </div>

      {/* <div className='grid grid-cols-3 gap-4 p-9'>
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
      </div> */}
    </>
  );
};
export default index;
