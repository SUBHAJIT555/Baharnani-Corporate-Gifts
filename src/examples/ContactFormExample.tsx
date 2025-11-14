/**
 * Example usage of TanStack Query mutation for contact form
 * 
 * This file demonstrates how to use the useContactForm hook
 */

import { useForm, type FieldValues } from "react-hook-form";
import { useContactForm } from "../hooks/useContactForm";
import { useState } from "react";

export const ContactFormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      formType: "contact",
    },
  });

  const { mutate, isPending, isError, isSuccess, error } = useContactForm();
  const [successMessage, setSuccessMessage] = useState<string>("");

  const onSubmit = (data: FieldValues) => {
    mutate(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        formType: data.formType,
      },
      {
        onSuccess: (response) => {
          setSuccessMessage(response.message || "Form submitted successfully!");
          reset();
          // Clear success message after 5 seconds
          setTimeout(() => setSuccessMessage(""), 5000);
        },
        onError: (err) => {
          console.error("Form submission error:", err);
        },
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block mb-2 font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message as string}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block mb-2 font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message as string}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            rows={5}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message as string}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>

        {/* Success Message */}
        {isSuccess && successMessage && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error?.message || "An error occurred while submitting the form"}
          </div>
        )}
      </form>
    </div>
  );
};

// Example 2: Newsletter Subscription Form (simpler version)
export const NewsletterFormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      formType: "NEWSLETTER",
    },
  });

  const { mutate, isPending, isSuccess, isError, error } = useContactForm();
  const [message, setMessage] = useState<string>("");

  const onSubmit = (data: FieldValues) => {
    mutate(
      {
        email: data.email,
        formType: "NEWSLETTER",
      },
      {
        onSuccess: (response) => {
          setMessage(response.message || "Successfully subscribed!");
          reset();
          setTimeout(() => setMessage(""), 5000);
        },
      }
    );
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message as string}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>

        {isSuccess && message && (
          <p className="text-green-600 text-sm">{message}</p>
        )}

        {isError && (
          <p className="text-red-600 text-sm">
            {error?.message || "Failed to subscribe"}
          </p>
        )}
      </form>
    </div>
  );
};

