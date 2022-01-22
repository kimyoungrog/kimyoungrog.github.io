const imgs = [
  "https://whale-store.pstatic.net/20171122_96/1511328914608Nmcx8_JPEG/winterwhale_3(L).jpg",
  "https://whale-store.pstatic.net/20190402_249/1554182547742HKt3V_JPEG/ruan-richard-748929-unsplash.jpg",
  "https://whale-store.pstatic.net/20190402_67/15541826308805FL97_JPEG/todd-diemer-221398-unsplash.jpg",
  "https://whale-store.pstatic.net/20190402_111/15541825952462Utt4_JPEG/szabo-viktor-1151311-unsplash.jpg",
  "https://whale-store.pstatic.net/20190402_67/1554182297857ypaUI_JPEG/ganapathy-kumar-539590-unsplash.jpg",
  "https://whale-store.pstatic.net/20190402_286/1554182510478IONR7_JPEG/paul-carmona-391531-unsplash.jpg",
  "https://whale-store.pstatic.net/20190402_267/1554182216014pYn4S_JPEG/ganapathy-kumar-306285-unsplash.jpg",
  "https://whale-store.pstatic.net/20190402_225/1554182425525Biv0T_JPEG/luca-huter-476866-unsplash.jpg",
  "https://whale-store.pstatic.net/20191025_258/1571993257337BtJlE_JPEG/whalespace_img_large01.jpg",
  "https://whale-store.pstatic.net/20180628_193/1530154434970lEjgN_JPEG/fruit_03.jpg",
  "https://whale-store.pstatic.net/20180628_70/15301625595347mLhP_JPEG/fruit_07.jpg"
];

const chosenImage = imgs[Math.floor(Math.random() * imgs.length)];

document.body.style.backgroundImage = `url("${chosenImage}")`;
