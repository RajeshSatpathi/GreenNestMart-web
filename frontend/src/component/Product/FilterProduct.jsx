import React from 'react'

function FilterProduct({ category, handleCheckboxChange, filterdOnCategory }) {
  return (
    <div>
      <ul>
        <li className='text-sm uppercase'>Choose Your Category</li>
        {
          category?.map((item) => (
            <li className='flex gap-2 my-3'>
              <input type="checkbox" className=''
                value={item}
                onChange={(e) => handleCheckboxChange(item, e.target.checked)} />
              <span className='text-gray-700'>{item}</span>
            </li>
          ))
        }
        <button className='p-2 mt-3 bg-gray-800
           text-white w-full rounded text-xs uppercase cursor-pointer'
          onClick={() => filterdOnCategory()}
        >Apply Category</button>

      </ul><br />
      <ul className='flex flex-wrap gap-2'>

        <li><button className='btn-price'>₹100</button></li>
        <li><button className='btn-price'>₹200</button></li>
        <li><button className='btn-price'>₹300</button></li>
        <li><button className='btn-price'>₹400</button></li>
        <li><button className='btn-price'>₹500</button></li>
        <li><button className='btn-price'>₹600</button></li>

      </ul>
      <p className='flex gap-2 mt-4'>
        <input type="checkbox" />
        <span className='text-sm font-semibold'>Best Seller Product </span>
      </p>

    </div>
  )
}

export default FilterProduct