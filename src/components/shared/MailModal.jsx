import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Input from "../html/Input";

const MailModal = ({ email }) => {
  const handleSendEmail = (e) => {
    const templateParams = {
      to_email: email,
      message: e.target.message.value,
      // Add other template parameters as needed
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then((result) => {
        toast.success("Email sent successfully!!");
        console.log(result.text);
        // Optionally, you can update your state or perform other actions after sending the email
      })
      .catch((error) => {
        toast.error("Can not send email");
        console.error(error.text);
      });
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <div className="modal-action flex flex-col ">
          <form onSubmit={handleSendEmail} method="dialog">
            <Input
              name="message"
              type="text"
              className="w-[100%] text-base"
              placeholder="message"
            />
            {/* if there is a button in form, it will close the modal */}
            <button className="text-white text-[12px] py-0 px-3 bg-red-600 ">
              Send
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default MailModal;
