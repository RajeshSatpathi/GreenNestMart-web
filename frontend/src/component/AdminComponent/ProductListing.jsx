import React from 'react'
import DataTable from 'react-data-table-component';
function ProductListing({ columns, data, customStyles }) {
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        // selectableRows
        pagination={true}
      />
    </div>
  )
}

export default ProductListing