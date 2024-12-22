import Link from "next/link";

export default function faq() {
  let FAQS = [
    {
      question: "How do I place an order?",
      answer: "You can view all our products from the homepage at www.experienceEgypt.com, or by simply downloading our App. You may also visit our &ldquo;where to buy&rdquo; page on the website for store addresses. Select your desired experienceEgyptpiece and click on &ldquo;Add to Cart&rdquo;. Once you've added all items, it's time to check out under &ldquo;Cart&rdquo;. Sign into your account or, if you haven&rsquo;t created one, you can sign up and then proceed to checkout. Enter your full name, email, contact phone number and detailed address and all required delivery details; then choose your payment method to complete your order. If you need assistance, please email us at Care@experienceEgypt.com.",
    },
    {
      question: "Can I place an order over the phone?",
      answer: "Sure! Our friendly Customer Care Advisors will be happy to assist you with placing your order. You can reach us at: Care@experienceEgypt.com and we will be happy to get in touch with you.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "If you wish to change, edit or cancel your order prior to dispatch, you can email our customer care team at Sales@experienceEgypt.com or Care@experienceEgypt.com.",
    },
    {
      question: "How can I track my order?",
      answer: "If you wish to change, edit or cancel your order prior to dispatch, you can email our customer care team at Sales@experienceEgypt.com or Care@experienceEgypt.com.",
    },
    {
      question: "How can I contact experienceEgypt?",
      answer: "For deliveries, returns & exchanges, contact us at: sales@experienceEgypt.com or care@experienceEgypt.com For repairs & warranties, contact us at: care@experienceEgypt.com For wholesale and stocking inquiries contact us at: Internationalsales@experienceEgypt.com For PR & Collaborations: Press@experienceEgypt.com For Job applications contact us at: Talent@experienceEgypt.com Our customer care team will be available to help you from Sundays to Thursdays from 10:00 AM to 5:00 PM GMT+2",
    },
    {
      question: "How can I receive news about experienceEgypt?",
      answer: "You can subscribe to our newsletter and follow experienceEgypton social media platforms. Facebook: https://facebook.com/experienceEgypt INSTAGRAM: https://instagram.com/experienceEgypt",
    },
    {
      question: "How can I subscribe/unsubscribe to the newsletter?",
      answer: "experienceEgypt’s newsletter allows you to stay up-to-date with all the latest news, collections and promotions. You can manage your newsletter subscription from your account settings page and unsubscribe at any time from the footer of any newsletter you receive.",
    },
    {
      question: "How accurate is color display on the internet?",
      answer: "Our product shots are true to image and will only vary when displayed under different lighting. Please note that styled shots may show a difference in color due to adjusted lighting for the shoot.",
    },
    {
      question: "Are all of your products available on the website? Where do I find items that I have seen in the press or magazines?",
      answer: "For inquiries about specific experienceEgyptproducts, please include a photo of the requested item, and send it to care@experienceEgypt.com, and we shall get back to you with further details in regards to availability.",
    },
    {
      question: "How can I return or exchange an experienceEgyptproduct?",
      answer: "ONLINE PURCHASES: You can request a return within 14 days from the date of delivery. Simply complete the return form online or email us your request at Care@experienceEgypt.com. We will arrange a pick up with an additional shipping fee depending on your locati Note: Online purchases cannot be returned at any of the experienceEgyptstores. Shipping fees will be excluded from the refunds. Once your return is accepted at our quality department, we will proceed with your refund. IN STORE PURCHASES: You can return your purchase within 14 days from the date of receipt. Simply complete the return request in our After Sales Assistance form in store and drop off your order in the original packaging, along with the purchase invoice. (This policy applies to orders bough from experienceEgyptonly) If the above conditions are met, you will receive a refund for the returned products. For more details, please check our Returns & Exchanges policy.",
    },
    {
      question: " Can I change or return an item gifted to me by someone else?",
      answer: "You can always return or exchange with experienceEgypt if you meet the below requirements:",
    },
    {
      question: "How do I repair an experienceEgyptitem?",
      answer: "If your experienceEgyptproduct requires any repairs, kindly email our customer care team at care@experienceEgypt.com. Our specialists will be happy to guide you. For all information & details, please check our warranty & repairs policy.",
    },
    {
      question: "How do I look after my experienceEgyptitem?",
      answer: "Please refer to our care instruction policy for further details. You can also refer back to the care instructions card inserted with every product.",
    },
    {
      question: "Do you accept international credit card?",
      answer: "We accept the following international credit and debit cards: (Visa Debit/Credit, Master Debit/Credit, American Express). All payments are processed through a secure checkout system; Amazon Payment Services.",
    },
    {
      question: "Is my payment secure?",
      answer: "All payments are processed through Amazon Payment Services which is certified to the latest PCI DSS standards. Your data privacy will be governed by the Amazon Payment Services Privacy Policy.",
    },
    {
      question: "Will I be charged for tax?",
      answer: "For orders shipped in Egypt, there are no customs duties.",
    },
    {
      question: "Are delivery charges refundable?",
      answer: "Original shipping charges incurred at the time of purchase are non-refundable.",
    },
    {
      question: "How do I change my delivery address?",
      answer: "If you need to change or to adjust your provided delivery address, please reply back to your order’s confirmation email with an updated delivery address or email us at  sales@experienceEgypt.com or care@experienceEgypt.com before your order gets fulfilled and dispatched.",
    },
    {
      question: "When can I expect delivery of my order?",
      answer: "Deliveries are normally scheduled from Sundays to Thursdays, between 10 a.m. and 6 p.m. Orders take 2 – 7 business days to be delivered.(Delivery time varies in certain regions).",
    },
    {
      question: "Is there a receipt for delivery?",
      answer: "Yes, an electronic receipt will be emailed to you within one hour of your purchase.",
    },
    {
      question: "What should I do if I have not received the order?",
      answer: "In case your order took more than 4 working days, kindly email us at  care@experienceEgypt.com and we will be happy to update you on your order’s status.",
    },
    {
      question: " Are there any shipping restrictions? Are there any restricted delivery addresses? ",
      answer: "If you did not find your shipping destination in the provided list, please email us at care@experienceEgypt.com",
    },
    {
      question: "Shipping times & costs?",
      answer: "We ship via DHL Express and via our in-house courier service in Cairo only. Deliveries are normally made Sundays through Thursdays, between 10 a.m. and 6 p.m. Product(s) will typically arrive within 2 – 7 business days maximum depending on your location.",
    },
    {
      question: " What do I do if I have an issue concerning my order?",
      answer: "If you face any problem with your purchase, please do not hesitate to email us at care@experienceEgypt.com immediately. Kindly make sure to send a photo of your purchase if applicable. You have up to 14 days from your purchase date to exchange or to refund a defected item.",
    },
  ];
  return (
    <div className="pt-6 pb-6 grid grid-cols-1 gap-4">
      <div
        className="card bg-base-100 rounded-none shadow-xl"
        style={{ width: "100%" }}
      >
        <div className="card-body">
          <h1 className="card-title text-blue-800 text-3xl font-bold flex justify-center">
            FAQ
          </h1>
          <ul>
            {FAQS.map((f) => {
              return (
                <li className="py-1" key={f.question}>
                  <div tabIndex={0} className="collapse  collapse-arrow">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                      <p className="text-gray-800">{f.question}</p>
                    </div>
                    <div className="collapse-content">
                      <p className="text-gray-800 text-xl py-1">{f.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
