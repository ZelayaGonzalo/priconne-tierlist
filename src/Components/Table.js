import './style.css'
import Character from './Character'
import data from '../data.js'
import {useState} from 'react'


function Table(){
    const [list,setList] = useState(data)
    const [ascending,setAscending] =useState(false)

    function sortByName(){
        if(ascending){
            setList(prev=> { return [...prev].sort(function (a, b) {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
                return 0;
              }) 
        })
        }
        else{
            setList(prev=> { return [...prev].sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              }) 
        })
        }
        setAscending(!ascending)
      }
      function sortPvp(){
        setAscending(false)
        setList(prev => {return [...prev].sort(function (a, b) {
          if (a.pvp < b.pvp) {
            return 1;
          }
          if (a.pvp > b.pvp) {
            return -1;
          }
          return 0;
          })
        })
      }
      function sortPve(){
        setAscending(false)
        setList(prev => {return [...prev].sort(function (a, b) {
          if (a.pve < b.pve) {
            return 1;
          }
          if (a.pve > b.pve) {
            return -1;
          }
          return 0;
          })
        })
      }
      function sortCb(){
        setAscending(false)
        setList(prev => {return [...prev].sort(function (a, b) {
          if (a.cb < b.cb) {
            return 1;
          }
          if (a.cb > b.cb) {
            return -1;
          }
          return 0;
          })
        })
      }
      

    return(
        <div className="table-container">
            <div className="row head fixed">
                <span className="icon head">Icon</span>
                <span className="name head" onClick={sortByName}>Name {ascending ?<i class="fas fa-arrow-up" ></i> :<i class="fas fa-arrow-up rotate" ></i>  }</span>
                <span className="tier head" onClick={sortPve}>PVE</span>
                <span className="tier head" onClick={sortCb}>CB</span>
                <span className="tier head" onClick={sortPvp}>PVP</span>
                <span className="source head">Source</span>
            </div>
            <div className="list-container">
                {list.map(char => <Character key={char.name} info={char}/>)}
            </div>
        </div>
    )
}

export default Table