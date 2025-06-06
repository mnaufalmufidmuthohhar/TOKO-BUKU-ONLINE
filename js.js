// script.js

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const genreFilter = document.getElementById("genreFilter");
  const bookList = document.getElementById("bookList");

  function renderBooks(filterText = "", filterGenre = "all") {
    bookList.innerHTML = "";
    const filtered = books.filter(book => {
      const matchText = book.title.toLowerCase().includes(filterText.toLowerCase());
      const matchGenre = filterGenre === "all" || book.genre === filterGenre;
      return matchText && matchGenre;
    });

    if (filtered.length === 0) {
      bookList.innerHTML = "<p>Tidak ada buku ditemukan.</p>";
    } else {
      filtered.forEach(book => {
        const div = document.createElement("div");
        div.className = "book-card";
        div.textContent = book.title;
        bookList.appendChild(div);
      });
    }
  }

  if (searchInput && genreFilter) {
    searchInput.addEventListener("input", () => {
      renderBooks(searchInput.value, genreFilter.value);
    });

    genreFilter.addEventListener("change", () => {
      renderBooks(searchInput.value, genreFilter.value);
    });

    renderBooks();
  }
});

// untuk tampilan detail buku
let currentSlide = 0;
function showSlide(n) {
  const slides = document.querySelectorAll(".book-item");
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[n].style.display = "block";
}

// Testimoni Slider Otomatis
let testimoniIndex = 0;
function nextTestimoni() {
  const items = document.querySelectorAll(".testimoni-item");
  items[testimoniIndex].style.display = "none";
  testimoniIndex = (testimoniIndex + 1) % items.length;
  items[testimoniIndex].style.display = "block";
}
setInterval(nextTestimoni, 3000);

// Validasi Form kontak
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Pesan terkirim! Kami akan menghubungi Anda segera.");
});

// Tombol Beli 
<button onclick="alert('Fitur pembelian belum tersedia.')">Beli Sekarang</button>