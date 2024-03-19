
const Person = () => {
    const heros={
        hero1:"batman",
        hero2:"superman"
      }
    
      const arr = ["apple","banana","mango",12,20.30,"oneplus"]
      
      const arr1 = ["apple","banana","mango",12,20.30,"oneplus"]

      const style = {
        backgroundColor:"green",
        color:"white",
        textAlign:"center",
        border:"2px solid orange",
        borderRadius:"200px",
        margin:"auto",
        width:"700px",
        marginBottom:"20px"
      }

  return (
    <>
    <div style={style}> 
    <h1>This is person component</h1>
{
/*     
   <div>
      <h1>welcome to react tutorial</h1>
     <h2>my name is {heros.hero1} & currently i am learning react</h2>
     <h3>my name is {heros.hero2} & i am already know react pretty well</h3>
   </div>
   <h1>{arr[5]}</h1> */
   }
    {arr.map((d)=> ( 
    <h1 key={Math.random()}>{d}</h1>
    ))
    }
    </div>
    </>
  )
}

export default Person