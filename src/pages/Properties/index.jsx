import Card from "./Card";
import Filter from "./Filter";
import Properties from "./properties";
const index = () => {
 const array=[1,2,3,4,5,6,7,8,9]
  return (
    <div  className="container"> 
 <Properties/>
 <Filter array={array}/>
 <Card  array={array}/>
    </div>
  );
};

export default index;