const portalData = {
    donem1: {
        title: "Dönem 1",
        courses: [
            {
                id: "anatomi",
                name: "Anatomi",
                code: "ECZ 103",
                icon: "fa-skull",
                weeks: [
                    { week: 1, title: "Anatomiye Giriş", slide: "https://drive.google.com/file/d/1u29wadX4XX2xk552cL-Ulz4cpEUsv8gu/view?usp=share_link", quiz: "#" },
                    { week: 2, title: "Kemikler", slide: "#", quiz: "#" },
                    { week: 3, title: "Eklemler", slide: "#", quiz: "#" },
                    { week: 4, title: "Kaslar", slide: "#", quiz: "#" },
                    { week: 5, title: "Dolaşım Sistemi", slide: "#", quiz: "#" },
                    { week: 6, title: "Solunum Sistemi", slide: "#", quiz: "#" },
                    { week: 7, title: "Sindirim Sistemi", slide: "#", quiz: "#" },
                    { week: 8, title: "Üriner Sistem", slide: "#", quiz: "#" },
                    { week: 9, title: "Üreme Sistemi", slide: "#", quiz: "#" },
                    { week: 10, title: "Sinir Sistemi", slide: "#", quiz: "#" },
                    { week: 11, title: "Duyu Organları", slide: "#", quiz: "#" },
                    { week: 12, title: "Endokrin Sistem", slide: "#", quiz: "#" }
                ]
            },
            {
                id: "bitki-biyo",
                name: "Bitki Biyolojisi",
                code: "ECZ 115",
                icon: "fa-seedling",
                weeks: [
                    { week: 1, title: "1. Hafta", slide: "https://drive.google.com/file/d/1cUdIQbH51-bHWmt13dae6Vq-ffVrCx8M/view?usp=share_link", quiz: "https://gemini.google.com/share/a2a8701c289c" },
                    { week: 2, title: "2. Hafta", slide: "https://drive.google.com/file/d/1AwbwwTL8tWsuerYUiDMr31hn0LLkAPbO/view?usp=share_link", quiz: "https://gemini.google.com/share/66c3faa1d8f2" },
                    { week: 3, title: "3. Hafta", slide: "https://drive.google.com/file/d/1rNgeEXgNJzKMMhNItacuK1f9uBgj3rsM/view?usp=share_link", quiz: "https://gemini.google.com/share/70882a9f30c4" },
                    { week: 4, title: "4. Hafta", slide: "https://drive.google.com/file/d/1_MSm8I36B5_k5fuxhKEnlYbSl_pj_cbG/view?usp=share_link", quiz: "https://gemini.google.com/share/79aa5fcbd88b" }
                ]
            },
            {
                id: "tibbi-biyo",
                name: "Tıbbi Biyoloji ve Genetik",
                code: "ECZ 111",
                icon: "fa-dna",
                weeks: [
                    { week: 1, title: "1. Hafta", slide: "https://drive.google.com/file/d/1v9dJVyG1c3_z99OxjhtXQzdoke-q4c9M/view?usp=share_link", quiz: "https://gemini.google.com/share/522c044b7b1b" },
                    { week: 2, title: "2. Hafta", slide: "https://drive.google.com/file/d/1lg38xFIJH6DXaQZCV3GXGD_83JB7ebCs/view?usp=share_link", quiz: "https://gemini.google.com/share/531b3c39baba" },
                    { week: 3, title: "3. Hafta", slide: "https://drive.google.com/file/d/1T1PsKgt_r8sF0bxxWgbuLMHaxKYm4deY/view?usp=share_link", quiz: "https://gemini.google.com/share/2ef4a5f554f2" },
                    { week: 4, title: "4. Hafta", slide: "https://drive.google.com/file/d/1eEFOEIRnClFRVUoVIBRXi-UHRAYx5-_L/view?usp=share_link", quiz: "https://gemini.google.com/share/869dea2035f3" },
                    { week: 5, title: "5. Hafta", slide: "https://drive.google.com/file/d/1QgxyAcFSF2cJRYSUrvJUTYwSrbxq4BWt/view?usp=share_link", quiz: "https://gemini.google.com/share/8a0f61adf7af" },
                    { week: 6, title: "6. Hafta", slide: "https://drive.google.com/file/d/1Opi_tQm9xLzbXhrlDYVE_2Z3ROqDRO7l/view?usp=share_link", quiz: "https://gemini.google.com/share/c4043afea144" },
                    { week: 7, title: "7. Hafta", slide: "https://drive.google.com/file/d/1cykga7crB7TglI6u128Ryn_0KVxvqwVA/view?usp=share_link", quiz: "https://gemini.google.com/share/c64a1c6e9541" },
                    { week: 8, title: "8. Hafta", slide: "https://drive.google.com/file/d/12aDsxbZZ_N344eyF3uSXQnU1uBkSL6g3/view?usp=share_link", quiz: "https://gemini.google.com/share/d5f1010b79d7" },
                    { week: 9, title: "9. Hafta", slide: "https://drive.google.com/file/d/1WnDFaNRPJ4Y0tcQbk3bk6SnI3qPnP4Bm/view?usp=share_link", quiz: "https://gemini.google.com/share/bb32c3646f29" },
                    { week: 10, title: "10. Hafta", slide: "https://drive.google.com/file/d/1LZpUTHKOQmZKzoD91-k-dzrqClximJRG/view?usp=share_link", quiz: "https://gemini.google.com/share/2a1d3b899c3d" },
                    { week: 11, title: "11. Hafta", slide: "https://drive.google.com/file/d/1fv_XsR1zQyeEcfQoqhXe27btozK8xJZX/view?usp=share_link", quiz: "https://gemini.google.com/share/ce7659ab9fbe" }
                ]
            },
            { id: "organik-kimya", name: "Organik Kimya I", code: "ECZ 117", icon: "fa-atom", weeks: [] },
            { id: "fizik", name: "Fizik", code: "ECZ 105", icon: "fa-magnet", weeks: [] },
            { id: "matematik", name: "Matematik", code: "ECZ 109", icon: "fa-calculator", weeks: [] },
            { id: "biyoistatistik", name: "Biyoistatistik", code: "ECZ 113", icon: "fa-chart-line", weeks: [] },
            { id: "genel-kimya", name: "Genel Kimya", code: "ECZ 107", icon: "fa-flask", weeks: [] },
            { id: "ecz-giris", name: "Eczacılığa Giriş", code: "ECZ 101", icon: "fa-pills", weeks: [] },
            { id: "inkilap", name: "İnkılap Tarihi I", code: "AİİT 101", icon: "fa-landmark", weeks: [] },
            { id: "yabanci-dil", name: "Yabancı Dil I", code: "YD 101", icon: "fa-language", weeks: [] },
            { id: "turk-dili", name: "Türk Dili I", code: "TD 101", icon: "fa-pen-nib", weeks: [] }
        ]
    },
    donem2: { title: "Dönem 2", courses: [] },
    donem3: { title: "Dönem 3", courses: [] },
    donem4: { title: "Dönem 4", courses: [] },
    donem5: { title: "Dönem 5", courses: [] },
    donem6: { title: "Dönem 6", courses: [] },
    donem7: { title: "Dönem 7", courses: [] },
    donem8: { title: "Dönem 8", courses: [] },
    donem9: { title: "Dönem 9", courses: [] },
    donem10: { title: "Dönem 10", courses: [] }
};
