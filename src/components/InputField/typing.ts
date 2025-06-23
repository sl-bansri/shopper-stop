export interface InputFieldProps {
      label: string;
      id: string;
      name: string;
      type?: 'text' | 'email' | 'password' | 'number'| 'tel'; 
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      placeholder?: string;
      className?: string; 
      maxLength?:number
      // required?: boolean
    }