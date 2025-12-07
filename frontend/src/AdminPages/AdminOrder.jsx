import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import DataTable from 'react-data-table-component';
import { GetAllOrdersAPICALL } from '../Features/OrdersFeature/OrderSlice';
import { Link } from 'react-router-dom';
import { MdRemoveRedEye } from "react-icons/md";
const customStyles = {
  tableWrapper: {
    style: {
      borderRadius: '8px', // <-- add border radius here
      overflow: 'hidden',  // ensures content respects border radius
      // optional light border (Tailwind's gray-200)
      // boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    },
  },
  headCells: {
    style: {
      backgroundColor: 'white', // purple-800
      color: 'black',
      fontWeight: 'bold',
      fontSize: '12px',
      textTransform: 'uppercase',
      


    },
  },
  cells: {
    style: {
      fontSize: '14px',
      color: 'green',
      // fontWeight:'bold'

    },
  },
  rows: {
    style: {
      minHeight: '60px', // optional
      backgroundColor: "white",
      // Recommended: soften shadow
      margin: "10px 0", // optional: adds spacing between rows
      borderRadius: "6px" // optional: rounded corners
    },
  },
};

function AdminOrder() {
  const columns = [
    {
      name: 'SL no',
      selector: (row, index) => <div className=''>,
        <span>{index + 1}</span>
      </div>,
      width: '70px',
    },
    {
      name: 'Customer Name',
      selector: (row, index) => <div className=''>
        <span>{row?.userId?.name}</span>
   
      </div>,

    },

    {
      name: 'Address',
      selector: (row, index) => <div className=''>
        <span>{row?.addressId?.city}</span>,
        <span>{row?.addressId?.state}</span>,
        <span>{row?.addressId?.country}</span>,<br />
        <span>{row?.addressId?.pincode}</span>,
         <span>{row?.addressId?.mobno}</span>
      </div>,
    },
    {
      name: 'Total Amount',
      selector: row => row.totalAmount,

    },

    {
      name: 'Payment Method',
      selector: row => row.paymentType,
    },
    {
      name: 'Order Status',
      selector: row => row.status,
    },
    {
      name: 'View Product',
      selector: row => <>
        <Link to={`/admin-orderproductview/${row?._id}`}><MdRemoveRedEye size={25} color='green' /></Link>
      </>,
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { orders } = useSelector((state) => state.orders)

  useEffect(() => {
    dispatch(GetAllOrdersAPICALL())
  }, [dispatch])

  return (
    <div>
      <div className='flex justify-between'>
        <h2 className='text-lg font-semibold text-shadow-2xs  uppercase '>Orders Request List </h2>

      </div>
      <br />
      {/* ///Order listing component//// */}
      <DataTable
        columns={columns}
        data={orders}
        customStyles={customStyles}
        // selectableRows
        pagination={true}
      />
    </div>
  )
}

export default AdminOrder