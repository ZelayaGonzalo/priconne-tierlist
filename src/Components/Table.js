import './style.css'
import Character from './Character'
import data from '../data.js'
import {useState,useEffect} from 'react'
import Info from './Info'
import {
  BrowserView,
  MobileView,
  isBrowser,
} from "react-device-detect";


function Table(){
    const [list,setList] = useState(data)
    const [ascending,setAscending] =useState(false)
    const [ascendingStars,setAscendingStars]=useState(false)
    const [searchValue,setSearchValue] = useState("")
    const [ascendingPosition,setAscendingPosition] = useState(false)
    
    const [sourceArray,setSourceArray]= useState(['dungeon','arena','princess','clan','hard','none'])
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
        setAscendingStars(false)
        setAscendingPosition(false)
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
        setAscendingStars(false)
        setAscendingPosition(false)
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
        setAscendingStars(false)
        setAscendingPosition(false)
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
        setAscendingStars(false)
        setAscendingPosition(false)
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
    function sortCbRank(){
      setAscending(false)
      setAscendingStars(false)
      setAscendingPosition(false)
        setList(prev => {return [...prev].sort(function (a, b) {
          if (a.cbRank < b.cbRank) {
            return -1;
          }
          if (a.cbRank > b.cbRank) {
            return 1;
          }
          return 0;
          })
        })
    }
    function sortStars(){
      setAscending(false)
      setAscendingPosition(false)
      if(ascendingStars){
        setList(prev=> { return [...prev].sort(function (a, b) {
            if (a.stars < b.stars) {
              return 1;
            }
            if (a.stars > b.stars) {
              return -1;
            }
            return 0;
          }) 
    })
    }
    else{
        setList(prev=> { return [...prev].sort(function (a, b) {
            if (a.stars > b.stars) {
              return 1;
            }
            if (a.stars < b.stars) {
              return -1;
            }
            return 0;
          }) 
    })
    }
    setAscendingStars(!ascendingStars)
    }
    function sortPosition(){
      setAscending(false)
      setAscendingStars(false)
      if(ascendingPosition){
        setList(prev=> { return [...prev].sort(function (a, b) {
            if (a.position < b.position) {
              return 1;
            }
            if (a.position > b.position) {
              return -1;
            }
            return 0;
          }) 
    })
    }
    else{
        setList(prev=> { return [...prev].sort(function (a, b) {
            if (a.position > b.position) {
              return 1;
            }
            if (a.position < b.position) {
              return -1;
            }
            return 0;
          }) 
    })
    }
    setAscendingPosition(!ascendingPosition)
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
        <div className={isBrowser ? "table-container table-desktop":"table-container"}>
            <MobileView viewClassName="row head fixed">
                <span className="icon head action" onClick={showSideBar}><i className="fas fa-info-circle"></i></span>
                <span className="name head action" onClick={sortByName}>Name {ascending ?<i className="fas fa-arrow-up" ></i> :<i className="fas fa-arrow-up rotate" ></i>  }</span>
                <span className="tier head action" onClick={sortPve}>PVE</span>
                <span className="tier head action" onClick={sortCb}>CB</span>
                <span className="tier head action" onClick={sortPvp}>PVP</span>
                <span className="source head action" id="source" onClick={showFilter}>Source
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
            </MobileView>
            <BrowserView viewClassName="row head fixed row-desktop fixed-desktop">
                <span className="icon head action" onClick={showSideBar}><i className="fas fa-info-circle"></i></span>
                <span className="stars head action" onClick={sortStars}>Stars {ascendingStars ?<i className="fas fa-arrow-up" ></i> :<i className="fas fa-arrow-up rotate" ></i>  } </span>
                <span className="position head action" onClick={sortPosition}>Position {ascendingPosition ?<i className="fas fa-arrow-up" ></i> :<i className="fas fa-arrow-up rotate" ></i>  }</span>
                <span className="name head action" onClick={sortByName}>Name {ascending ?<i className="fas fa-arrow-up" ></i> :<i className="fas fa-arrow-up rotate" ></i>  }</span>
                <span className="tier head action" onClick={sortPve}>PVE</span>
                <span className="tier head action" onClick={sortCb}>CB</span>
                <span className="tier head action" onClick={sortPvp}>PVP</span>
                <span className="cbRank head action" onClick={sortCbRank}>CB Rank</span>
                <span className="comment head">Comment</span>
                <span className="source head action" id="source" onClick={showFilter}>Source
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
            </BrowserView>
            <Info/>
            <div className="search-icon">
                <input className="search-txt" type="text" placeholder="search" value={searchValue} onChange={handleSearch}/>
                <span className="search-btn"><i className="fas fa-search"></i> </span>
            </div>   
            <div className="list-container">
                {list.filter(data => (data.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) && sourceArray.some(src=>(src === data.source)) && filterPosition(data.position) &&filterStars(data.stars) )).map(char => <Character key={char.name} info={char}/>)} 
            </div>
        </div>
    )
}

export default Table