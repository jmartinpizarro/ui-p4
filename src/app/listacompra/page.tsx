'use client';

import NavBar from "../sections/navBar"; // Reutilizando el NavBar
import Footer from "../sections/footer"; // Reutilizando el Footer
import Header from "@/components/Header";
import RedButton from "@/components/RedButton";
import { useState, useEffect } from "react";

export default function ShoppingList() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('shoppingList') || '[]');
        setItems(savedItems);
    }, []);

    interface Item {
        name: string;
        price: number;
        quantity: number;
    }

    const handleRemove = (index: number): void => {
        const updatedItems: Item[] = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
    };

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            {/* Navbar en la parte superior */}
            <NavBar />

            {/* Contenido principal */}
            <section className="px-4 py-10 flex flex-col items-center justify-center gap-10 min-h-[90vh]">
                <Header text="Lista de la Compra" color="green" />

                <div className="w-full max-w-4xl">
                    {/* Lista de artículos */}
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 px-4">Artículo</th>
                                <th className="py-2 px-4">Precio</th>
                                <th className="py-2 px-4">Cantidad</th>
                                <th className="py-2 px-4">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-2 px-4">{item.name}</td>
                                    <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                                    <td className="py-2 px-4">{item.quantity}</td>
                                    <td className="py-2 px-4">
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => handleRemove(index)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Precio total */}
                    <div className="text-right mt-5">
                        <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
                    </div>
                </div>

                {/* Botón para continuar con el pago */}
                <RedButton text="Proceder al Pago" clicked="/checkout" />
                <RedButton text= "Volver al catálogo" clicked="/toycatalogue" />
            </section>

            {/* Footer en la parte inferior */}
            <Footer />
        </>
    );
}
