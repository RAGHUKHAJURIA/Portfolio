import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const apiUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      if (!apiUrl) {
        toast.error('API URL missing. Check your .env file.');
        return;
      }
      
      const formData = new URLSearchParams();
      formData.append("name", data.name || "");
      formData.append("email", data.email || "");
      formData.append("message", data.message || "");
      formData.append("timestamp", new Date().toLocaleString());

      await fetch(apiUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      toast.success('Message sent successfully!');
      reset();
    } catch {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="fade-up" style={{ animationDelay: '0.5s' }}>
      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: '#1a1a1a', color: '#e5e5e5', border: '1px solid #222', fontSize: '13px' },
        }}
      />

      <p className="section-title">Get In Touch.</p>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
        Have a project in mind or just want to say hi? Fill the form below and I'll get back to you
        as soon as possible.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Your name"
            className="form-control"
          />
          {errors.name && (
            <p style={{ fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
            })}
            type="email"
            placeholder="your@email.com"
            className="form-control"
          />
          {errors.email && (
            <p style={{ fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register('message', { required: 'Message is required' })}
            rows={4}
            placeholder="Your message..."
            className="form-control"
            style={{ resize: 'vertical' }}
          />
          {errors.message && (
            <p style={{ fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
          style={{ alignSelf: 'flex-start' }}
        >
          <Send size={13} />
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};
