
const index = () => {
  let array=[1,2,3,4,5,6,7,8,9]
  return (
    <div  className="container"> 
      <div className="flex flex-col items-center  pt-16">
          <p className="text-3xl font-semibold">Properties</p>
       <p className="text-base font-normal pt-4 montserrat">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      </div>
      <div  className="pt-16">
           <div className="flex justify-between"> 
            <p>{array.length} results</p>
            <div className="flex">
              <p>Sort by:</p>
              <select>
                <option value="Newest Listings">Newest Listings</option>
              </select>
            </div>
            <div className="flex justify-start gap-10 flex-wrap">
                 <div>

                 </div>
            </div>
           </div>
      </div>
    </div>
  );
};

export default index;