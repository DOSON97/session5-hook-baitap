import React from 'react'
import Liststudent from './Liststudent'
import Thongtinsinhvien from './Thongtinsinhvien'
import Control from './Control'
function Bai3() {
  return (
    <>
        <div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
    <div className="card">
      {/* START CONTROL */}
      <Control/>
      {/* END CONTROL */}
      {/* START LIST STUDENT */}
      <Liststudent/>
      {/* END LIST STUDENT */}
    </div>
  </div>
  {/* START FORM SINH VIEN */}
  <Thongtinsinhvien/>
  {/* END FORM SINH VIÊN */}
 </div>

    </>
  )
}

export default Bai3