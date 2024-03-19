
const Laptop = () => {
    const lap = {
        brandName : "Hp",
        processor :"Inter i5 6th",
        ram: "4GB",
        SSD: "512gb",
        Price: 500000
    }
  return (
    <div style={{backgroundColor:"blue",fontSize:"1.2rem",border:"2px solid yellow",padding:"20px",borderRadius:"20px",width:"700px",margin:"auto"}}>
        <h1>This data is coming from laptop company</h1>
        <h1>{lap.brandName}</h1>
        <h1>{lap.processor}</h1>
    </div>
  )
}

export default Laptop