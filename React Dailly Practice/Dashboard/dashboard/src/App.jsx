
import './App.css'
import Card from './components/Card'
import Header from './components/Header/Header';
const jobdata = [{
  id:1,
  jobtitle:"Fullstack",
  tags: "Rect",
  offer: "14 LPA",
  exp :"0-1 yrs"
},
  {
    id:2,
  jobtitle:"Fullstack Developer Php",
  tags: "React php",
  offer: "16 LPA",
  exp :"0-2 yrs"
  },
  {
    id:3,
  jobtitle:"Mern Angualar",
  tags: "React Angular",
  offer: "15 LPA",
  exp :"0-1 yrs"
},






];
function App() {
 

  return (
    <>
      <Header></Header>
  <div className="2xl:container mx-auto">
        <div className=" w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          { 
            jobdata.map((e, index) => {
              return (
                <>
                  <div key={index}>
                    
                  <Card jobtitle={e.jobtitle} companyName={"Kiwi Networks"} Tags={e.tags} offer={e.offer} exp={e.exp}></Card>

                </div>
         
                </>
              )

            })
          }
         

            </div>

        </div>
    </>
  )
}

export default App
