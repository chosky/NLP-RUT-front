const index = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
            Problema y contexto del producto{' '}
          </h1>
          <p className='text-lg leading-relaxed xl:w-4/4 lg:w-3/4 mx-auto text-gray-500s'>
            En estos tiempos en lo que más se está enfocando la industria es en lograr automatizar
            todos los trabajos que son secuenciales, manuales y monótonos para así lograr un mayor
            rendimiento en muchos de sus procesos, uno de los retos que se tienen es la
            automatización del traspaso de documentos completados a mano o de forma digital por
            cualquier ser humano a una base de datos, uno de los documentos son los RUT (Registro
            Único Tributario) documento que usa la DIAN (Detección de Impuestos y Aduanas
            Nacionales) como mecanismo único para identificar, ubicar y clasificar a las personas y
            entidades que tengan la calidad de contribuyentes declarantes del impuesto de renta y no
            contribuyentes declarantes de ingresos y patrimonio en Colombia. Lo que busca el
            proyecto NLP RUT es usando NLP (Natural Language Processing) se busca solucionar el
            problema del tiempo empleado por un trabajador para transcribir la información y
            guardarla posteriormente en una base de datos y que este proceso sea totalmente
            automático
          </p>
          <div className='flex mt-6 justify-center'>
            <div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
