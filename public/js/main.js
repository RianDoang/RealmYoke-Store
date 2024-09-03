// Hamburger menu
const hamburger = document.querySelector("#hamburgerMenu");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.add("hamburger-active");
  navMenu.classList.remove("hidden");
  setTimeout(() => {
    navMenu.classList.remove("-translate-y-5");
    navMenu.classList.toggle("translate-y-0");
    navMenu.classList.remove("opacity-0");
    navMenu.classList.toggle("opacity-100");
  }, 1);
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("-translate-y-5");
    navMenu.classList.remove("translate-y-0");
    navMenu.classList.add("opacity-0");
    navMenu.classList.remove("opacity-100");
    setTimeout(() => {
      navMenu.classList.add("hidden");
    }, 200);
  }
});
// End Hamburger menu

// Navbar Menu
// Dapatkan elemen tautan berdasarkan ID
const primaryLink = document.getElementById("primary");
const checkOrderLink = document.getElementById("check-order");

// Fungsi untuk menghapus efek dari semua tautan
function removeActiveEffect() {
  primaryLink.classList.remove("md:after:bg-amber-500");
  primaryLink.classList.add("md:after:bg-transparent");
  checkOrderLink.classList.remove("md:after:bg-amber-500");
  checkOrderLink.classList.add("md:after:bg-transparent");
}

// Tambahkan event listener untuk tautan "Home"
primaryLink.addEventListener("click", function () {
  removeActiveEffect(); // Hilangkan efek dari tautan lain
  primaryLink.classList.add("md:after:bg-amber-500"); // Tambahkan efek ke tautan "Home"
  primaryLink.classList.remove("md:after:bg-transparent"); // Hilangkan bg transparan
});

// Tambahkan event listener untuk tautan "Check Order"
checkOrderLink.addEventListener("click", function () {
  removeActiveEffect(); // Hilangkan efek dari tautan lain
  checkOrderLink.classList.add("md:after:bg-amber-500"); // Tambahkan efek ke tautan "Check Order"
  checkOrderLink.classList.remove("md:after:bg-transparent"); // Hilangkan bg transparan
});
// End Navbar Menu

// Cek pesanan
const menuList = document.getElementById("menuList");
const paymentList = document.getElementById("paymentList");
const footerPayment = document.getElementById("footerPayment");

footerPayment.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => {
    checkOrderLink.click();
  }, 500);
});

checkOrderLink.addEventListener("click", function () {
  menuList.classList.add("-translate-x-10");
  menuList.classList.add("fade-out");
  paymentList.classList.add("translate-x-10");

  setTimeout(() => {
    paymentList.classList.remove("hidden");
  }, 200);

  setTimeout(() => {
    menuList.classList.add("hidden");
    menuList.classList.remove("flex");
    paymentList.classList.remove("translate-x-10");
    paymentList.classList.add("translate-x-0");
    paymentList.classList.add("fade-in");
  }, 400);
});

primaryLink.addEventListener("click", function () {
  paymentList.classList.add("translate-x-10");
  paymentList.classList.add("fade-out");
  menuList.classList.add("-translate-x-10");

  license.classList.remove("translate-y-0");
  license.classList.add("translate-y-10");
  license.classList.remove("opacity-100");
  license.classList.add("opacity-0");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => {
    menuList.classList.add("flex");
    menuList.classList.remove("hidden");
  }, 200);

  setTimeout(() => {
    license.classList.add("hidden");
    menuList.classList.remove("opacity-0");
    menuList.classList.remove("translate-y-10");
  }, 350);

  setTimeout(() => {
    paymentList.classList.add("hidden");
    paymentList.classList.remove("flex");
    menuList.classList.remove("-translate-x-10");
    menuList.classList.add("translate-x-0");
    menuList.classList.remove("fade-out");
    menuList.classList.add("fade-in");
  }, 400);

  setTimeout(() => {
    menuList.classList.remove("translate-x-10");
    menuList.classList.remove("flex");
    menuList.classList.remove("fade-in");
    menuList.classList.remove("translate-x-0");
    paymentList.classList.remove("fade-in");
    paymentList.classList.remove("fade-out");
    paymentList.classList.remove("translate-x-0");
    paymentList.classList.remove("translate-x-10");
  }, 450);
});
// End Cek pesanan

// Nav Game list
document.addEventListener("DOMContentLoaded", function () {
  // Dapatkan elemen tautan berdasarkan ID
  const gameLink = document.getElementById("game");
  const voucherLink = document.getElementById("voucher");

  // Fungsi untuk menghapus efek dari semua tautan
  function removeActiveEffect() {
    gameLink.classList.remove("after:bg-slate-200");
    gameLink.classList.add("after:bg-transparent");
    voucherLink.classList.remove("after:bg-slate-200");
    voucherLink.classList.add("after:bg-transparent");
  }

  // Tambahkan event listener untuk tautan "Home"
  gameLink.addEventListener("click", function () {
    removeActiveEffect(); // Hilangkan efek dari tautan lain
    gameLink.classList.add("after:bg-slate-200"); // Tambahkan efek ke tautan "Home"
    gameLink.classList.remove("after:bg-transparent"); // Hilangkan bg transparan
  });

  // Tambahkan event listener untuk tautan "Check Order"
  voucherLink.addEventListener("click", function () {
    removeActiveEffect(); // Hilangkan efek dari tautan lain
    voucherLink.classList.add("after:bg-slate-200"); // Tambahkan efek ke tautan "Check Order"
    voucherLink.classList.remove("after:bg-transparent"); // Hilangkan bg transparan
  });

  // Game list
  const gameList = document.getElementById("gameList");
  const voucherList = document.getElementById("voucherList");

  voucherLink.addEventListener("click", function () {
    // add animasi gameList hidden
    gameList.classList.add("translate-y-10");
    gameList.classList.add("fade-out");
    voucherList.classList.add("translate-y-10");

    setTimeout(() => {
      voucherList.classList.add("flex");
      voucherList.classList.remove("hidden");
    }, 200);

    setTimeout(() => {
      gameList.classList.add("hidden");
      gameList.classList.remove("flex");
      voucherList.classList.remove("translate-y-10");
      voucherList.classList.add("translate-y-0");
      voucherList.classList.add("fade-in");
    }, 400);
  });

  gameLink.addEventListener("click", function () {
    voucherList.classList.add("translate-y-10");
    voucherList.classList.add("fade-out");
    gameList.classList.add("translate-y-10");

    setTimeout(() => {
      gameList.classList.add("flex");
      gameList.classList.remove("hidden");
    }, 200);

    setTimeout(() => {
      voucherList.classList.add("hidden");
      voucherList.classList.remove("flex");
      gameList.classList.remove("translate-y-10");
      gameList.classList.add("translate-y-0");
      gameList.classList.remove("fade-out");
      gameList.classList.add("fade-in");
    }, 400);

    setTimeout(() => {
      gameList.classList.remove("translate-y-0");
      gameList.classList.remove("fade-in");
      voucherList.classList.remove("fade-in");
      voucherList.classList.remove("fade-out");
      voucherList.classList.remove("translate-y-0");
      voucherList.classList.remove("translate-y-10");
    }, 450);
  });
  // End Game list

  const license = document.getElementById("license");
  const licenseBtn = document.getElementById("licenseBtn");
  const licenseBack = document.getElementById("licenseBack");

  licenseBtn.addEventListener("click", function () {
    menuList.classList.add("translate-y-10");
    menuList.classList.add("opacity-0");
    menuList.classList.remove("opacity-100");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      menuList.classList.add("hidden");
      license.classList.remove("hidden");
    }, 350);

    setTimeout(() => {
      license.classList.add("translate-y-0");
      license.classList.remove("translate-y-10");
      license.classList.add("opacity-100");
      license.classList.remove("opacity-0");
      primaryLink.classList.remove("md:after:bg-amber-500");
    }, 400);
  });

  licenseBack.addEventListener("click", function () {
    license.classList.remove("translate-y-0");
    license.classList.add("translate-y-10");
    license.classList.remove("opacity-100");
    license.classList.add("opacity-0");

    setTimeout(() => {
      license.classList.add("hidden");
      menuList.classList.remove("hidden");
      menuList.classList.add("translate-y-10");
    }, 350);

    setTimeout(() => {
      menuList.classList.remove("translate-y-10");
      menuList.classList.add("translate-y-0");
      menuList.classList.remove("opacity-0");
      menuList.classList.add("opacity-100");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      primaryLink.classList.add("md:after:bg-amber-500");
    }, 400);
  });
});
// End Nav Game list
