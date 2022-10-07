
import { useState } from 'react'
import './App.css'
import { BaseColaboradores } from './components/BaseColaboradores'


function App() {
  const [newColab, setNewColab] =  useState({name:'', mail:''});
  const [colabList, setColabList] =  useState(BaseColaboradores);
  
  const handleChange = (e, props) => {
    setNewColab({...newColab,
    [props]: e.target.value
    })
    console.log(newColab)
  }
  
  const handleClick = () => {
     setColabList([...colabList, 
      {...newColab, id: Date.now}]);
  }

  const [findColab, setFindColab] = useState('');

  const handleList = (e) => {
    setFindColab(e.target.value)
  }


  return ( 
    <div className="App">
      <input 
        placeholder='Find Name'
        type="text"
        onChange={handleList} />
      <input 
        className='inputName'
        onChange={(eve) => {
          handleChange(eve, 'name')
        }}
        type="text"
        placeholder='Add Name' />
      <input 
        className='inputMail'
        onChange={(eve) => {
          handleChange(eve, 'mail')
        }}
        type="text" 
        placeholder='Add Mail' />
      <button onClick={handleClick}>Add new</button>
      <ul>
        {colabList.filter((colab) => {
            return(
              colab.name.toLocaleLowerCase().includes(findColab.toLocaleLowerCase())
            )}
          ).map(colab => {
            return (
              <li key={colab.id}>
                {colab.name} - {colab.mail}
              </li>
            )
        })}
      </ul>
    </div>
  )
}

export default App
