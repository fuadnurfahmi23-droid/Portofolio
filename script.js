const wadah_projek = document.querySelector(".kumpulan_projek")
const tempat_st = document.querySelector(".construktor_st")

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("nav-links")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
})

const bp = [
    ["C++", 90],
    ["Python", 85],
    ["C#", 60],
    ["GodoEngine", 50],
    ["Java Script", 50]
]
const p = [
    ["Word", 100],
    ["VS Code", 90],
    ["PGAndim", 90],
    ["Krita", 80],
    ["Unity", 80],
    ["Godot", 80],
    ["Excel", 70],
    ["Blender", 50]
]
const st = [
    ["Projek selesai", 4],
    ["Pengalaman team", 3],
    ["Lanjut belajar", "oo"],
    ["Tujuan masa depan", "orang sukses"]
]

const projek = [
    {
        nama: "robo",
        gambar: "aset/kepala_robo._newpng.png",
        penjelasan: "gabukan dari game jadul flappy bird dan wartanter di maka kita akan melawan musuh biasa dan bos dengan kontrol lompat kayak flappy bird",
        tipe_projek: ["Game Dev", "Godot", "Pixel Art"]
    },
    {
        nama: "hollo Knight",
        gambar: "aset/kepala_robo._newpng.png",
        penjelasan: "web yang terinspirasi dari Hollowknight",
        tipe_projek: ["WEB", "HTML", "CSS"]
    },
    {
        nama: "perang sarung",
        gambar: "aset/kepala_robo._newpng.png",
        penjelasan: "game yang mengenang masa kecil di mana battle dengan perang sarung",
        tipe_projek: ["Game Dev", "Godot", "Pixel Art"]
    },
    {
        nama: "pencatatan gudang",
        gambar: "aset/kepala_robo._newpng.png",
        penjelasan: "suatu fitur untuk mengecek barang itu masih bisa di simpan atau tidak",
        tipe_projek: ["Sofware Dev", "C++"]
    }
]

for (let i = 0; i < bp.length; i++) {
    const tempat_bp = document.querySelector(".construktor_bp")
    const list = document.createElement("li")
    const nama_bp = document.createElement("p")
    const nama_bp_persen = document.createElement("p")
    const pembungkus_rincian = document.createElement("div")
    pembungkus_rincian.classList.add("bagian_persentase")
    const pembungkus_persen = document.createElement("div")
    pembungkus_persen.classList.add("luar_persen")
    const isi_persen = document.createElement("div")
    isi_persen.classList.add("dalam_persen")

    isi_persen.style.width = bp[i][1] + "%"
    pembungkus_persen.appendChild(isi_persen)
    nama_bp_persen.textContent = bp[i][1] + "%"
    pembungkus_rincian.appendChild(pembungkus_persen)
    pembungkus_rincian.appendChild(nama_bp_persen)
    nama_bp.textContent = bp[i][0]
    list.appendChild(nama_bp)
    list.appendChild(pembungkus_rincian)
    tempat_bp.appendChild(list)
}

for (let i = 0; i < p.length; i++) {
    const tempat_p = document.querySelector(".construktor_p")
    const list = document.createElement("li")
    const nama_bp = document.createElement("p")
    const nama_bp_persen = document.createElement("p")
    const pembungkus_rincian = document.createElement("div")
    pembungkus_rincian.classList.add("bagian_persentase")
    const pembungkus_persen = document.createElement("div")
    pembungkus_persen.classList.add("luar_persen")
    const isi_persen = document.createElement("div")
    isi_persen.classList.add("dalam_persen")

    isi_persen.style.width = p[i][1] + "%"
    pembungkus_persen.appendChild(isi_persen)
    nama_bp_persen.textContent = p[i][1] + "%"
    pembungkus_rincian.appendChild(pembungkus_persen)
    pembungkus_rincian.appendChild(nama_bp_persen)
    nama_bp.textContent = p[i][0]
    list.appendChild(nama_bp)
    list.appendChild(pembungkus_rincian)
    tempat_p.appendChild(list)
}

for (let i = 0; i < st.length; i++) {
    const lis = document.createElement("li")
    const isi_depan = document.createElement("p")
    isi_depan.innerHTML = st[i][0]
    const isi_belakang = document.createElement("p")
    isi_belakang.innerHTML = st[i][1]
    lis.appendChild(isi_depan)
    lis.appendChild(isi_belakang)
    tempat_st.appendChild(lis)
}
for (let i = 0; i < projek.length; i++) {

    const project = document.createElement("div");
    project.classList.add("project");

    project.innerHTML = `
        <h2>${projek[i].nama}</h2>

        <img src="${projek[i].gambar}">
        <div class="penjelasan_projek">
        <p>${projek[i].penjelasan}</p>
        <div class="tipe_projek"></div>
        <a href=""><p>Lihat Detail --></p></a>
        </div>
    `;

    const tempatTeknologi = project.querySelector(".tipe_projek");

    for (let j = 0; j < projek[i].tipe_projek.length; j++) {

        const teknologi = document.createElement("p");

        teknologi.textContent = projek[i].tipe_projek[j];

        tempatTeknologi.appendChild(teknologi);
    }

    wadah_projek.appendChild(project);
}
