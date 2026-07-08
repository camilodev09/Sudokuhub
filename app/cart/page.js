'use client';
import { useState, useEffect } from 'react';
import useCartStore from '../../store/useCartStore';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, addToCart, decreaseQuantity, getTotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted to render the cart
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="pt-24 min-h-screen bg-carbon text-white flex justify-center">Loading cart...</div>;

  const total = getTotal();
  const paypalOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
    currency: "USD",
  };

  return (
    <div className="pt-28 min-h-screen bg-carbon px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-syne font-extrabold text-cian uppercase tracking-tighter mb-10 px-2 md:px-0">Your Cart</h1>
        
        {cart.length === 0 ? (
          <div className="glass-panel p-10 text-center">
            <h2 className="text-2xl font-orbitron text-white mb-4">Cart is empty</h2>
            <Link href="/shop" className="text-tactical hover:text-white transition-colors underline">Go back to Shop</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Cart Items */}
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              {cart.map(item => (
                <div key={item.id} className="glass-panel p-4 flex items-center gap-4 relative">
                  <div className="w-24 h-24 bg-black rounded-sm overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-inter font-bold text-lg">{item.name}</h3>
                    <p className="text-cian font-syne font-extrabold text-xl">${item.price}</p>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center bg-graphite rounded-sm border border-cyber/30">
                        <button onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 text-cyber hover:text-white hover:bg-tactical/20 flex items-center justify-center transition-colors">-</button>
                        <span className="w-8 text-center text-white font-mono text-sm">{item.quantity}</span>
                        <button onClick={() => addToCart(item)} className="w-8 h-8 text-cyber hover:text-white hover:bg-tactical/20 flex items-center justify-center transition-colors">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-error text-sm hover:underline font-inter">Remove</button>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="font-inter text-sm text-cyber">Subtotal</p>
                    <p className="text-tactical font-syne font-extrabold text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Panel */}
            <div className="w-full lg:w-1/3">
              <div className="glass-panel p-6 sticky top-28">
                <h2 className="text-xl font-orbitron text-tactical mb-6 border-b border-cyber/30 pb-2">Order Summary</h2>
                <div className="flex justify-between mb-4 text-white font-inter">
                  <span>Items ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-6 text-white font-inter border-b border-cyber/30 pb-4">
                  <span>Shipping</span>
                  <span className="text-tactical">Free</span>
                </div>
                <div className="flex flex-wrap justify-between items-end mb-8 gap-2 w-full overflow-hidden">
                  <span className="text-xl sm:text-2xl font-syne font-extrabold text-white shrink-0">Total</span>
                  <span className="text-2xl sm:text-3xl font-syne font-extrabold text-cian break-all text-right">${total.toFixed(2)}</span>
                </div>
                
                {/* PayPal Container */}
                <div className="w-full bg-white rounded-md p-2 relative z-50">
                  <PayPalScriptProvider options={paypalOptions}>
                    <PayPalButtons 
                      style={{ layout: "vertical", color: "blue", shape: "rect", label: "checkout" }} 
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: total.toFixed(2),
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                          alert(`Transaction completed by ${details.payer.name.given_name}`);
                          clearCart();
                        });
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
