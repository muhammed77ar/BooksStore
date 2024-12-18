import {createSlice} from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        isbn: "9780062457714",
        genre: "Personal Development",
        price: (16.99 * 10.50).toFixed(2), // 178.39 MAD
        publicationYear: 2016,
        publisher: "HarperOne",
        language: "English",
        pages: 224,
        description: "In this unconventional self-help book, Mark Manson argues that improving your life isn't about turning lemons into lemonade but learning to stomach lemons better. He uses humor, honesty, and philosophical insights to guide readers in embracing life's uncertainties and focusing on what truly matters, even if it means letting go of superficial positivity.",
        stock: 25,
        rating: 4.6,
        coverType: "Paperback",
        imageUrl: "../images/book1.jpg",
    },
    {
        id: 2,
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        isbn: "9781401912149",
        genre: "Personal Development",
        price: (14.99 * 10.50).toFixed(2), // 157.39 MAD
        publicationYear: 1963,
        publisher: "TarcherPerigee",
        language: "English",
        pages: 288,
        description: "Dr. Joseph Murphy delves into the untapped potential of the subconscious mind, offering practical techniques to reprogram thought patterns, unlock creativity, and achieve profound personal transformation. His timeless principles have inspired millions to overcome fears, develop confidence, and manifest success in every area of life.",
        stock: 18,
        rating: 4.7,
        coverType: "Paperback",
        imageUrl: "../images/book3.jpg",
    },
    {
        id: 3,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        isbn: "9781400069286",
        genre: "Personal Development",
        price: (16.00 * 10.50).toFixed(2), // 168.00 MAD
        publicationYear: 2012,
        publisher: "Random House",
        language: "English",
        pages: 400,
        description: "Charles Duhigg explores the science of habit formation, breaking down how habits are formed, why they are so powerful, and how to change them. With compelling stories and cutting-edge research, he provides readers with the tools to build better routines, improve productivity, and achieve lasting success in both personal and professional life.",
        stock: 30,
        rating: 4.5,
        coverType: "Hardcover",
        imageUrl: "../images/book6.jpg",
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        isbn: "9781612680194",
        genre: "Personal Development",
        price: (14.95 * 10.50).toFixed(2), // 156.98 MAD
        publicationYear: 1997,
        publisher: "Warner Books",
        language: "English",
        pages: 207,
        description: "This classic personal finance book contrasts the lessons learned from two fathers: one who was financially struggling and another who was financially successful. Kiyosaki uses these stories to teach readers how to think differently about money, build wealth through investments, and achieve financial independence.",
        stock: 22,
        rating: 4.7,
        coverType: "Paperback",
        imageUrl: "../images/book4.jpg",
    },
    {
        id: 5,
        title: "Atomic Habits",
        author: "James Clear",
        isbn: "9780735211292",
        genre: "Personal Development",
        price: (16.99 * 10.50).toFixed(2), // 178.39 MAD
        publicationYear: 2018,
        publisher: "Avery",
        language: "English",
        pages: 320,
        description: "James Clear provides a comprehensive guide to building good habits and breaking bad ones through small, incremental changes. By combining practical strategies, compelling stories, and scientific insights, he shows how even tiny improvements can lead to extraordinary results over time.",
        stock: 40,
        rating: 4.8,
        coverType: "Hardcover",
        imageUrl: "../images/book5.jpg",
    },
    {
        id: 6,
        title: "Deep Work",
        author: "Cal Newport",
        isbn: "9781455586691",
        genre: "Personal Development",
        price: (17.00 * 10.50).toFixed(2), // 178.50 MAD
        publicationYear: 2016,
        publisher: "Grand Central Publishing",
        language: "English",
        pages: 304,
        description: "Cal Newport argues that deep, focused work is the key to success in a world full of distractions. He provides actionable strategies to cultivate deep work habits, boost productivity, and achieve meaningful results in both personal and professional endeavors.",
        stock: 15,
        rating: 4.6,
        coverType: "Hardcover",
        imageUrl: "../images/book2.jpg",
    },
    {
        id: 7,
        title: "Moby-Dick",
        author: "Herman Melville",
        isbn: "9781503280786",
        genre: "Fantasy",
        price: (11.99 * 10.50).toFixed(2), // 125.89 MAD
        publicationYear: 1851,
        publisher: "CreateSpace Independent Publishing Platform",
        language: "English",
        pages: 635,
        description: "Herman Melville’s timeless tale of obsession, revenge, and the human struggle against nature follows Captain Ahab on his relentless quest to hunt the white whale, Moby-Dick. The novel combines rich symbolism, profound philosophical insights, and thrilling adventure, making it a cornerstone of classic literature.",
        stock: 12,
        rating: 4.3,
        coverType: "Paperback",
        imageUrl: "../images/book7.jpg",
    },
]

const booksSlice = createSlice({
    name : "books",
    initialState,
    reducers : {
        setBooks(state, action){
            return action.payload;
        },
        updatedBook: (state, action) => {
            const index = state.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
              state[index] = action.payload;
            }
          },
    }
})

export const {setBooks, updatedBook} = booksSlice.actions;
export default booksSlice.reducer;