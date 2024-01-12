"use client";
import { ComponentProps } from "react";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useFormStatus } from 'react-dom';

 

 


type FormSubmitButtonProps = {
    children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;


export default function FormSubmitButton (
    {
    children,
    className,
    ...props
    
}: FormSubmitButtonProps ) { 
    const { pending } = useFormStatus();
     return (
        <button  className={`btn-primary btn ${className}`}
        {...props}
        type="submit"
        disabled={pending}
        >
            {pending && <span className="loading loading-spinner" />}
            {children}
            </button>
     )
}