// src/pages/CardPage/CardPage.jsx

import React from 'react';
import Card from '../../components/Card/Card.jsx'; 
import './CardPage.css';
import FAQs from '../../components/faqs/Faqs.jsx';

const cardData = 
[
 {
   "title": "Air India SBI Platinum Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Air-India-Platinum-front.png",
   "rating": 4,
   "id": "UHP82QUT3KT",
   "description": "Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna.",
   "annualFee": 1148
 },
 {
   "title": "Air India SBI Signature Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Air-India-Signature-SBI-Card-349x218-02.png",
   "rating": 4,
   "id": "YJI74YJV2QV",
   "description": "Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo",
   "annualFee": 1754
 },
 {
   "title": "Apollo SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/card-flip/sbi-platinum-card.png",
   "rating": 5,
   "id": "OMW03WSE9JL",
   "description": "urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque",
   "annualFee": 1670
 },
 {
   "title": "Apollo SBI Card SELECT",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/apollo-sbi-card-select/thumb-apollo-cardface-front.png",
   "rating": 5,
   "id": "WEJ93WHM6EQ",
   "description": "tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue",
   "annualFee": 1156
 },
 {
   "title": "Bank of Maharashtra SBI Card ELITE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/bom-cards/bom-elite-face.png",
   "rating": 4,
   "id": "BYQ16KFI7FU",
   "description": "fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada",
   "annualFee": 1319
 },
 {
   "title": "Bank of Maharashtra SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/bom-cards/bom-prime-face.png",
   "rating": 4,
   "id": "RGB68NOK4TI",
   "description": "nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu,",
   "annualFee": 1348
 },
 {
   "title": "Bank of Maharashtra SimplySAVE SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/bom-cards/bom-save-face.png",
   "rating": 4,
   "id": "EEI19CFT0SP",
   "description": "ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna.",
   "annualFee": 1105
 },
 {
   "title": "BPCL SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bpcl-plat.png",
   "rating": 3,
   "id": "UOC17RCC3FY",
   "description": "eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy",
   "annualFee": 1804
 },
 {
   "title": "BPCL SBI Card OCTANE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/octane-front.png",
   "rating": 4,
   "id": "XRE14WZH2HM",
   "description": "Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem,",
   "annualFee": 1865
 },
 {
   "title": "CASHBACK SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/thumb-240759_SBI_Cashback_139-x-218px-01.png",
   "rating": 3,
   "id": "TPS28YSS4XN",
   "description": "ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis",
   "annualFee": 1749
 },
 {
   "title": "Central Bank of India SBI Card ELITE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CBI%20ELITE%20Card%20Front.png",
   "rating": 5,
   "id": "OSV77JST6SY",
   "description": "nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa.",
   "annualFee": 1893
 },
 {
   "title": "Central Bank of India SBI Card Prime",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CBI%20PRIME%20Card%20Front.png",
   "rating": 4,
   "id": "YXX83DTK5CF",
   "description": "enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim",
   "annualFee": 1501
 },
 {
   "title": "Central Bank Of India SimplySave SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CBI%20SimplySAVE%20Card%20Front.png",
   "rating": 4,
   "id": "IUA58RYU5OW",
   "description": "dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque",
   "annualFee": 1183
 },
 {
   "title": "City Union Bank SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CUB%20PRIME%20Card%20Front.png",
   "rating": 3,
   "id": "LZV66GZE6DX",
   "description": "vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor",
   "annualFee": 1850
 },
 {
   "title": "City Union Bank SimplySAVE SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/CUB%20SimplySAVE%20Card%20Front.png",
   "rating": 4,
   "id": "OYI63NMK4QW",
   "description": "Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
   "annualFee": 1009
 },
 {
   "title": "Club Vistara SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/vistara-prime-front.png",
   "rating": 4,
   "id": "LSE48KPV8WS",
   "description": "id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie",
   "annualFee": 1743
 },
 {
   "title": "Club Vistara SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/vistara-prime-front-foinal.png",
   "rating": 4,
   "id": "BOV86SRN4YT",
   "description": "lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero",
   "annualFee": 1386
 },
 {
   "title": "Doctor's SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Doctor_349x218-px-Front.png",
   "rating": 3,
   "id": "EGF29JDG0FE",
   "description": "nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis",
   "annualFee": 1033
 },
 {
   "title": "Doctor's SBI Card (in association with IMA)",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/doctor-ima-card-face.png",
   "rating": 5,
   "id": "LFS29DKV5MK",
   "description": "lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis",
   "annualFee": 1598
 },
 {
   "title": "Etihad Guest SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/etihad-bank-front-base.png",
   "rating": 3,
   "id": "NJL55HXK1MK",
   "description": "convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus.",
   "annualFee": 1234
 },
 {
   "title": "Etihad Guest SBI Premier Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/etihad-prime-front.png",
   "rating": 4,
   "id": "CEO68LJM6UR",
   "description": "aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor",
   "annualFee": 1371
 },
 {
   "title": "Flipkart SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/fipkart-sbi-card/thumb-flipkart-sbi-card-front.png",
   "rating": 3,
   "id": "PCP18PSO4XO",
   "description": "adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque",
   "annualFee": 1258
 },
 {
   "title": "IndiGo SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/indigo-sbi-card-and-elite/SBI-IndiGo-Cards-Base-front.png",
   "rating": 5,
   "id": "MPI94GJK6EV",
   "description": "risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum",
   "annualFee": 1457
 },
 {
   "title": "IndiGo SBI Card ELITE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/indigo-sbi-card-and-elite/SBI-IndiGo-Cards-Elite-front.png",
   "rating": 5,
   "id": "SRI72NMO6KR",
   "description": "Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus",
   "annualFee": 1133
 },
 {
   "title": "IRCTC SBI Card Premier",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/irctc-premiere.png",
   "rating": 3,
   "id": "SRF42CFJ7GC",
   "description": "et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus.",
   "annualFee": 1370
 },
 {
   "title": "IRCTC SBI Platinum Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/irctc-plat-front.png",
   "rating": 5,
   "id": "DFQ55PXA5XJ",
   "description": "aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
   "annualFee": 1983
 },
 {
   "title": "Karnataka Bank SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Karnataka%20PRIME%20Card%20Front.png",
   "rating": 3,
   "id": "YSR05DET1VU",
   "description": "vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam",
   "annualFee": 1264
 },
 {
   "title": "Karnataka Bank SimplySAVE SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/KB%20SimplySAVE%20Card%20Front.png",
   "rating": 4,
   "id": "BPW57TZB7LV",
   "description": "facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer",
   "annualFee": 1927
 },
 {
   "title": "Karur Vysya Bank - SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/kvb-gold-face.png",
   "rating": 4,
   "id": "KKL85YSY7IT",
   "description": "in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit",
   "annualFee": 1049
 },
 {
   "title": "Karur Vysya Bank - SBI Platinum Credit Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bank/KVB%20Platinum%20Card%20Front.png",
   "rating": 4,
   "id": "USQ69JBI8DQ",
   "description": "placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc",
   "annualFee": 1231
 },
 {
   "title": "KrisFlyer SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/krisflyer-sbi-card/krisflyer-front.png",
   "rating": 3,
   "id": "VWA15MMN4VY",
   "description": "Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue",
   "annualFee": 1522
 },
 {
   "title": "KrisFlyer SBI Card Apex",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/krisflyer-sbi-card/krisflyer-apex-front-blank.png",
   "rating": 4,
   "id": "QYQ91RPB6JI",
   "description": "dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean",
   "annualFee": 1532
 },
 {
   "title": "KVB SBI Card ELITE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/kvb-faces/KVB-ELITE.png",
   "rating": 4,
   "id": "JKV47UIK4VB",
   "description": "Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et,",
   "annualFee": 1596
 },
 {
   "title": "KVB SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/kvb-faces/KVB-PRIME.png",
   "rating": 4,
   "id": "FDB42FBJ8VU",
   "description": "semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at",
   "annualFee": 1668
 },
 {
   "title": "KVB SBI Signature Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/KVB%20Signature%20Card%20Front.png",
   "rating": 4,
   "id": "QMN48BBN1LR",
   "description": "In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et",
   "annualFee": 1443
 },
 {
   "title": "KVB SimplySAVE SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/kvb-faces/KVB-SimplySAVE.png",
   "rating": 3,
   "id": "NAA41MRJ0MR",
   "description": "Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec",
   "annualFee": 1103
 },
 {
   "title": "Lifestyle Home Centre SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/lc-hc-base-front.png",
   "rating": 4,
   "id": "YRB12FMY6UN",
   "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt",
   "annualFee": 1891
 },
 {
   "title": "Lifestyle Home Centre SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/lc-hc-prime-front.png",
   "rating": 5,
   "id": "PCN64ZQC7AR",
   "description": "nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae",
   "annualFee": 1012
 },
 {
   "title": "Lifestyle Home Centre SBI Card SELECT",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/lc-hc-select-front.png",
   "rating": 4,
   "id": "CGG45CXS7NW",
   "description": "arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit",
   "annualFee": 1393
 },
 {
   "title": "Max SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/max-base.png",
   "rating": 4,
   "id": "XIH39OSR7LP",
   "description": "metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor",
   "annualFee": 1197
 },
 {
   "title": "Max SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/max-sbi-card-prime.png",
   "rating": 3,
   "id": "VOR43ONC4FI",
   "description": "gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend",
   "annualFee": 1403
 },
 {
   "title": "Max SBI Card SELECT",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/max-select.png",
   "rating": 3,
   "id": "ZCL76ULF4VS",
   "description": "Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean",
   "annualFee": 1329
 },
 {
   "title": "OLA Money SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/travel/ola-card/ola-card-face-front.png",
   "rating": 5,
   "id": "CRW70RUQ7VP",
   "description": "pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod",
   "annualFee": 1928
 },
 {
   "title": "Paytm SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Paytm-SBI-Base-349x218-01.png",
   "rating": 4,
   "id": "IXK75QQB6FO",
   "description": "tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat.",
   "annualFee": 1993
 },
 {
   "title": "Paytm SBI Card SELECT",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Paytm-SBI-Select_1.png",
   "rating": 4,
   "id": "FSK18CSL1EA",
   "description": "nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit.",
   "annualFee": 1957
 },
 {
   "title": "PhonePe SBI Card PURPLE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/phonepe/base/thumb-PhonePe-SBI-Base-f.png",
   "rating": 4,
   "id": "HWF73ZHH1EW",
   "description": "semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus",
   "annualFee": 1388
 },
 {
   "title": "PhonePe SBI Card SELECT BLACK",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/phonepe/select/PhonePe-SBI-select-f.png",
   "rating": 3,
   "id": "IJS08WRR4HM",
   "description": "quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue,",
   "annualFee": 1842
 },
 {
   "title": "PSB SBI Card ELITE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/PSB%20ELITE%20Card%20Front.png",
   "rating": 4,
   "id": "AKF50NII3ST",
   "description": "Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim",
   "annualFee": 1952
 },
 {
   "title": "PSB SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/PSB%20PRIME%20Card%20Front.png",
   "rating": 4,
   "id": "JAL42DIN7BT",
   "description": "Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
   "annualFee": 1695
 },
 {
   "title": "PSB SimplySAVE SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bank/PSB%20SimplySAVE%20Card%20Front.png",
   "rating": 3,
   "id": "JKT31RVS7DA",
   "description": "sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat",
   "annualFee": 1759
 },
 {
   "title": "Reliance SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/rel-base.png",
   "rating": 4,
   "id": "OUK80KRD7EU",
   "description": "et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan",
   "annualFee": 1504
 },
 {
   "title": "Reliance SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/rel-prime.png",
   "rating": 5,
   "id": "FRN30XCQ1LJ",
   "description": "aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
   "annualFee": 1735
 },
 {
   "title": "SBI Card ELITE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/thumb-Elite_349x218-px-Front.png",
   "rating": 3,
   "id": "BNH06CCV2PN",
   "description": "felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida",
   "annualFee": 1081
 },
 {
   "title": "SBI Card ELITE Advantage",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Elite_349x218-px-Front.png",
   "rating": 4,
   "id": "UPD61NTY5KL",
   "description": "Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque.",
   "annualFee": 1077
 },
 {
   "title": "SBI Card MILES",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/MILES_139x218-px-front.png",
   "rating": 5,
   "id": "PCO66LIJ4UY",
   "description": "lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat.",
   "annualFee": 1817
 },
 {
   "title": "SBI Card Miles Elite",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/MILES-Elite_139x218-px-Front.png",
   "rating": 4,
   "id": "LFC14DAT1MM",
   "description": "tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam",
   "annualFee": 1928
 },
 {
   "title": "SBI Card MILES PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/MILES-Prime_139x218-px-Front.png",
   "rating": 4,
   "id": "QEW92NUM6OI",
   "description": "Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis",
   "annualFee": 1338
 },
 {
   "title": "SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/thumb-Prime_349x218-px-Front.png",
   "rating": 4,
   "id": "SHY22XSC6WN",
   "description": "sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus",
   "annualFee": 1827
 },
 {
   "title": "SBI Card PRIME Advantage",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Prime_349x218-px-Front.png",
   "rating": 4,
   "id": "GRQ21KXB3RC",
   "description": "malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis.",
   "annualFee": 1998
 },
 {
   "title": "SBI Card PULSE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/240759_SBI_Pulse_349-x-218px-01.png",
   "rating": 4,
   "id": "HBZ56WTP9FW",
   "description": "nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet",
   "annualFee": 1489
 },
 {
   "title": "SBI Card Unnati",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/UNNATI_349x218-px-front.png",
   "rating": 3,
   "id": "BQW44LDB8UU",
   "description": "amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis",
   "annualFee": 1055
 },
 {
   "title": "Shaurya SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Shaurya2_349x218-px_front.png",
   "rating": 4,
   "id": "XFH96EYN6CZ",
   "description": "Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum",
   "annualFee": 1814
 },
 {
   "title": "Shaurya Select SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Shaurya_349x218-px_Front.png",
   "rating": 4,
   "id": "POK56AKY6SB",
   "description": "tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id",
   "annualFee": 1294
 },
 {
   "title": "SimplyCLICK Advantage SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Simplyclick-Advantage_349x218-front.png",
   "rating": 4,
   "id": "DFJ44QMS5NW",
   "description": "dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce",
   "annualFee": 1434
 },
 {
   "title": "SimplyCLICK SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Simplyclick_349x218-Front.png",
   "rating": 3,
   "id": "EHA14FPC4LY",
   "description": "Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla.",
   "annualFee": 1637
 },
 {
   "title": "SimplySAVE Advantage SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/SimplySave-Advantage_349x218-px-front.png",
   "rating": 4,
   "id": "RGT13XZO5OE",
   "description": "dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer",
   "annualFee": 1746
 },
 {
   "title": "SimplySAVE SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/thumb-SimplySave_349x218-px-Front.png",
   "rating": 3,
   "id": "HPV01DJM2QJ",
   "description": "mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero dui",
   "annualFee": 1965
 },
 {
   "title": "South Indian Bank SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/banking-partnership/kvb-faces/South-Indian-Bank-PRIME.png",
   "rating": 4,
   "id": "NYL20XPN8DU",
   "description": "Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida",
   "annualFee": 1693
 },
 {
   "title": "South Indian Bank SBI Platinum Credit Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bank/SIB%20Platinum%20Card%20Front.png",
   "rating": 4,
   "id": "RMQ30KDO6SY",
   "description": "id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus",
   "annualFee": 1835
 },
 {
   "title": "South Indian Bank SimplySAVE SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/bank/SIB%20SimplySAVE%20Card%20Front.png",
   "rating": 3,
   "id": "XTR60XIY9LO",
   "description": "odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare",
   "annualFee": 1631
 },
 {
   "title": "Spar SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/spar-base.png",
   "rating": 4,
   "id": "OOL87CKD7SG",
   "description": "dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam",
   "annualFee": 1666
 },
 {
   "title": "Spar SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/SBI-Spar-Prime-01.png",
   "rating": 4,
   "id": "HWE31TDY6RC",
   "description": "convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci.",
   "annualFee": 1213
 },
 {
   "title": "Spar SBI Card SELECT",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/SBI-Spar-Select-01.png",
   "rating": 4,
   "id": "OQR20QDX2BR",
   "description": "aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis",
   "annualFee": 1468
 },
 {
   "title": "Tata Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/card-faces/tata-titanium-dec.jpg",
   "rating": 4,
   "id": "LBK27EWS1GD",
   "description": "Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim.",
   "annualFee": 1397
 },
 {
   "title": "Tata Card SELECT",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/card-faces/tata-platinum-dec.jpg",
   "rating": 3,
   "id": "SPG75PFN2GO",
   "description": "elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec",
   "annualFee": 1962
 },
 {
   "title": "Tata Neu Infinity SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/lifestyle/tata-neu-infitnity/tata-neu-infinity-face-blank-front.png",
   "rating": 5,
   "id": "YRC25XDM7TR",
   "description": "consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.",
   "annualFee": 1722
 },
 {
   "title": "Tata Neu Plus SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/lifestyle/tata-neu-plus/tata-neu-plus-face-blank-front.png",
   "rating": 4,
   "id": "BFT11TVI4WN",
   "description": "quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac",
   "annualFee": 1576
 },
 {
   "title": "Titan SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/Titan-349x218-03.png",
   "rating": 5,
   "id": "VON21GXU4LE",
   "description": "fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec",
   "annualFee": 1027
 },
 {
   "title": "UCO Bank SBI Card ELITE",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/UCO%20ELITE%20Card%20Front.png",
   "rating": 4,
   "id": "CFR40CZB6YQ",
   "description": "libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante.",
   "annualFee": 1229
 },
 {
   "title": "UCO Bank SBI Card PRIME",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/UCO%20PRIME%20Card%20Front.png",
   "rating": 5,
   "id": "JMT49IXQ6DB",
   "description": "sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor",
   "annualFee": 1215
 },
 {
   "title": "UCO Bank SimplySAVE SBI Card",
   "bankLogo": "https://logo.clearbit.com/sbi.co.in",
   "cardImage": "https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/network-card-images/UCO%20SimplySAVE%20Card%20Front.png",
   "rating": 4,
   "id": "POC99THR4EU",
   "description": "Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per",
   "annualFee": 1210
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