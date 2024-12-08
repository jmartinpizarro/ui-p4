import { insertLetter } from "@/app/utils/insertLetter";
import RedButton from "./RedButton";

interface FormProps {
    title?: string;
    buttonText: string;
    inputs: string[];
}

const Form: React.FC<FormProps> = ({title, buttonText, inputs}) => {
    return (
        <form className="w-96 flex flex-col gap-10 px-5 py-3" name="letter">
            {title && (
                <h3 className="text-grey text-lg text-center">{title}</h3>
            )}

            <div className="flex flex-col gap-3 bg-grey rounded-2xl items-center justify-center py-10 px-5">
                {inputs.map((input, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <label htmlFor={input} className="font-medium text-darkgrey text-center">{input}</label>
                        <input
                            id={input}
                            type="text"
                            placeholder={`Ingrese ${input}`}
                            className="w-full border py-2 px-5 text-darkgrey border-darkgrey rounded-2xl"
                        />
                    </div>
                ))}
            </div>

            <div className="w-2/4 mx-auto flex items-center flex-row justify-center">
                <RedButton text={buttonText} clicked={(e) => {insertLetter(e)}} />
            </div>
        </form>
    );
}

export default Form;
