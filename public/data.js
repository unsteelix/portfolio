const cats = [
    {
        file: 'cats/cat_1.jpg'
    },
    {
        file: 'cats/cat_2.jpg'
    },
    {
        file: 'cats/cat_3.jpg'
    },
    {
        file: 'cats/cat_4.jpg'
    },
    {
        file: 'cats/cat_5.JPG'
    },
]

const ebenya = [
    {
        file: 'ebenya/1.png',
        title: 'noname',
        date: '2024'
    },
    {
        file: 'ebenya/2.jpg',
        title: 'noname',
        date: '2024'
    },
    {
        file: 'ebenya/3.png',
        title: 'noname',
        date: '2024'
    },
]


const data = {
    galleries: {
        'ebenya': {
            name: 'Ebeにゃ',
            images: ebenya
        },
        'cats': {
            name: 'Cats',
            images: cats
        },
    }
}

export default data;