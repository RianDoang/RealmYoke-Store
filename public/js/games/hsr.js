// Hamburger menu
const hamburger = document.querySelector("#hamburgerMenu");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.add("hamburger-active");
  navMenu.classList.remove("hidden");
  setTimeout(() => {
    navMenu.classList.remove("-translate-y-5");
    navMenu.classList.add("translate-y-0");
    navMenu.classList.remove("opacity-0");
    navMenu.classList.add("opacity-100");
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

// Region Section
document.addEventListener("DOMContentLoaded", function () {
  const regionSelect = document.getElementById("region");

  regionSelect.addEventListener("change", function () {
    const selectedRegion = regionSelect.value;
    console.log("Region yang dipilih:", selectedRegion);

    if (selectedRegion === "Asia") {
      console.log("Asia dipilih secara default.");
    }
  });
});
// End Region Section

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
let selectedPrice = "0";

function selectDiamond(amount, price) {
  selectedDiamond = `${amount} Oneiric Shard`;
  // Simpan harga yang dipilih
  selectedPrice = price;
}
function selectPayment(paymentMethod) {
  // Simpan hanya nama metode pembayaran
  selectedPayment = paymentMethod;
}
function formatWhatsAppNumber(number) {
  // Format nomor WhatsApp dengan tanda - setiap 4 digit
  return number.replace(/(\d{4})(?=\d)/g, "$1-");
}

// Membuat no. unik transaksi
function generateTransactionId() {
  // Ambil 10 digit terakhir dari timestamp
  const timestamp = Date.now().toString().slice(-10);
  const randomPart = Math.floor(Math.random() * 10000)
    .toString()
    // Bagian acak 4 digit
    .padStart(4, "0");
  // Gabungkan timestamp (10 digit) dan angka acak (4 digit)
  return `${timestamp}${randomPart}`;
}

let transactionId;

function printOrder() {
  const userId = document.getElementById("userId").value;
  const regionId = document.getElementById("region").value;
  const whatsappNumber = document.getElementById("whatsappNumber").value;

  // Buat nomor transaksi unik
  transactionId = generateTransactionId();

  // Gabungkan userId dan zoneId
  const userZoneId = `${userId} | ${regionId}`;
  document.getElementById("userZoneIdDisplay").textContent = userZoneId;
  document.getElementById("nominalLayanan").textContent = selectedDiamond;
  document.getElementById("paymentMethod").textContent = selectedPayment;
  document.getElementById("totalPrice").textContent = `Rp${selectedPrice}`;
  document.getElementById("whatsappNumberDisplay").textContent =
    // Format dan tampilkan nomor WhatsApp
    formatWhatsAppNumber(whatsappNumber);
  document.getElementById(
    "transactionIdDisplay"
  ).textContent = `${transactionId}`;
  // Tampilkan section detail pembelian
}
// End Print Order User

// Order Now Popup
const orderNow = document.getElementById("orderNow");
const orderSummary = document.getElementById("orderSummary");
const alertForm = document.getElementById("alertForm");

orderNow.addEventListener("click", function () {
  const userId = document.getElementById("userId").value;
  const whatsappNumber = document.getElementById("whatsappNumber").value;

  if (!userId || !whatsappNumber) {
    Swal.fire({
      title: "Error!",
      text: "Pastikan tidak ada yang kosong!",
      icon: "error",
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Close",
    });

    console.log("not allowed");
  } else {
    orderSummary.classList.add("flex");
    orderSummary.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      orderSummary.classList.remove("opacity-0");
      orderSummary.classList.add("opacity-100");
      orderSummary.classList.remove("-translate-y-10");
      orderSummary.classList.add("translate-y-0");
    }, 200);

    console.log("allowed");
  }
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

// Create and send order
document.getElementById("createOrder").addEventListener("click", function () {
  const userId = document.getElementById("userId").value;
  const regionId = document.getElementById("region").value;
  const whatsappNumber = document.getElementById("whatsappNumber").value;

  // Format nomor WhatsApp yang akan dikirim
  const formattedWhatsAppNumber = formatWhatsAppNumber(whatsappNumber);

  // Ambil waktu saat order
  const orderTime = new Date();
  const day = String(orderTime.getDate()).padStart(2, "0");
  const month = String(orderTime.getMonth() + 1).padStart(2, "0");
  const year = orderTime.getFullYear();
  const hours = String(orderTime.getHours()).padStart(2, "0");
  const minutes = String(orderTime.getMinutes()).padStart(2, "0");
  const formattedOrderTime = `${day}/${month}/${year} (${hours}:${minutes})`;

  const message =
    `*Detail Pembelian:*\n\n` +
    `${formattedOrderTime}\n\n` +
    `*No. Transaksi:* ${transactionId}\n` +
    `*Kategori:* Honkai: Star Rail\n` +
    `*UID:* ${userId}\n` +
    `*Region ID:* ${regionId}\n` +
    `*Order:* ${selectedDiamond}\n` +
    `*Pembayaran:* ${selectedPayment}\n` +
    `*No. WhatsApp:* ${formattedWhatsAppNumber}\n\n` +
    `*Total Harga:* *Rp${selectedPrice}*\n\n` +
    `Terima kasih telah melakukan pemesanan.`;

  // Encode URL
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/6287776837873?text=${encodedMessage}`;

  window.open(url, "_blank");
});
// End Create and send order
