import RedButton from "./RedButton";

interface FormProps {
    title?: string;
    buttonText: string;
    inputs: string[];
}

const Form: React.FC<FormProps> = ({title, buttonText, inputs}) => {
    return (
        <form className="w-96 flex flex-col gap-10 px-5 py-3">
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
                            className="w-full border indent-4 py-2 border-darkgrey rounded-2xl"
                        />
                    </div>
                ))}
            </div>

            <div className="w-2/4 mx-auto flex items-center flex-row justify-center">
                <RedButton text={buttonText} clicked={() => { console.log('some action') }} />
            </div>
        </form>
    );
}

export default Form;
