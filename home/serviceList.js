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
            latitude:-29.391396085607713,
            longitude:30.66814286962876
        }
    },
    {
        name:"Full Body Massages",
        email:"relax@gmail.com",
        review:"3",
        avatar:fullbody,
        coords: {
            latitude:-33.40410755947661,
            longitude:20.437783400937075
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