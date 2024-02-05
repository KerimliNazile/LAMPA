import React from 'react'
import Accordion from '../../Components/FAQs/Accardion'
import { Helmet } from 'react-helmet-async'
import HeaderFaq from '../../Components/FAQs/HeaderFaqs';

const Faqs = () => {
  const accordionItems = [
    {  title: '  How long does it take for home delivery?', content: 'We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.' },
    { title: '  Why am I being charged for delivery on my order when it states standard delivery is free?', content: 'All our delivery charges are pre-set by our courier company. We sell some oversized items which require a specialist courier company to fulfil the delivery, there is an additional charge for these. Also, our courier company consider some surcharge postcodes ‘Out of area’. There is an additional charge for these also. You can find a list of all [oversized items here] You can find a list of all' },
    { title: ' I haven’t received a dispatch email/email confirmation?', content: 'Please be aware an automated email is sent to you to the given email address when your order is dispatched. Please check all folders including you junk as it will come from a noreply email address. To ensure emails reach you, add the domain eurocarparts.com to your safe senders list.' },
    { title: ' Why does it not tell us on the website that the parts will be delivered by the branch?', content: 'Due to the delicacy of some parts we take extra care in the delivery of the item. These could include body panels and large bulky items. These are either available for collection from our branches or will be delivered to you through our branch network vehicles.' },
    { title: ' Can I collect from a local store?', content: 'We offer a reserve and collect service. This is available on the checkout page. Please be aware, if the product is not available in a local store, you are unable to reserve it' },
    { title: ' Do you deliver on Weekend?', content: 'No, our courier company do not offer the service to deliver on weekends currently.' },
    { title: 'Why can’t I select next day delivery?', content: 'We can only offer next day on goods we have in stock at our dispatch depot.' },
    { title: ' When will my card be charged for my order?', content: 'Due to the nature of our payments system, the full cost of the order will be charged to the card as soon as it is placed.' },
    // Add more sections as needed
  ];
  return (
    <div>
     <Helmet>
        <title>FAQs</title>
      </Helmet>
      <HeaderFaq/>
     <Accordion items={accordionItems} />
   
    </div>
  )
}

export default Faqs