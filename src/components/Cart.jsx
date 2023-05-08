import React, { useEffect } from 'react'
import CartCount from './cart/CartCount'
import CartItem from './cart/CartItem'
import CartEmpty from './cart/cartEmpty'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseCart, selectCartState, selectCartItems, setClearCartItems, setGetTotals, selectTotalAmount, selectTotalQTY } from "../redux/CartSlice.js";


const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState)
    const cartItems = useSelector(selectCartItems)
    const totalAmount = useSelector(selectTotalAmount)
    const totalQTY = useSelector(selectTotalQTY)

    const onCartToggle = () => {
        dispatch(setCloseCart({cartState: false}))
    }

    const clearCartItems = () => {
      dispatch(setClearCartItems())
    }

    useEffect(() => {
      dispatch(setGetTotals())
    }, [cartItems, dispatch])

  return (
    <>
    <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'}`}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
            <CartCount onCartToggle={onCartToggle} totalQTY={totalQTY} clearCartItems={clearCartItems} />

            {cartItems?.length === 0 ? 
            <CartEmpty onCartToggle={onCartToggle}/> 
            : <div>
              <div className='flex flex-col gap-5 lg:gap-3 my-5 overflow-y-scroll h-[80vh] scroll-smooth scroll-hidden'>
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className='fixed bottom-0 bg-white w-full p-5 grid items-center'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-base font-semibold uppercase'>SubTotal</h1>
                  <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount}</h1>
                </div>
                <div className='grid items-center gap-2'>
                  <p className='text-sm font-medium text-center'>Taxes and Shipping will calculate At shipping</p>
                  <button type="button" className='button-theme bg-theme-cart text-white'>Check out</button>
                </div>
              </div>
              </div>
              }
        </div>
    </div>
    </>
  )
}

export default Cart