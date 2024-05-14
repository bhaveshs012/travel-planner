import React from "react";
import { Input, Button, TextArea } from "../../components/Form";
function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Share your Feedback
        </h2>
        <form>
          <Input label="Name" placeholder="Enter your name" className="my-4" />
          <Input
            label="Email"
            placeholder="Enter your email"
            className="my-4"
          />
          <TextArea label="Message" placeholder="Enter your message" />
          <Button
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
