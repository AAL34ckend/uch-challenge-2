import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contentHeading: [
        {
            "id": 1,
            "title": "About Our App",
            "description": "UTY Creative Hub adalah aplikasi inovatif yang memungkinkan mahasiswa Universitas Teknologi Yogyakarta untuk membooking ruangan di gedung UTY Creative Hub secara gratis. Kini, Anda dapat dengan mudah menemukan dan memesan ruangan sesuai kebutuhan Anda dengan aplikasi yang tersedia di Google Playstore."
        },
        {
            "id": 2,
            "title": "App Features",
            "description": "Temukan fitur-fitur utama dari aplikasi UTY Creative Hub yang membuat pembookingan ruangan menjadi lebih mudah dan efisien bagi mahasiswa Universitas Teknologi Yogyakarta. Aplikasi kami dirancang dengan kenyamanan Anda sebagai prioritas, menawarkan pengalaman yang mulus dan ramah pengguna. Berikut adalah fitur-fitur aplikasi kami:"
        },
        {
            "id": 3,
            "title": "Checkout Our App Interface Look",
            "description": "Lihat sekilas antarmuka aplikasi UTY Creative Hub yang dirancang khusus untuk memudahkan pengalaman Anda dalam membooking ruangan. Dengan desain yang kreatif dan user-friendly, aplikasi ini memastikan bahwa setiap langkah, mulai dari pencarian hingga pembookingan, menjadi lebih cepat dan mudah. Mari jelajahi tampilan antarmuka yang menarik dan intuitif ini!"
        },
        {
            "id": 4,
            "title": "Download App Now",
            "description": "UTY Creative Hub adalah aplikasi inovatif yang memungkinkan mahasiswa Universitas Teknologi Yogyakarta untuk membooking ruangan di gedung UTY Creative Hub secara gratis."
        },
        {
            "id": 5,
            "title": "how to use the app perfectly",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
        },
        {
            "id": 6,
            "title": "Our recent blog",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
        }
    ],
}

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {}
})

export const selectContentHeading = (state) => state.content.contentHeading
export default contentSlice.reducer


