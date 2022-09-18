import fullbody from '/home/mntwana/servicefinder/assets/fullbody.png';
import imotowash from '/home/mntwana/servicefinder/assets/imotowash.png';
import legends from '/home/mntwana/servicefinder/assets/legends.png';
import konkawash from '/home/mntwana/servicefinder/assets/konkawash.png';

const serviceList = [ 
    {
        name:"Max's Lifestyle & Car Wash",
        email:"shisanyama@gmail.com",
        review:"5",
        avatar:imotowash,
        coords: {
            latitude:-26.157067304826224,
            longitude:27.874698200936262
        }
    },
    {
        name:"Full Body Massages",
        email:"relax@gmail.com",
        review:"3",
        avatar:fullbody,
        coords: {
            latitude:-26.243210181611726,
            longitude:28.41620472532948
        }
    },
    {
        name:"Konka Car Wash",
        email:"thespot@gmail.com",
        review:"5",
        avatar:konkawash,
        coords: {
            latitude:-25.7294336,
            longitude:28.1706496
        }
    },
    {
        name:"Legends Barber",
        email:"forRicky@gmail.com",
        review:"5",
        avatar:legends,
        coords: {
            latitude:-25.827050333254892,
            longitude:28.121930414106373
        }
    }
]

export default serviceList;