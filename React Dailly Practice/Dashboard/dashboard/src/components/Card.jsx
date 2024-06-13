

function Card(props) {  
    return (
  
        <div className="mx-auto ">
           
          <img src="" alt="" />
            <p>{props.jobtitle}</p>
            <p>{props.companyName}</p>
            <p>Tags : {props.Tags}</p>
            <p>{props.offer}</p>
            <p>{props.exp}</p>
    </div>
   
  )
}

export default Card