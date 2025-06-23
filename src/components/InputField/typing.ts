export interface InputFieldProps {
  variant:'primary'|'secondary'  ;
      label: string;
      id: string;
      name?: string;
      type?: 'text' | 'email' | 'password' | 'number'| 'tel'; 
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      placeholder?: string;
      className?: string; 
      maxLength?:number;
      minLength?:number;
    }