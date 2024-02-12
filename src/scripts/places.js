import img1 from '../assets/places/maldives.jpg'
import img2 from '../assets/places/arabiya.jpg'
import img3 from '../assets/places/italy.jpg'
import img4 from '../assets/places/greece.jpg'
import img5 from '../assets/places/brazil.jpg'
import img6 from '../assets/places/spain.jpg'
import img7 from '../assets/places/sriLanka.jpg'
import img8 from '../assets/places/france.jpg'

import spain from '../assets/packageImg/spain.jpg'
import netherland from '../assets/packageImg/netherland.jpg'
import maldives from '../assets/packageImg/maldives.jpg'
import italy from '../assets/packageImg/italy.jpg'
const places = [
    {
        id: 1,
        img: img1,
        title: 'Maldives',
        location: 'Nuda Penida, Maldives',
        price: 110,
        ratings: 4.8,
        packageInfo: {
            img: maldives,
            title: 'Maldives Tour Package',
            ratings: 4.9,
            price: 320,
            dayAndNight: [4, 3]
        }
    },
    {
        id: 2,
        img: img2,
        title: 'UAE',
        location: 'Dubai desert, UAE',
        price: 170,
        ratings: 4.3,
        packageInfo: {
            img: img2,
            title: 'Dubai Tour Package',
            ratings: 5.0,
            price: 320,
            dayAndNight: [4,3]
        }
    },
    {
        id: 3,
        img: img3,
        title: 'Italy',
        location: 'Venice, Italy',
        price: 210,
        ratings: 4.9,
        packageInfo: {
            img: italy,
            title: 'Italy Tour Package',
            ratings: 4.2,
            price: 110,
            dayAndNight: [5,4]
        }
    },
    {
        id: 4,
        img: img4,
        title: 'Greece',
        location: 'Santorini, Greece',
        price: 150,
        ratings: 4.5,
        packageInfo: {
            img: img4,
            title: 'Greece Tour Package',
            ratings: 4.8,
            price: 110,
            dayAndNight: [5, 4]
        }
    },
    {
        id: 5,
        img: img7,
        title: 'Sri Lanka',
        location: 'Siarhei palishchuk, Sri Lanka',
        price: 80,
        ratings: 4.8,
        packageInfo: {
            img: netherland,
            title: 'Sri Lanka Tour Package',
            ratings: 4.3,
            price: 130,
            dayAndNight: [2, 1]
        }
    },
    {
        id: 6,
        img: img6,
        title: 'Spain',
        location: 'Dubai desert, UAE',
        price: 170,
        ratings: 4.3,
        packageInfo: {
            img: spain,
            title: 'Spain Tour Package',
            ratings: 5.0,
            price: 320,
            dayAndNight: [4, 3]
        }
    },
    {
        id: 7,
        img: img5,
        title: 'Brazil',
        location: 'Rio de Janerio, Brazil',
        price: 210,
        ratings: 4.1,
        packageInfo: {
            img: img5,
            title: 'Brazil Tour Package',
            ratings: 4.7,
            price: 320,
            dayAndNight: [8,7]
        }
    },
    {
        id: 8,
        img: img8,
        title: 'France',
        location: 'Paris, France',
        price: 110,
        ratings: 4.2,
        packageInfo: {
            img: img8,
            title: 'France Tour Package',
            ratings: 4.5,
            price: 510,
            dayAndNight: [8, 7]
        }
    }
]

export default places