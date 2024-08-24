import { useFormStatus } from "react-dom";
export default function button({ children, onClick, disabled }) {
    // Variable (permet de bloquer le bouton pendant l'envoi du formulaire)
    const { pending } = useFormStatus();

    return (
        <>
            <button
                disabled={pending}
                onClick={onClick}
                className="
                    border 
                    px-4 py-2
                    rounded-3xl
                    disabled:cursor-not-allowed
                    disabled:bg-opacity-95
                    disabled:text-opacity-70
                    text-white 
                    bg-blue-500 
                    hover:bg-blue-600
                    duration-300"
            >
                {children}
            </button>
        </>
    );
}
