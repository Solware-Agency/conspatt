import { useState, ChangeEvent, FormEvent } from 'react';
import type { FormData } from '../types';

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  howDidYouKnow: '',
  message: '',
};

export const useForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};