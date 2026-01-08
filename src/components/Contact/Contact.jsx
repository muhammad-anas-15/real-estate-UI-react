import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3f058c6f-27be-43f2-93e6-babbf33bbf3f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-20 px-6 md:px-10 lg:px-32 w-full overflow-hidden bg-gray-50" 
            id="Contact"
        >
            <div className="max-w-4xl mx-auto"> 
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-800">
                    Contact <span className="underline underline-offset-8 decoration-2 decoration-blue-500">With Us</span>
                </h1>
                <p className="text-gray-500 text-center max-w-lg mx-auto mb-12 text-lg">
                    Ready to Make a Move? Let’s Build Your Future Together. 
                    Fill out the form below and we'll get back to you shortly.
                </p>

                <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col">
                                <label className="mb-2 font-semibold text-gray-700">Your Name</label>
                                <input 
                                    type="text" 
                                    name='Name' 
                                    placeholder="John Doe" 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400" 
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 font-semibold text-gray-700">Your Email</label>
                                <input 
                                    type="email" 
                                    name='Email' 
                                    placeholder="john@example.com" 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400" 
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-gray-700">Message</label>
                            <textarea 
                                placeholder="How can we help you?" 
                                name='Message' 
                                rows="5" 
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 resize-none" 
                                required
                            ></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button 
                                type="submit" 
                                disabled={result ? true : false}
                                className={`w-full md:w-auto px-12 py-4 rounded-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 ${result ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl'}`}
                            >
                                {result ? result : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact