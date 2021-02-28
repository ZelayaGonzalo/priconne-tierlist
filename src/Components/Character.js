import {useState} from 'react'

const star1='https://i.ibb.co/QD8P2nm/1star.png'
const star2='https://i.ibb.co/MPdkP4N/2stars.png'
const star3='https://i.ibb.co/hVs5mtR/3stars.png'

const cbIcon = 'https://i.ibb.co/jMqr5C0/cb-icon.png'
const dungeonIcon = 'https://i.ibb.co/GMrgJY0/dungeon-icon.png'
const arenaIcon = 'https://i.ibb.co/ChwG0gR/battle-arena.png'
const princessAIcon = 'https://i.ibb.co/d6Rm29k/princess-arena-icon.png'
const hardIcon = 'https://i.ibb.co/hd6T7fq/hard-mode-icon.png'

function Character(props){

    const [notesShown,setNotesShown] = useState(false)
    const [diffShown,setDiffShown] = useState(false)

    function getTier(tier){
        switch(tier){
            case 0:
                return <span className="tier char c">C</span>
            case 1:
                return <span className="tier char b">B</span>
            case 2:
                return <span className="tier char a">A</span>
            case 3:
                return <span className="tier char s">S</span>
            case 4:
                return <span className="tier char ss">SS</span>
            case 5:
                return <span className="tier char sss">SSS</span>
            default:
                return <span className="tier char">-</span>
        }
    }

    function getIcon(icon){
        switch(icon){
            case 'hard':
                return hardIcon
            case 'dungeon':
                return dungeonIcon
            case 'arena':
                return arenaIcon
            case 'princess':
                return  princessAIcon
            case 'clan':
                return cbIcon
            default:
                return
        }
    }
    function getStar(stars){
        switch (stars) {
            case 1:
                return star1
            case 2:
                return star2
            case 3:
                return star3
            default:
                break;
        }
    }

    function showHiddenTab(event){
        const sibling = event.currentTarget.nextSibling
        sibling.classList.toggle('show')
    }
    function showNotes(){
        setNotesShown(!notesShown)
    }
    function showRankDiff(){
        setDiffShown(!diffShown)
    }

    return(
        <div className="character-container">
            <div className="row char-row" onClick={showHiddenTab}>
                <img className="icon" src={props.info.icon} alt="icon"/>
                <span className="name char">{props.info.name}</span>
                {getTier(props.info.pve)}
                {getTier(props.info.cb)}
                {getTier(props.info.pvp)}
                <span className="source char"> <img src={getIcon(props.info.source)} alt="-" className="src-img"/></span>
            </div>
            <div className="hidden">
                <div className="row hidden-row hidden-head">
                    <span className="base-star head">Stars</span>
                    <span className="position head">Position</span>
                    <span className="cb-rank head">CB rank</span>
                    <span className="rank-dif head">Rank dif</span>
                    <span className="notes head">Notes</span>
                </div>
                <div className="row hidden-row hidden-char">
                    <img src={getStar(props.info.stars)} alt={props.info.stars} className="base-star char"/>
                    <span className="position char">{props.info.position}</span>
                    <span className="cb-rank char">{props.info.cbRank}</span>
                    <span className="rank-dif char" onClick={showRankDiff}>Touch {!diffShown ? (<div className="show-rank-diff">...</div>) : (<div className="show-rank-diff visible">{props.info.rankDiff.map(data=><p>{data}</p>)}</div>)} </span>
                    <span className="notes char" onClick={showNotes}>Touch{!notesShown ? (<div className="show-notes">{props.info.comment}</div>) : (<div className="show-notes visible">{props.info.comment}</div>) }</span>
                </div>
            </div>
        </div>
    )
}

export default Character