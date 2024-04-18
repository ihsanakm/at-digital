import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="laptop:w-[846px] tablet:w-[686px] w-full  flex justify-between  p-[24px] rounded-[7px] bg-[#FAF8FF] text-[22px] font-medium focus:outline-none mt-[15px] text-left "
      >
        <span className={isOpen?`text-[#6B3CC9]`:`text-[#000000]`}>{question}</span>
        <img src={isOpen?`/minus.png`:`/plus.png`} alt="" />
      </button>
      {isOpen && (
        <div className="laptop:w-[846px] tablet:w-[686px] font-normal text-[#6F6C90] text-[18px] pl-[24px] flex bg-[#FAF8FF] text-left">
          <p>{answer}</p>
        </div>
      )}
    </div>
    </>
  );
}

function FAQ() {
  const faqs = [
    { question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    {question:'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?', answer:'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?'}
  ];

  return (
    <div className=" flex justify-center py-8">
      <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
