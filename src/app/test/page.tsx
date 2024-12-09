'use client';

import NavBar from "../sections/navBar";
import Footer from "../sections/footer";
import Header from "@/components/Header";
import RedButton from "@/components/RedButton";
import { useState, useEffect } from "react";

export default function GoodChildTest() {

    useEffect(() => {
        const user = localStorage.getItem("userLogged")
        if (user !== "null"){
            const toRemove = document.querySelectorAll('.autenticator');
            const toDisplay = document.querySelectorAll('.isLogin');
            toRemove.forEach((element) => {
                if (element instanceof HTMLElement) {
                    element.style.display = 'none';
                } else {
                    console.error('Element is not an HTMLElement:', element);
                }
            });
            
            toDisplay.forEach((element) => {
                if (element instanceof HTMLElement) {
                    element.style.display = 'flex';
                } else {
                    console.error('Element is not an HTMLElement:', element);
                }
            });
        }
    }, [])
    const questions = [
        "¿Has ayudado a tus padres en casa?",
        "¿Has sido amable con tus amigos?",
        "¿Has compartido tus juguetes?",
        "¿Te has comido todas tus verduras?",
        "¿Has hecho tus deberes a tiempo?",
        "¿Has mantenido tu habitación ordenada?",
        "¿Has obedecido a tus profesores?",
    ];

    const [answers, setAnswers] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
    const [result, setResult] = useState<string | null>(null);
    const [advice, setAdvice] = useState<string | null>(null);

    const handleAnswerChange = (index: number, value: boolean) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const calculateResult = () => {
        const positiveAnswers = answers.filter(answer => answer === true).length;
        const score = (positiveAnswers / questions.length) * 100;

        if (score >= 70) {
            setResult("¡Has sido un niño muy bueno este año!");
            setAdvice("Sigue así, ¡estás haciendo un gran trabajo! ¡Sigue siendo amable y obediente, y no olvides ayudar en casa siempre que puedas!");
        } else if (score >= 40) {
            setResult("Parece que puedes esforzarte un poquito más.");
            setAdvice("¡No te preocupes! Hay tiempo para mejorar. Intenta ser más ordenado, ayudar a tus padres y compartir más con tus amigos.");
        } else {
            setResult("Parece que necesitas mejorar en algunos aspectos.");
            setAdvice("Recuerda que ser buen niño es importante. Intenta hacer tus deberes a tiempo, ayudar más en casa y ser más amable con los demás.");
        }
    };

    return (
        <>
            <NavBar />
            <section className="px-4 py-10 flex flex-col items-center justify-center gap-10 min-h-[90vh]">
                <Header text="Test del Niño Bueno" color="green" />
                <div className="w-full max-w-4xl flex flex-col gap-6 items-center justify-center">
                    {questions.map((question, index) => (
                        <div key={index} className="flex flex-col gap-2 text-center">
                            <p className="text-lg font-semibold">{question}</p>
                            <div className="flex gap-4 justify-center">
                                <RedButton
                                    text="Sí"
                                    clicked={() => handleAnswerChange(index, true)}
                                    className={answers[index] === true ? "bg-green-500 text-white" : ""}
                                />
                                <RedButton
                                    text="No"
                                    clicked={() => handleAnswerChange(index, false)}
                                    className={answers[index] === false ? "bg-green-500 text-white" : ""}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-center">
                    <RedButton text="Calcular Resultado" clicked={calculateResult} />
                </div>
                {result && (
                    <div className="mt-6 text-center">
                        <p className="text-2xl font-bold">{result}</p>
                        {advice && <p className="mt-4 text-lg">{advice}</p>}
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
}