import ItemPainted from '../components/ItemPainted'

const index = () => {
  return (
    <>
      <div className="p-9">
      

        <input type="file" className="" placeholder="Agregue el documento rut"/>
        <button className="ml-3 p-2 rounded-lg  bg-green-600 text-white hover:text-green-800 hover:bg-green-200 hover:border-green-600 hover:border-solid">Cargar RUT</button>
      </div>

      <div className="grid grid-cols-3 gap-4 p-9">
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />
        <ItemPainted label="Test" span="testspan" />

      </div>
    </>
  )
}
export default index
