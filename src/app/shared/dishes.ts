import { Dish } from './dish';

export const DISHES: Dish[] = [
    {
        id: '0',
        name: 'King Gorge Medical College',
        image: './assets/images/hospital.jpg',
        category: 'Government Hospital',
        featured: true,
        label: 'Nodal',
        price: '4.99',
        vaccant: 10,
        lat: 26.869422,
        lng: 80.916219,
        // tslint:disable-next-line:max-line-length
        description: 'King Georges Medical University is situated in the heart of the historic city of Lucknow which is the capital of India s most populous state Uttar Pradesh. Lucknow lies about 500 km east of Delhi .',
        comments: [
            {
                rating: 5,
                comment: 'Excellent Service',
                author: 'Ramesh Kumar',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law here!',
                author: 'Suresh Mishra',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Really Good',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 1,
                comment: 'Rude staff',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '1',
        name: 'R.M.L Lucknow',
        image: './assets/images/rml.png',
        category: 'Government Hospital',
        featured: false,
        label: '',
        price: '1.99',
        vaccant: 10,
        lat: 26.868978,
        lng: 81.000823,
        description: 'The Dr. Ram Manohar Lohia Institute of Medical Sciences, is a medical Institute under State Legislature Act with teaching hospital established by the Government of Uttar Pradesh in Gomti Nagar, Lucknow. ',
        comments: [
            {
                rating: 5,
                comment: 'Excellent Service',
                author: 'Ramesh Kumar',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law here!',
                author: 'Suresh Mishra',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Really Good',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 1,
                comment: 'Rude staff',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '2',
        name: 'Era Medical College,',
        image: './assets/images/era.jpg',
        category: 'Private Hospital',
        featured: false,
        label: 'New',
        price: '1.99',
        lat: 26.878589,
        lng: 80.873673,
        vaccant: 10,
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comments: [
            {
                rating: 5,
                comment: 'Excellent Service',
                author: 'Ramesh Kumar',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law here!',
                author: 'Suresh Mishra',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Really Good',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 1,
                comment: 'Rude staff',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '3',
        name: 'Hind Institute of Medical College',
        image: './assets/images/hind.jpg',
        category: 'Private Hospital',
        featured: false,
        label: '',
        price: '2.99',
        vaccant: 10,
        lat: 26.907676,
        lng: 81.127253,
        description: 'Hind Institute of Medical Sciences is a private medical college hospital which is located near Lucknow city in Barabanki district, in Safedabad in Uttar Pradesh, India. It was established in 2005 and the medical College began its operation in 2009.',
        comments: [
            {
                rating: 5,
                comment: 'Excellent Service',
                author: 'Ramesh Kumar',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law here!',
                author: 'Suresh Mishra',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Really Good',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 1,
                comment: 'Rude staff',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            }
        ]
    }

];
