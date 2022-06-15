import Navbar from "./Navbar"
import Location from "./Location"
import data from "./data"

function App() {
  const locations = data.map((item) => {
     return (<Location 
               key = {item.id}
               item={item}
               />)
  })
  return (
    <div className="App">
<Navbar />
<section className="cards-list">
      {locations}
</section>
    </div>
  );
}

export default App;
