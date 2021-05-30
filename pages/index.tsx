import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemPainted from '../components/ItemPainted';

const index = () => {
  const [data, setdata] = useState('' as any);
  const [url, seturl] = useState('');
  const [loading, setloading] = useState(true);

  const datos = { datos: {} };
  const urls = { url_archivos: '' };

  let arregloKEYS = [];
  useEffect(() => {
    if (url !== '') {
      urls.url_archivos = url;
    }
  }, [url]);


  const onSubmit = async (e) => {
    e.preventDefault();
    if (url !== '') {
      console.log('VERDAD Hay una url');
     await axios
        .post('https://nlp-rut-flask-server.herokuapp.com/api/descarga_archivos_url', urls)
        .then(function (response) {
          console.log(response.data);
          datos.datos = response.data;
          setdata(response.data);
          setloading(false);
         
        });
    }
  };
  console.log("This is the result", data);
  

  return (
    <>
      <div className='p-9 flex flex-col'>
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
      <div className='grid grid-cols-3 gap-4 p-9'>
          {
            loading=== false ? Object.keys(data.data.fields).map((i, index)=>{
              console.log(Object.values(data.data.fields)[index]);
              return(
                <ItemPainted  label={i} span={Object.values(data.data.fields)[index]['text'] !== null ? Object.values(data.data.fields)[index]['text'] : 'valor no identificado o no ingresado en el RUT'} />
              )
            }) : (
              <h1>Aun no subes un Archivo </h1>
            ) 
          }
      </div>
    </>
  );
};

export default index;
