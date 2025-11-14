// src/pages/CardPage/CardPage.jsx

import React from 'react';
import Card from '../../components/Card/Card.jsx'; 
import './Cardpage.css';
import FAQs from '../../components/faqs/Faqs.jsx';
const cardData =
[
  {
    "title": "CASHBACK SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/thumb-240759_SBI_Cashback_139-x-218px-01.png",
    "description": "Enjoy up to 5% cashback on your spending, with the rewards automatically credited to your account shortly after your next statement.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "UHP82QUT3KT",
    "annualFee": 1148
  },
  {
    "title": "Flipkart SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/fipkart-sbi-card/thumb-flipkart-sbi-card-front.png",
    "description": "Enjoy great rewards like up to 7.5% cashback on popular platforms, a Flipkart gift card, and waivers on your annual fee and fuel surcharges.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/rewards/flipkart-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "YJI74YJV2QV",
    "annualFee": 1754
  },
  {
    "title": "IndiGo SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/indigo-sbi-card-and-elite/SBI-IndiGo-Cards-Base-front.png",
    "description": "Enjoy generous benefits with 2500 Indigo Bluchip upon welcome and renewal, plus up to 3% earning on your IndiGo, hotel, and travel expenses.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/indigo-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "OMW03WSE9JL",
    "annualFee": 1670
  },
  {
    "title": "SimplyCLICK SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Simplyclick_349x218-Front.png",
    "description": "Enjoy a welcome Amazon gift card, enhanced reward points on online spending, and valuable e-vouchers for meeting annual online spend thresholds.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/shopping/simplyclick-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "WEJ93WHM6EQ",
    "annualFee": 1156
  },
  {
    "title": "Tata Neu Infinity SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/lifestyle/tata-neu-infitnity/tata-neu-infinity-face-blank-front.png",
    "description": "Enjoy a generous welcome gift, great savings on your Tata Neu and partner brand purchases, plus complimentary domestic lounge visits throughout the year.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/lifestyle/tata-neu-infinity-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "BYQ16KFI7FU",
    "annualFee": 1319
  },
  {
    "title": "SBI Card Miles Elite",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/MILES-Elite_139x218-px-Front.png",
    "description": "Enjoy generous travel benefits, including a welcome gift of 5,000 Travel Credits, high earning rates on travel spending, bonus credits for annual spends, and flexible redemption options for flights, hotels, or catalogue products.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/sbi-card-miles-elite.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "RGB68NOK4TI",
    "annualFee": 1348
  },
  {
    "title": "SBI Card ELITE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/thumb-Elite_349x218-px-Front.png",
    "description": "Enjoy a welcome e-Gift Voucher, complimentary movie tickets annually, and the opportunity to earn valuable Bonus Reward Points every year!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/lifestyle/sbi-card-elite.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "EEI19CFT0SP",
    "annualFee": 1105
  },
  {
    "title": "SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/thumb-Prime_349x218-px-Front.png",
    "description": "Enjoy generous benefits including Vouchers worth Rs. 14,000, 10X Reward Points on everyday spending, and complimentary access to airport lounges!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/rewards/sbi-card-prime.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "UOC17RCC3FY",
    "annualFee": 1804
  },
  {
    "title": "SBI Card PULSE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/240759_SBI_Pulse_349-x-218px-01.png",
    "description": "Enjoy valuable perks like a Noise Smartwatch, memberships to FITPASS PRO and Netmeds First, 5X Reward Points on select purchases, and an annual E-Voucher worth Rs.1,500!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/lifestyle/sbi-card-pulse.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "XRE14WZH2HM",
    "annualFee": 1865
  },
  {
    "title": "Tata Neu Plus SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/lifestyle/tata-neu-plus/tata-neu-plus-face-blank-front.png",
    "description": "Enjoy a welcome gift of 499 NeuCoins, earn up to 2% back as NeuCoins on spending, and receive complimentary domestic lounge access.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/lifestyle/tata-neu-plus-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "TPS28YSS4XN",
    "annualFee": 1749
  },
  {
    "title": "Doctor's SBI Card (in association with IMA)",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/doctor-ima-card-face.png",
    "description": "Enjoy substantial coverage, valuable e-Gift Vouchers upon joining and annual spending milestones, and accelerated Reward Points on specific purchases.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "OSV77JST6SY",
    "annualFee": 1893
  },
  {
    "title": "SBI Card ELITE Advantage",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Elite_349x218-px-Front.png",
    "description": "Enjoy great perks including a welcome e-gift voucher, complimentary movie tickets, and valuable bonus reward points every year.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "YXX83DTK5CF",
    "annualFee": 1501
  },
  {
    "title": "Doctor's SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Doctor_349x218-px-Front.png",
    "description": "Enjoy significant perks like Professional Indemnity Insurance, a joining e-Gift Voucher, 5X Reward Points on specific spending categories, and an annual e-Gift Voucher for meeting spending goals.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "IUA58RYU5OW",
    "annualFee": 1183
  },
  {
    "title": "PhonePe SBI Card SELECT BLACK",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/phonepe/select/PhonePe-SBI-select-f.png",
    "description": "Enjoy a generous welcome gift, earn substantial reward points on your spending, and have your renewal fee reversed by reaching the spend goal.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "LZV66GZE6DX",
    "annualFee": 1850
  },
  {
    "title": "PhonePe SBI Card PURPLE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/phonepe/base/thumb-PhonePe-SBI-Base-f.png",
    "description": "Enjoy a Rs. 500 PhonePe Gift card as a welcome gift, plus earn valuable Reward Points on every Rs. 100 spent on PhonePe, Pincode, and other online purchases!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "OYI63NMK4QW",
    "annualFee": 1009
  },
  {
    "title": "OLA Money SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/ola-card/ola-card-face-front.png",
    "description": "Enjoy generous cash back rewards on all your spending, including 7% back on Ola rides, plus pay no annual fee for the first year!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/ola-money-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "LSE48KPV8WS",
    "annualFee": 1743
  },
  {
    "title": "Apollo SBI Card SELECT",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/apollo-sbi-card-select/thumb-apollo-cardface-front.png",
    "description": "Enjoy a welcome e-Gift, Apollo Circle Benefits, a 10% value back on Apollo 24|7 purchases, and a complimentary FITPASS PRO Membership upon activation.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/rewards/apollo-sbi-card-select.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "BOV86SRN4YT",
    "annualFee": 1386
  },
  {
    "title": "Apollo SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/card-flip/sbi-platinum-card.png",
    "description": "Enjoy a warm welcome with 500 Reward Points, complimentary OneApollo Gold Tier Membership, up to 10% instant discounts, and triple Reward Points on Apollo services.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "EGF29JDG0FE",
    "annualFee": 1033
  },
  {
    "title": "SBI Card PRIME Advantage",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Prime_349x218-px-Front.png",
    "description": "Enjoy generous rewards including e-Gift Vouchers worth Rs. 14,000, high reward points on popular spending categories, and complimentary airport lounge access to enhance your lifestyle and travel experience.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "LFS29DKV5MK",
    "annualFee": 1598
  },
  {
    "title": "Tata Card SELECT",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/card-faces/tata-platinum-dec.jpg",
    "description": "Enjoy generous gift vouchers, extra reward points on everyday spending, and up to 5% value back to enhance your shopping experience!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "NJL55HXK1MK",
    "annualFee": 1234
  },
  {
    "title": "Tata Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/card-faces/tata-titanium-dec.jpg",
    "description": "Enjoy a generous welcome bonus and significant value back on your spending at Tata Outlets, Croma, and grocery/department stores.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "CEO68LJM6UR",
    "annualFee": 1371
  },
  {
    "title": "Paytm SBI Card SELECT",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Paytm-SBI-Select_1.png",
    "description": "Enjoy generous rewards, including complimentary membership, reward points, and cashback up to 5% on your Paytm spending and other purchases.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/paytm-sbi-card-select.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "PCP18PSO4XO",
    "annualFee": 1258
  },
  {
    "title": "Paytm SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Paytm-SBI-Base-349x218-01.png",
    "description": "Enjoy complimentary Paytm First Membership and earn up to 3% cashback on your Paytm travel and app purchases, plus 1% cashback on other spends.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/paytm-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "MPI94GJK6EV",
    "annualFee": 1457
  },
  {
    "title": "Landmark Rewards SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/value-savings/landmark/landmark-prime/Landmark-Prime-139x218-front.png",
    "description": "Enjoy generous rewards, starting with Rs. 3,000 worth of points upon fee payment, and continue earning high reward points on shopping, dining, movies, and international spends, with a bonus for reaching high annual spending.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/shopping/landmark-prime-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "SRI72NMO6KR",
    "annualFee": 1133
  },
  {
    "title": "Landmark Rewards SBI Card SELECT",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/value-savings/landmark/landmark-select/Landmark-Select-front.png",
    "description": "You can enjoy excellent rewards, including 6,000 bonus points worth Rs. 1,500 annually and high earning rates of up to 15 Reward Points per Rs. 100 on various shopping, dining, and entertainment expenses.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/shopping/landmark-select-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "SRF42CFJ7GC",
    "annualFee": 1370
  },
  {
    "title": "Landmark Rewards SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/value-savings/landmark/landmark-base/Landmark-Base-139x218-front.png",
    "description": "Enjoy great value and earn reward points quickly across your favorite stores, dining, movies, and international spending, with a bonus for meeting your annual spending milestone.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/shopping/landmark-base-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "DFQ55PXA5XJ",
    "annualFee": 1983
  },
  {
    "title": "Titan SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Titan-349x218-03.png",
    "description": "Enjoy a generous 12000 Reward Points welcome gift and earn significant value back or cashback on your quarterly purchases across a variety of popular brands.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/shopping/titan-sbi-card1.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "YSR05DET1VU",
    "annualFee": 1264
  },
  {
    "title": "Reliance SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/rel-base.png",
    "description": "Enjoy up to Rs 500 in Reliance Retail Vouchers and a Bouquet of Reliance Discount Vouchers up to Rs 3200, plus the chance for annual spend reversals, just for using your card.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/shopping/reliance-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "BPW57TZB7LV",
    "annualFee": 1927
  },
  {
    "title": "Reliance SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/rel-prime.png",
    "description": "Enjoy generous welcome gifts, additional discount vouchers, annual spending vouchers, and rewarding points for your purchases at Reliance Retail Stores.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/shopping/reliance-premium-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "KKL85YSY7IT",
    "annualFee": 1049
  },
  {
    "title": "SBI Card Unnati",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/UNNATI_349x218-px-front.png",
    "description": "Enjoy four years free, earn rewards on your spending, and get cashback and fuel savings when you use your SBI Card Unnati.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "USQ69JBI8DQ",
    "annualFee": 1231
  },
  {
    "title": "SimplyCLICK Advantage SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Simplyclick-Advantage_349x218-front.png",
    "description": "Enjoy a welcome gift card, multiplied reward points on online spending, and valuable e-vouchers based on your annual online spends.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "VWA15MMN4VY",
    "annualFee": 1522
  },
  {
    "title": "SimplySAVE Advantage SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/SimplySave-Advantage_349x218-px-front.png",
    "description": "Enjoy excellent rewards on everyday spending categories like dining and groceries, along with helpful annual fee and fuel surcharge waivers.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "QYQ91RPB6JI",
    "annualFee": 1532
  },
  {
    "title": "Shaurya SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Shaurya2_349x218-px_front.png",
    "description": "Enjoy multiplied reward points on everyday spending, save on your annual fee with qualifying yearly purchases, and benefit from fuel surcharge waivers nationwide.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "JKV47UIK4VB",
    "annualFee": 1596
  },
  {
    "title": "Shaurya Select SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Shaurya_349x218-px_Front.png",
    "description": "Enjoy a free first year and maximize your spending with 10 Reward Points on every Rs. 100 spent in key categories, plus receive a Rs. 7,000 e-Gift Voucher when you reach Rs. 5 Lakhs in annual spending.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "FDB42FBJ8VU",
    "annualFee": 1668
  },
  {
    "title": "SimplySAVE SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/thumb-SimplySave_349x218-px-Front.png",
    "description": "Enjoy generous rewards on everyday spending, a welcome bonus, and fee waivers to maximize your savings.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/shopping/simplysave-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "QMN48BBN1LR",
    "annualFee": 1443
  },
  {
    "title": "IndiGo SBI Card ELITE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/indigo-sbi-card-and-elite/SBI-IndiGo-Cards-Elite-front.png",
    "description": "Enjoy generous welcome rewards and significant savings on IndiGo spending, fuel, and foreign transactions.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/indigo-sbi-card-elite.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "NAA41MRJ0MR",
    "annualFee": 1103
  },
  {
    "title": "KrisFlyer SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/krisflyer-sbi-card/krisflyer-front.png",
    "description": "Enjoy 3000 Krisflyer Welcome Miles, accelerated miles on your travel and international spending, and four complimentary domestic lounge benefits annually.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/krisflyer-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "YRB12FMY6UN",
    "annualFee": 1891
  },
  {
    "title": "KrisFlyer SBI Card Apex",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/krisflyer-sbi-card/krisflyer-apex-front-blank.png",
    "description": "Enjoy a generous welcome gift of 10,000 KrisFlyer Miles, plus earn up to 10 miles per Rs 200 spent on SIA Group, and continue earning miles on all your other eligible purchases.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/krisflyer-sbi-card-apex.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "PCN64ZQC7AR",
    "annualFee": 1012
  },
  {
    "title": "SBI Card MILES PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/MILES-Prime_139x218-px-Front.png",
    "description": "Enjoy a generous welcome gift of 3,000 Travel Credits, earn up to 4 Travel Credits per Rs.200 spent on travel, and unlock 10,000 bonus credits annually, all convertible into air miles, hotel points, or travel bookings.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/sbi-card-miles-prime.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "CGG45CXS7NW",
    "annualFee": 1393
  },
  {
    "title": "SBI Card MILES",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/MILES_139x218-px-front.png",
    "description": "Enjoy generous travel benefits, including a welcome gift, easy earning on travel spends, bonus credits for annual spending, and flexible redemption options like Air Miles, Hotel Points, or travel bookings.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/sbi-card-miles.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "XIH39OSR7LP",
    "annualFee": 1197
  },
  {
    "title": "BPCL SBI Card OCTANE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/octane-front.png",
    "description": "Enjoy generous rewards on everyday spending, including up to 25X points on fuel and complimentary airport lounge access!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/fuel/bpcl-sbi-card-octane.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "VOR43ONC4FI",
    "annualFee": 1403
  },
  {
    "title": "IRCTC SBI Card Premier",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/irctc-premiere.png",
    "description": "Enjoy significant savings and rewards on railway travel, including welcome and milestone benefits, and waived transaction charges.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/irctc-premier-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "ZCL76ULF4VS",
    "annualFee": 1329
  },
  {
    "title": "Etihad Guest SBI Premier Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/etihad-prime-front.png",
    "description": "Enjoy a welcome gift of 5,000 Etihad Guest Miles, instant Gold Tier Status, 3X miles on Etihad spending, and up to 6,000 annual bonus miles through your spending!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "CRW70RUQ7VP",
    "annualFee": 1928
  },
  {
    "title": "Etihad Guest SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/etihad-bank-front-base.png",
    "description": "You can earn thousands of Etihad Guest Miles, achieve complimentary Silver Tier Status, and enjoy triple miles on all Etihad spending.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "IXK75QQB6FO",
    "annualFee": 1993
  },
  {
    "title": "BPCL SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bpcl-plat.png",
    "description": "Enjoy a welcome bonus and significantly higher reward points on your fuel, grocery, department store, movie, and dining expenses!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/fuel/bpcl-sbi-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "FSK18CSL1EA",
    "annualFee": 1957
  },
  {
    "title": "Club Vistara SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/vistara-prime-front-foinal.png",
    "description": "Enjoy premium travel and exclusive membership perks, plus bonus vouchers, simply by using this card.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "HWF73ZHH1EW",
    "annualFee": 1388
  },
  {
    "title": "Club Vistara SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/vistara-prime-front.png",
    "description": "Enjoy great travel perks like a welcome Economy ticket voucher, earning more vouchers including a hotel stay upon spending milestones, and flexibility with up to four free flight cancellations.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "IJS08WRR4HM",
    "annualFee": 1842
  },
  {
    "title": "Air India SBI Signature Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Air-India-Signature-SBI-Card-349x218-02.png",
    "description": "You can earn substantial rewards, including a large welcome bonus, annual points, up to 10 points per Rs. 100 spent on Air India tickets, and up to 1,00,000 bonus points annually based on your spending.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "AKF50NII3ST",
    "annualFee": 1952
  },
  {
    "title": "Air India SBI Platinum Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Air-India-Platinum-front.png",
    "description": "Enjoy a generous welcome gift of 5,000 Reward Points, annual gifts, ongoing points for Air India spending, and the potential for up to 15,000 bonus points annually based on your spending.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "JAL42DIN7BT",
    "annualFee": 1695
  },
  {
    "title": "IRCTC SBI Platinum Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/irctc-plat-front.png",
    "description": "Enjoy significant savings and value back on your railway ticket purchases, plus receive bonus points and transaction waivers for added convenience.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/travel/irctc-sbi-platinum-card.dcr",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "JKT31RVS7DA",
    "annualFee": 1759
  },
  {
    "title": "Bank of Maharashtra SBI Card ELITE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/bom-cards/bom-elite-face.png",
    "description": "Enjoy over Rs. 23,500 in annual value, including a welcome e-Gift Voucher, free movie tickets, bonus rewards, and a complimentary Priority Pass membership!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "OUK80KRD7EU",
    "annualFee": 1504
  },
  {
    "title": "Bank of Maharashtra SimplySAVE SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/bom-cards/bom-save-face.png",
    "description": "Enjoy great savings and rewards on dining, movies, shopping, and fuel with bonus points and waived annual fees based on your spending.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "FRN30XCQ1LJ",
    "annualFee": 1735
  },
  {
    "title": "Bank of Maharashtra SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/bom-cards/bom-prime-face.png",
    "description": "Enjoy significant value with up to Rs. 14,000 in gift vouchers, earn great rewards on everyday spending, and relax with complimentary airport lounge access.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "BNH06CCV2PN",
    "annualFee": 1081
  },
  {
    "title": "PSB SBI Card ELITE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/PSB%20ELITE%20Card%20Front.png",
    "description": "Enjoy a generous welcome gift, annual movie tickets, valuable bonus reward points, and a complimentary Priority Pass membership every year.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "UPD61NTY5KL",
    "annualFee": 1077
  },
  {
    "title": "PSB SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/PSB%20PRIME%20Card%20Front.png",
    "description": "Enjoy generous rewards from joining bonuses and gift vouchers to 10 points per Rs. 100 on everyday purchases, plus complimentary international and domestic airport lounge access.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 5,
    "id": "PCO66LIJ4UY",
    "annualFee": 1817
  },
  {
    "title": "PSB SimplySAVE SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bank/PSB%20SimplySAVE%20Card%20Front.png",
    "description": "Enjoy rewards on everyday spending like dining and movies, a bonus on initial spends, and savings on annual fees and fuel.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "LFC14DAT1MM",
    "annualFee": 1928
  },
  {
    "title": "UCO Bank SBI Card ELITE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/UCO%20ELITE%20Card%20Front.png",
    "description": "Enjoy a range of valuable perks, including gift vouchers, free movie tickets, bonus reward points, and a complimentary Priority Pass membership, adding up to significant annual savings and exclusive access.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "QEW92NUM6OI",
    "annualFee": 1338
  },
  {
    "title": "UCO Bank SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/UCO%20PRIME%20Card%20Front.png",
    "description": "Enjoy amazing value with gift vouchers worth Rs. 14,000, earn 10 Reward Points on everyday spending, and relax with complimentary airport lounge access worldwide.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "SHY22XSC6WN",
    "annualFee": 1827
  },
  {
    "title": "UCO Bank SimplySAVE SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/UCO%20SimplySAVE%20Card%20Front.png",
    "description": "Enjoy generous rewards, including bonus points and high earning rates on dining and groceries, with the potential for annual fee reversal and a fuel surcharge waiver.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "GRQ21KXB3RC",
    "annualFee": 1998
  },
  {
    "title": "Central Bank of India SBI Card ELITE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CBI%20ELITE%20Card%20Front.png",
    "description": "Enjoy a generous welcome gift, annual movie tickets, valuable bonus reward points, and exclusive Priority Pass access that adds up to great value every year.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "HBZ56WTP9FW",
    "annualFee": 1489
  },
  {
    "title": "Central Bank of India SBI Card Prime",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CBI%20PRIME%20Card%20Front.png",
    "description": "Enjoy up to Rs. 14,000 in gift vouchers, earn great rewards on common spending, and travel in comfort with complimentary airport lounge access.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "BQW44LDB8UU",
    "annualFee": 1055
  },
  {
    "title": "Central Bank Of India SimplySave SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CBI%20SimplySAVE%20Card%20Front.png",
    "description": "Enjoy 2,000 bonus points, earn up to 10 Reward Points per Rs. 150 on common spending categories, get your annual fee reversed, and save with a 1% fuel surcharge waiver.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "XFH96EYN6CZ",
    "annualFee": 1814
  },
  {
    "title": "City Union Bank SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CUB%20PRIME%20Card%20Front.png",
    "description": "Enjoy generous gift vouchers, high reward points on your everyday spending, and complimentary access to airport lounges both internationally and domestically!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "POK56AKY6SB",
    "annualFee": 1294
  },
  {
    "title": "City Union Bank SimplySAVE SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CUB%20SimplySAVE%20Card%20Front.png",
    "description": "You can earn bonus points, high reward points on popular spending categories, qualify for an annual fee reversal, and enjoy a fuel surcharge waiver.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "DFJ44QMS5NW",
    "annualFee": 1434
  },
  {
    "title": "Karnataka Bank SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Karnataka%20PRIME%20Card%20Front.png",
    "description": "Enjoy significant value from joining, gift vouchers, excellent rewards on daily spending, and relaxing airport lounge access.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "EHA14FPC4LY",
    "annualFee": 1637
  },
  {
    "title": "Karnataka Bank SimplySAVE SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/KB%20SimplySAVE%20Card%20Front.png",
    "description": "Enjoy a welcome bonus, high rewards on everyday spending like dining and groceries, and savings through fee waivers and reversals.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "RGT13XZO5OE",
    "annualFee": 1746
  },
  {
    "title": "South Indian Bank SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/kvb-faces/South-Indian-Bank-PRIME.png",
    "description": "Enjoy generous rewards including up to Rs. 14,000 in gift vouchers, great reward points on common purchases, and complimentary airport lounge access.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "HPV01DJM2QJ",
    "annualFee": 1965
  },
  {
    "title": "South Indian Bank SBI Platinum Credit Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bank/SIB%20Platinum%20Card%20Front.png",
    "description": "Enjoy generous gift vouchers totaling Rs. 12,000 and 5X reward points on dining, departmental store, and international spending!",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "NYL20XPN8DU",
    "annualFee": 1693
  },
  {
    "title": "South Indian Bank SimplySAVE SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bank/SIB%20SimplySAVE%20Card%20Front.png",
    "description": "Enjoy generous bonus points, high rewards on everyday spending categories like dining and movies, and the potential to waive your annual fees, plus a 1% fuel surcharge waiver.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "RMQ30KDO6SY",
    "annualFee": 1835
  },
  {
    "title": "KVB SBI Card ELITE",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/kvb-faces/KVB-ELITE.png",
    "description": "Enjoy fantastic perks including an e-Gift Voucher upon joining, free movie tickets every year, valuable bonus reward points, and complimentary Priority Pass access.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "XTR60XIY9LO",
    "annualFee": 1631
  },
  {
    "title": "KVB SBI Card PRIME",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/kvb-faces/KVB-PRIME.png",
    "description": "Enjoy generous gift vouchers, high reward points on popular purchases, and free access to airport lounges both internationally and domestically.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "OOL87CKD7SG",
    "annualFee": 1666
  },
  {
    "title": "KVB SimplySAVE SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/kvb-faces/KVB-SimplySAVE.png",
    "description": "You can earn thousands of bonus points and ongoing rewards on your everyday spending, plus save money with an annual fee reversal and a fuel surcharge waiver.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "HWE31TDY6RC",
    "annualFee": 1213
  },
  {
    "title": "KVB SBI Signature Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/KVB%20Signature%20Card%20Front.png",
    "description": "Enjoy great perks including a welcome gift voucher, monthly movie discounts, bonus reward points, and 24/7 concierge service for enhanced convenience and savings.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "OQR20QDX2BR",
    "annualFee": 1468
  },
  {
    "title": "Karur Vysya Bank - SBI Platinum Credit Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bank/KVB%20Platinum%20Card%20Front.png",
    "description": "Enjoy generous rewards including up to Rs. 12,000 in gift vouchers and 5X reward points on dining, departmental store, and international spends.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 4,
    "id": "LBK27EWS1GD",
    "annualFee": 1397
  },
  {
    "title": "Karur Vysya Bank - SBI Card",
    "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/kvb-gold-face.png",
    "description": "Enjoy up to 2,000 bonus reward points and annual fee reversal, plus a 1.7% value back on grocery and departmental store spends.",
    "applyLink": "https://www.sbicard.com/en/eapply/eapplyform.page?path=personal/credit-cards/",
    "bankLogo": "https://logo.clearbit.com/sbi.co.in",
    "rating": 3,
    "id": "SPG75PFN2GO",
    "annualFee": 1962
  }
]
function CardPage() {
  return (
    <>
    <div className="card-page">
      <div className="header">
        <h1 className='tagline'>Discover. Decide. Delight.</h1>
      </div>
      <div className="cards">
      {/* This is the magic. We map over the data array... */}
      {cardData.map(card => (
        
        // ...and render one "Card" component for each item.
        // We pass the card object's properties as props.
        <Card
          key={card.id} // "key" is a special prop React needs for lists
          {...card}     // "{...card}" is a fast way to pass all properties
        />
        
      ))}</div>
    </div>
    <FAQs/>
    </>
  );
}

export default CardPage;
