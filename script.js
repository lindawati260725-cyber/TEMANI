
// ======================================
// TEMANI - WEBSITE INTERACTION
// ======================================

// 1. MOBILE MENU

const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    mobileMenu.textContent =
      navLinks.classList.contains("show") ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      mobileMenu.textContent = "☰";
    });
  });
}


// 2. ROLE NAMES

const roleNames = {
  pasien: "Pasien",
  keluarga: "Keluarga",
  petugas: "Petugas Puskesmas"
};


// 3. CREATE LOGIN MODAL

function openLogin(role) {
  showAuthModal(role, "login");
}


// 4. CREATE REGISTRATION MODAL

function openRegister(role) {
  if (role === "petugas") {
    alert("Akun petugas dibuat oleh administrator Puskesmas.");
    return;
  }

  showAuthModal(role, "register");
}


// 5. AUTHENTICATION MODAL

function showAuthModal(role, mode) {
  const roleName = roleNames[role];

  if (!roleName) return;

  const oldModal = document.querySelector(".login-modal");
  if (oldModal) oldModal.remove();

  const isRegister = mode === "register";

  const modal = document.createElement("div");
  modal.className = "login-modal";

  let extraFields = "";

  if (isRegister) {
    extraFields = `
      <label for="fullName">Nama Lengkap</label>
      <input
        type="text"
        id="fullName"
        placeholder="Masukkan nama lengkap"
        required
      >

      <label for="displayName">Nama Panggilan</label>
      <input
        type="text"
        id="displayName"
        placeholder="Nama yang akan ditampilkan"
      >
    `;

    if (role === "keluarga") {
      extraFields += `
        <label for="relationship">Hubungan dengan Pasien</label>
        <select id="relationship" required>
          <option value="">Pilih hubungan</option>
          <option value="Ibu">Ibu</option>
          <option value="Ayah">Ayah</option>
          <option value="Pasangan">Pasangan</option>
          <option value="Anak">Anak</option>
          <option value="Saudara">Saudara</option>
          <option value="Lainnya">Lainnya</option>
        </select>

        <label for="patientCode">Kode Penghubung Pasien</label>
        <input
          type="text"
          id="patientCode"
          placeholder="Masukkan kode dari pasien"
          required
        >
      `;
    }

    if (role === "pasien") {
      extraFields += `
        <label for="patientCode">Kode Verifikasi Pasien</label>
        <input
          type="text"
          id="patientCode"
          placeholder="Kode dari Puskesmas"
          required
        >
      `;
    }
  }

  modal.innerHTML = `
    <div class="login-box">

      <button class="close-modal" aria-label="Tutup">
        &times;
      </button>

      <div class="login-logo">✿</div>

      <span class="section-label">CARE · CONNECT · CURE</span>

      <h2>
        ${isRegister ? "Buat Akun" : "Selamat Datang"}
      </h2>

      <p class="login-description">
        ${isRegister
          ? "Daftarkan akun " + roleName + " untuk menggunakan TEMANI."
          : "Masuk ke TEMANI sebagai " + roleName + "."
        }
      </p>

      <form id="authForm">

        ${extraFields}

        <label for="phone">Nomor HP</label>
        <input
          type="tel"
          id="phone"
          placeholder="Contoh: 081234567890"
          autocomplete="tel"
          required
        >

        <label for="password">Kata Sandi</label>
        <input
          type="password"
          id="password"
          placeholder="Masukkan kata sandi"
          minlength="8"
          autocomplete="${isRegister ? "new-password" : "current-password"}"
          required
        >

        ${isRegister ? `
          <label for="confirmPassword">Ulangi Kata Sandi</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Ulangi kata sandi"
            minlength="8"
            required
          >
        ` : ""}

        <button type="submit" class="login-submit">
          ${isRegister ? "Daftar Sekarang" : "Masuk"}
        </button>

      </form>

      <p class="login-message" id="authMessage">
        ${role === "petugas"
          ? "Akun petugas dibuat oleh administrator."
          : isRegister
            ? `Sudah punya akun? <a href="#" id="switchAuth">Masuk di sini</a>`
            : `Belum punya akun? <a href="#" id="switchAuth">Daftar di sini</a>`
        }
      </p>

      <div class="login-footer">
        TEMANI · CARE · CONNECT · CURE
      </div>

    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  // Close modal

  function closeModal() {
    modal.remove();
    document.body.style.overflow = "";
  }

  modal.querySelector(".close-modal")
    .addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  // Switch login and registration

  const switchAuth = modal.querySelector("#switchAuth");

  if (switchAuth) {
    switchAuth.addEventListener("click", event => {
      event.preventDefault();

      showAuthModal(
        role,
        isRegister ? "login" : "register"
      );
    });
  }

  // Form submission

  modal.querySelector("#authForm")
    .addEventListener("submit", event => {
      event.preventDefault();

      const phone = modal.querySelector("#phone").value.trim();
      const password = modal.querySelector("#password").value;

      const message = modal.querySelector("#authMessage");

      if (!phone || !password) return;

      if (isRegister) {
        const fullName =
          modal.querySelector("#fullName").value.trim();

        const confirmPassword =
          modal.querySelector("#confirmPassword").value;

        if (password !== confirmPassword) {
          alert("Kata sandi tidak sama.");
          return;
        }

        if (role === "keluarga") {
          const relationship =
            modal.querySelector("#relationship").value;

          const patientCode =
            modal.querySelector("#patientCode").value.trim();

          if (!relationship || !patientCode) {
            alert("Lengkapi data hubungan dan kode pasien.");
            return;
          }
        }

        if (role === "pasien") {
          const patientCode =
            modal.querySelector("#patientCode").value.trim();

          if (!patientCode) {
            alert("Masukkan kode verifikasi pasien.");
            return;
          }
        }

        if (!fullName) {
          alert("Nama lengkap wajib diisi.");
          return;
        }

        alert(
          "Form pendaftaran berhasil diisi. " +
          "Verifikasi akun akan tersedia setelah backend TEMANI terpasang."
        );

           } else {
        const dashboardPages = {
          pasien: "dashboard-pasien.html",
          keluarga: "dashboard-keluarga.html",
          petugas: "dashboard-petugas.html"
        };

        const destination = dashboardPages[role];

        if (!destination) {
          alert("Dashboard tidak ditemukan.");
          return;
        }

        alert(
          "Simulasi login berhasil sebagai " +
          roleNames[role] +
          ". Kamu akan diarahkan ke dashboard."
        );

        window.location.href = destination;
      }
    });
}


// 6. ESCAPE KEY TO CLOSE MODAL

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const modal = document.querySelector(".login-modal");

    if (modal) {
      modal.remove();
      document.body.style.overflow = "";
    }
  }
});


// 7. NAVIGATION ACTIVE STATE

const navigationItems =
  document.querySelectorAll(".nav-links a");

navigationItems.forEach(link => {
  link.addEventListener("click", () => {
    navigationItems.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add("active");
  });
});
