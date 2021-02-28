import './style.css'
import Character from './Character'
import data from '../data.js'
import {useState,useEffect} from 'react'


function Table(){
    const [list,setList] = useState(data)
    const [ascending,setAscending] =useState(false)
    const [searchValue,setSearchValue] = useState("")
    
    const [sourceArray,setSourceArray]= useState(['dungeon','arena','princess','clan','hard'])
    const [filterSource,setFilterSource]=useState({dungeon:true,arena:true,princess:true,clan:true,hard:true})
    
    const [front,setFront] = useState(true)
    const [mid,setMid]=useState(true)
    const [back,setBack]=useState(true)

    const [star1,setStar1] =useState(true)
    const [star2,setStar2] =useState(true)
    const [star3,setStar3] =useState(true)


    useEffect(()=>{
      setSourceArray(prev=>{
        const newArray=[...prev]
        for(const object in filterSource){
          if(!filterSource[object]){      
              const index = newArray.indexOf(object.toString())
              if(index>-1){
                newArray.splice(index,1)
              }
          }
          else{
            if(!newArray.some(data=> data === object.toString())){
              newArray.push(object.toString())
            }
          }
        }
        return newArray
    })},[filterSource])


    function handleSearch(event){
      const value=event.target.value
      setSearchValue(value)
    }
    function handleSource(event){
      const id=event.target.id
      setFilterSource(prev => (
        {...prev,
          [id]:!prev[id]
      })
      )}
    
    function handlePosition(event){
        const id = event.target.id
        switch (id) {
          case 'front':
            setFront(!front)
            break
          case 'mid':
            setMid(!mid)
            break
          case 'back':
            setBack(!back)
            break
          default:
            break;
        }
    }

    function handleStar(event){
      const id = event.target.id
      switch (id) {
        case 'star1':
          setStar1(!star1)
          break
        case 'star2':
          setStar2(!star2)
          break
        case 'star3':
          setStar3(!star3)
          break
        default:
          break;
      }
    }

    function showSideBar(event){
      const target = event.currentTarget.parentNode.nextSibling
      target.classList.toggle("sidebar-show")
    }
    function showSearch(event){
      const target=event.target.parentNode
      target.classList.toggle("extend")
    }
    function showFilter(event){
      if(event.target.id === 'source'){
        const target = event.target.firstChild.nextSibling
        target.classList.toggle('enter')
      } 
    }
    function buttonCloseFilter(event){
      event.target.parentNode.classList.remove('enter')
    }

    function selectAll(){
      setFilterSource({
        dungeon:true,
        arena:true,
        princess:true,
        clan:true,
        hard:true,
      })
      setFront(true)
      setMid(true)
      setBack(true)
      setStar1(true)
      setStar2(true)
      setStar3(true)
    }
    function eraseAll(){
      setFilterSource({
        dungeon:false,
        arena:false,
        princess:false,
        clan:false,
        hard:false,
      })
      setFront(false)
      setMid(false)
      setBack(false)
      setStar1(false)
      setStar2(false)
      setStar3(false)
    }

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

      function filterPosition(value){
        if(front && value <250){
          return true
        }
        if(mid &&(value >=250 && value<600)){
          return true
        }
        if(back && value>600){
          return true
        }
        return false
      }
      function filterStars(stars){
        if(star1 && stars === 1) return true
        if(star2 && stars === 2) return true
        if(star3 && stars === 3) return true
        return false
      }

    return(
        <div className="table-container">
            <div className="row head fixed">
                <span className="icon head" onClick={showSideBar}><i class="fas fa-info-circle"></i></span>
                <span className="name head" onClick={sortByName}>Name {ascending ?<i class="fas fa-arrow-up" ></i> :<i class="fas fa-arrow-up rotate" ></i>  }</span>
                <span className="tier head" onClick={sortPve}>PVE</span>
                <span className="tier head" onClick={sortCb}>CB</span>
                <span className="tier head" onClick={sortPvp}>PVP</span>
                <span className="source head" id="source" onClick={showFilter}>Source
                  <div className="filter-container" id="filter-container">
                    <h2>Filters</h2>
                    <h4>Source:</h4>
                    <ul className="source-filter">
                      <li>
                        <div>Dungeon</div>
                        <label className="input-container">
                        <input type="checkbox" checked={filterSource.dungeon} id="dungeon" onChange={handleSource}/>
                        <span className="mark"></span>
                        </label>
                      </li>
                      <li>  
                        <div>Hard Shards</div>
                        <label className="input-container">
                        <input type="checkbox" id="hard" checked={filterSource.hard} onChange={handleSource}/>
                        <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div> Arena</div>
                        <label className="input-container">
                        <input type="checkbox" id="arena" checked={filterSource.arena} onChange={handleSource}/>
                        <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div> Princess Arena</div>
                        <label className="input-container">
                        <input type="checkbox" id="princess" checked={filterSource.princess} onChange={handleSource}/>
                        <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div> Clan Battle</div>
                        <label className="input-container">
                        <input type="checkbox" id="clan" checked={filterSource.clan} onChange={handleSource}/>
                        <span className="mark"></span>
                        </label>
                      </li>
                    </ul>
                    <h4>Position:</h4>
                    <ul className="source-filter">
                      <li>
                        <div>Front {'(<250)'}</div>
                        <label className="input-container">
                          <input type="checkbox" id="front" checked={front} onChange={handlePosition}/>
                          <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div>Middle {'(<600)'}</div>
                        <label className="input-container">
                            <input type="checkbox" id="mid" checked={mid} onChange={handlePosition}/>
                            <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div> Back {'(>600)'}</div>
                        <label className="input-container">
                        <input type="checkbox" id="back" checked={back} onChange={handlePosition}/>
                        <span className="mark"></span>
                        </label>
                      </li>
                    </ul>
                    <h4>Base Stars:</h4>
                    <ul className="source-filter">
                      <li>
                        <div>1 Star</div>
                        <label className="input-container">
                          <input type="checkbox" id="star1" checked={star1} onChange={handleStar} />
                          <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div>2 Stars</div>
                        <label className="input-container">
                        <input type="checkbox" id="star2" checked={star2} onChange={handleStar}/>
                        <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div>3 Stars</div>
                        <label className="input-container">
                          <input type="checkbox" id="star3"  checked={star3} onChange={handleStar}/>
                          <span className="mark"></span>
                        </label>
                      </li>
                    </ul>
                    <div className="button-container"><button className="btn select-all" onClick={selectAll}>Select all</button><button className="btn unselect-all" onClick={eraseAll}>Erase all</button></div>
                    <button className="btn filter-close" onClick={buttonCloseFilter}>Close</button>
                  </div>
                </span>
            </div>
            <div className="side-bar">
              <section>
              <h2>Princess Connect Tierlist</h2>
              <p>Hello and welcome to this tierlist.</p>
              <p>This list was made by TimaeuSS and you can find the original <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlbwfpi-KflPB6aA-LE1a50xiLvWsNRU1vcusLIWwnPLzgE2iXw9Or8JXQdezN-s1rakU074hFK1Nh/pubhtml#">here</a></p>
              <p>This app was made with mobile in mind, so it may look a bit clunky on desktop.</p>
              </section>
              <section className="credits-section">
                <h3>Instructions:</h3>
                <h4>Second tab:</h4>
                <p>Touch on any place on a tab of a character to show the hidden tab with some extra info</p>
                <h4>Sorting:</h4>
                <p>Touch any of the sections on the top to sort the list. You can sort by Name(press twice to sort from Z to A), PVP rank, PVE rank and CB Rank</p>
                <h4>Filters:</h4>
                <p>Touch the source tab on the top to open the filters window. You can apply as many filters as you want at the same time</p>
                <h3>References:</h3>
                <h4>Position:</h4>
                <p>The lowest the number the more foward it'll go</p>
                <h4>CB Rank:</h4>
                <p>The current rank suggested for better performance on Clan Battles. (7-6 is rank 7 with full equips)</p>
                <h4>rank Diff:</h4>
                <p>the differences in stats between rank 7-6 and 8-3 (at 3 stars)</p>
                <h4 className="enjoy"> Enjoy :)</h4>
              </section>
              <footer>
                  <p>if you have any troubles feel free to contact me:</p>
                  <p>Email: <a href="zelayagonzalo33@gmail.com">zelayagonzalo33@gmail.com</a></p>
                  <p>Discord: 0PT1C0#3072</p>
              </footer>
            </div>
            <div className="search-icon">
              <i class="fas fa-search" onClick={showSearch}></i>
              <label>
                <input type="text" placeholder="search" value={searchValue} onChange={handleSearch}/>     
              </label>    
            </div>   
            <div className="list-container">
                {list.filter(data => (data.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) && sourceArray.some(src=>(src === data.source)) && filterPosition(data.position) &&filterStars(data.stars) )).map(char => <Character key={char.name} info={char}/>)} 
            </div>
        </div>
    )
}

export default Table