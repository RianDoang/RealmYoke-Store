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

// TopUp Toggle
const diamondButtons = document.querySelector(".diamond-buttons");
const diamondButtonsMenu = diamondButtons.querySelectorAll("button");

// Tambahkan event listener untuk setiap tombol
diamondButtonsMenu.forEach((button) => {
  button.addEventListener("click", function () {
    // Reset semua tombol ke status default
    diamondButtonsMenu.forEach((btn) => {
      btn.classList.remove("bg-amber-500");
      btn.classList.add("bg-slate-800");
      btn.classList.remove("border-amber-700");
      btn.classList.add("border-slate-800");
    });

    // Aktifkan tombol yang diklik
    this.classList.add("bg-amber-500");
    this.classList.remove("bg-slate-800");
    this.classList.add("border-amber-700");
    this.classList.remove("border-slate-800");
  });
});
// End TopUp Toggle

// E-Wallet Toggle
const eWallet = document.getElementById("eWallet");
const eWalletMenu = document.getElementById("eWalletMenu");
const eWalletMenuBtn = eWalletMenu.querySelectorAll("button");

eWallet.addEventListener("click", function () {
  eWalletMenu.classList.toggle("h-0");
  eWalletMenu.classList.toggle("md:h-36");
  eWalletMenu.classList.toggle("h-52");

  eWalletMenuBtn.forEach((eWalletBtn) => {
    eWalletBtn.classList.toggle("opacity-0");
    eWalletBtn.classList.toggle("opacity-100");

    setTimeout(() => {
      eWalletBtn.classList.toggle("-z-10");
    }, 100);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const eWalletMenu = document.getElementById("eWalletMenu");

  if (eWalletMenu) {
    // Ambil semua tombol di dalam eWalletMenu
    const paymentButtons = eWalletMenu.querySelectorAll(".payment-method");

    // Tambahkan event listener untuk setiap tombol
    paymentButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Reset border dari semua tombol ke status default
        paymentButtons.forEach((btn) => {
          btn.classList.remove("border-amber-600");
          btn.classList.add("border-slate-800");
        });

        // Aktifkan border pada tombol yang diklik
        this.classList.add("border-amber-600");
        this.classList.remove("border-slate-800");
      });
    });
  }
});

// End E-Wallet Toggle

// Print Order User
let selectedDiamond = "-";
let selectedPayment = "-";
let selectedPrice = "-";

function selectDiamond(amount, price) {
  selectedDiamond = `${amount} Diamonds`;
  selectedPrice = price; // Simpan harga yang dipilih
}

function selectPayment(paymentMethod) {
  selectedPayment = paymentMethod; // Simpan hanya nama metode pembayaran
}

function formatWhatsAppNumber(number) {
  // Format nomor WhatsApp dengan tanda - setiap 4 digit
  return number.replace(/(\d{4})(?=\d)/g, "$1-");
}

function printOrder() {
  const userId = document.getElementById("userId").value;
  const zoneId = document.getElementById("zoneId").value;
  const whatsappNumber = document.getElementById("whatsappNumber").value;

  // Gabungkan userId dan zoneId
  const userZoneId = `(${userId}) (${zoneId})`;

  document.getElementById("userZoneIdDisplay").textContent = userZoneId;
  document.getElementById("nominalLayanan").textContent = selectedDiamond;
  document.getElementById("paymentMethod").textContent = selectedPayment; // Tampilkan hanya nama metode pembayaran
  document.getElementById("totalPrice").textContent = `Rp${selectedPrice}`;
  document.getElementById("whatsappNumberDisplay").textContent =
    formatWhatsAppNumber(whatsappNumber); // Format dan tampilkan nomor WhatsApp

  // Tampilkan section detail pembelian
  document.getElementById("orderSummary").classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}
// End Print Order User

// Order Now Popup
const orderNow = document.getElementById("orderNow");
const orderSummary = document.getElementById("orderSummary");
const payNow = document.getElementById("payNow");

orderNow.addEventListener("click", function () {
  const userId = document.getElementById("userId").value;
  const zoneId = document.getElementById("zoneId").value;
  const whatsappNumber = document.getElementById("whatsappNumber").value;

  if (!userId || !zoneId || !whatsappNumber) {
    payNow.classList.add("cursor-not-allowed");
    payNow.classList.add("opacity-30");
    payNow.classList.remove("hover:bg-amber-600");
    console.log("not allowed");
  } else {
    payNow.classList.remove("cursor-not-allowed");
    payNow.classList.remove("opacity-30");
    payNow.classList.add("hover:bg-amber-600");
    console.log("allowed");
  }

  orderSummary.classList.add("flex");
  orderSummary.classList.remove("hidden");

  setTimeout(() => {
    orderSummary.classList.remove("opacity-0");
    orderSummary.classList.add("opacity-100");
    orderSummary.classList.remove("-translate-y-10");
    orderSummary.classList.add("translate-y-0");
  }, 200);
});

const cancelOrder = document.getElementById("cancelOrder");

cancelOrder.addEventListener("click", function () {
  orderSummary.classList.add("opacity-0");
  orderSummary.classList.remove("opacity-100");
  orderSummary.classList.add("-translate-y-10");
  orderSummary.classList.remove("translate-y-0");

  setTimeout(() => {
    orderSummary.classList.remove("flex");
    orderSummary.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 200);
});
// ENd Order Now Popup
