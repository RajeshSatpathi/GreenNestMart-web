import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../component/layout/MainLayout'
import Homepage from '../pages/Home/Homepage'
import ProductPage from '../pages/Product/ProductPage'
import Registration from '../pages/Signup/Registration'
import Login from '../pages/Login/Login'
import ProtectedRoutes from './ProtectedRoutes'
import Cartpage from '../pages/cart/Cartpage'
import { useDispatch, useSelector } from 'react-redux'
import { ThreeCircles } from 'react-loader-spinner'
import { checkAuthAPI } from '../Features/AuthFeature/authSlice'
import AdminLayout from '../component/layout/AdminLayout'
import Dashboard from '../AdminPages/Dashboard'
import AdminProduct from '../AdminPages/AdminProduct'
import Contact from '../pages/contact/Contact'
import AddProduct from '../AdminPages/AddProduct'
import ViewProduct from '../pages/Product/ViewProduct'
import Checkout from '../pages/Checkout/Checkout'
import AdminOrder from '../AdminPages/AdminOrder'
import OrderProductView from '../AdminPages/OrderProductView'
import Myorder from '../pages/Myorders/Myorder'
function AppRoutes() {
  const { isAuthentication, user, loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuthAPI())
  }, [dispatch]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen '>
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  }
  return (
    <div>
      <Routes>
        {/* // this is for Customer layout  */}
        <Route element={
          <ProtectedRoutes isAuthentication={isAuthentication} user={user}>
            <MainLayout />
          </ProtectedRoutes>
        }>
          <Route path='/' element={<Homepage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/details/:id" element={<ViewProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myorder" element={<Myorder />} />

        </Route>

        {/* // this is for admin layout  */}
        <Route element={
          <ProtectedRoutes isAuthentication={isAuthentication} user={user}>
            <AdminLayout />
          </ProtectedRoutes>
        }>
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path="/admin-product" element={<AdminProduct />} />
          <Route path='/admin-addproduct' element={<AddProduct />} />
          <Route path='/admin-orders' element={<AdminOrder />} />
          <Route path='/admin-orderproductview/:id' element={<OrderProductView />} />


        </Route>


      </Routes>
    </div>
  )
}

export default AppRoutes