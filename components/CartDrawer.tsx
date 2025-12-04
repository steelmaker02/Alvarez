import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
    const { isOpen, closeCart, items, updateQuantity, removeFromCart, cartTotal } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <div
                className="absolute inset-0 bg-[#2B1B17]/60 backdrop-blur-sm transition-opacity"
                onClick={closeCart}
            ></div>

            <div className="relative w-full max-w-md bg-[#F5F0EB] h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-out">

                <div className="p-6 flex items-center justify-between border-b border-[#2B1B17]/10">
                    <h2 className="font-serif text-2xl text-[#2B1B17]">Ihr Warenkorb</h2>
                    <button onClick={closeCart} className="text-[#2B1B17]/50 hover:text-[#C68E66] transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                            <p className="font-serif text-xl mb-2">Der Warenkorb ist leer.</p>
                            <p className="font-sans text-sm">Entdecken Sie unsere Kollektion!</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 items-start">
                                <div className="w-20 h-20 bg-[#C68E66]/10 rounded-sm border border-[#C68E66]/20 flex-shrink-0 overflow-hidden">
                                    <img src={item.imageDefault} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-serif text-lg text-[#2B1B17] leading-tight">{item.name}</h3>
                                        <button onClick={() => removeFromCart(item.id)} className="text-[#2B1B17]/30 hover:text-red-500 transition-colors ml-2">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <p className="text-sm text-[#C68E66] font-medium mb-3">{item.price}</p>

                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center border border-[#2B1B17]/20 rounded-sm">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="p-1 hover:bg-[#2B1B17]/5 text-[#2B1B17]"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-12 text-center text-sm font-medium font-sans text-[#2B1B17]">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="p-1 hover:bg-[#2B1B17]/5 text-[#2B1B17]"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 bg-white border-t border-[#2B1B17]/10">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-sans text-[#2B1B17]/60 uppercase text-xs tracking-widest">Zwischensumme</span>
                            <span className="font-serif text-2xl text-[#2B1B17]">€ {cartTotal.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <button className="w-full bg-[#2B1B17] text-[#F5F0EB] py-4 uppercase tracking-widest text-sm hover:bg-[#C68E66] transition-colors duration-300">
                            Zur Kasse
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};