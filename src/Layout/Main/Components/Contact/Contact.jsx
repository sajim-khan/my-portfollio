import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7c5tboq",
        "template_4rwjo4c",
        form.current,
        "VQUvbLZbtAJnfcKe3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  
  return (
    <div className="bg-[#162946]" id="contact">
      <p className="ps-16 pt-5 lg:pb-5 text-center text-5xl font-bold text-cyan-400 ">
        Contact
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 ps-16 pe-12  lg:pt-5 gap-16">
        {/* First column */}
        <div className="max-w-1/2 lg:ps-16 mx-auto flex flex-col h-full text-white pt-5">
          <p className="text-4xl font-bold font-serif my-4 mt-5">
            Let’s connect With Me
          </p>
          <p className="font-serif text-xl mb-2">
            I am here to help and answer any question you might have, I look
            forward to hearing from you.
          </p>

          <div className="pb-5">
            <p className="text-2xl pb-2 font-bold">
              Email :{" "}
              <span className="text-2xl font-bold text-cyan-300 mb-2">
                shossain1427@gmail.com
              </span>
            </p>

            <p className="text-2xl pb-2">
              <span className="font-bold">Mobile No</span> :{" "}
              <span className="text-cyan-300 font-bold">+8801623542890</span>
            </p>

            <p className="text-2xl pb-2">
              <span className="font-bold">Available</span> :{" "}
              <span className="text-cyan-300 font-serif font-bold">
                WhatsApp, Telegram
              </span>
            </p>
            <p className="text-3xl pb-2 font-bold">
              Address :{" "}
              <span className="text-2xl font-bold text-cyan-300 font-serif">
                Gazipur, Dhaka, Bangladesh
              </span>
            </p>
          </div>
        </div>
        {/* 2nd column */}
        <div className="max-w-1/2  mx-auto flex flex-col justify-center h-[500px] text-white">
          <div>
            <div className=" mx-auto text-black sm:px-4 md:px-8">
              <div className=" mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  //   onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div>
                    <label className="font-medium">Full Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                  <div className="h-[100px] pb-5">
                    <label className="font-medium">Message</label>
                    <textarea
                      required
                      type="text"
                      name="message"
                      className="w-full mt-2  px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  <input
                    className="w-full px-4 py-2 text-white font-medium bg-indigo-600  rounded-lg duration-150"
                    type="submit"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
