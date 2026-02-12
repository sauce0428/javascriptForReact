import Header from './Header'
import Button from './Button'
import { useParams } from 'react-router-dom'

const Diary = ()=>{
  const params = useParams()
  return <>
    <h1>{params.id} Diary</h1>
  </>
}
export default Diary;