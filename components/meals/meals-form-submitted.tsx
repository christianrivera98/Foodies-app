import { useFormStatus } from "react-dom";

export default function ShareFormSubmitted(){
    const status = useFormStatus();
    const {pending} = status;
    return(
        <button disabled={pending} className="bg-papaya-whip w-[200px] p-[10px] text-[20px] text-barn-red rounded-xl hover:bg-barn-red hover:text-papaya-whip cursor-pointer transition hover:scale-105 active:scale-95" type="submit">
            {pending? 'Submitting...': 'Share Meal'}
        </button>
    )
}