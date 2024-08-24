import React from 'react'


const Email = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Connect with Me!</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">I am currenly looking for new opportunities, my inbox is always here to get back to you!</p>
                <div>
                    <form action="" className="flex flex-col gap-6">
                        <label htmlFor="email" className="text-white block text-sm font-medium">Your email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="example@email.com"
                        />
                        <label htmlFor="subject" className="text-white block text-sm font-medium">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Type something here..."
                        />
                        <label htmlFor="message" className="text-white block text-sm font-medium">Message</label>
                        <textarea 
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
                            placeholder="Talk about something here."
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Mesage
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Email