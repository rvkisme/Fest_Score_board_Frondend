import React,{useState,useEffect} from 'react'
import Board from '../../components/Board/Board'
import API from '../../api/axios'
function GroupScore() {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    API.get("/getScore") // works with both proxy & CORS
      .then((res) => setScores(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Board scores={scores}/>
    </div>
  )
}

export default GroupScore
