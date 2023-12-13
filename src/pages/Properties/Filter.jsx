
const Filter = ({array}) => {
  return (
    <div className='flex justify-between pt-16 ' >
      <p>{array.length} results</p>
      <div className='flex border border-slate-300 border-solid'>
        <p>Sort by:</p>
        <select name="" id=""  >
            <option value="Newest listings" >Newest listings</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
