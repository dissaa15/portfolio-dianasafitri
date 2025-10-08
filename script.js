function toggleMode() {
  const body = document.body;
  const btn = document.getElementById("modeBtn");

  body.classList.toggle("dark-mode");
  btn.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";

  localStorage.setItem("mode", body.classList.contains("dark-mode") ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("mode");
  const btn = document.getElementById("modeBtn");

  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "🌙";
  } else {
    btn.textContent = "☀️";
  }
});

function openModal(src) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function kirimPesan() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const notifikasi = document.getElementById("notifikasi");
  const btn = document.querySelector("#contactForm button");

  notifikasi.textContent = "";

  if (!nama || !email || !pesan) {
    notifikasi.textContent = "❌ Harap isi semua data!";
    notifikasi.style.color = "red";
    return;
  }

  btn.disabled = true;
  btn.innerHTML = "⏳ Mengirim...";

  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdmw87cNzQIqQ3utAjS3hVf3smMZYuRk4fh-DfiuhuxZ5QVvQ/formResponse?";
  const params = new URLSearchParams();
  params.append("entry.457118598", nama);
  params.append("entry.1739838475", email);
  params.append("entry.372953423", pesan);

  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: params
  })
    .then(() => {
      notifikasi.textContent = "✅ Pesan berhasil dikirim!";
      notifikasi.style.color = "lime";
      document.getElementById("contactForm").reset();
    })
    .catch(() => {
      notifikasi.textContent = "⚠️ Terjadi kesalahan. Coba lagi.";
      notifikasi.style.color = "orange";
    })
    .finally(() => {
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = "Kirim";
      }, 1000);
    });
}

function toggleFoto() {
  const foto = document.getElementById("fotoProfil");
  const btn = document.getElementById("fotoToggleBtn");

  if (foto.style.display === "none") {
    foto.style.display = "block";
    btn.textContent = "Sembunyikan Foto";
  } else {
    foto.style.display = "none";
    btn.textContent = "Tampilkan Foto";
  }
}
