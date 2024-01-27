// Sayfa yüklendiğinde çalışacak fonksiyon
window.onload = function () {
  // Modal'ı otomatik kapat
  closeModal();
};

// Modal'ı açan fonksiyon
function openModal(imageSrc, altText, modalHeader, modalText) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("modalImage").alt = altText;
  document.getElementById("modalHeader").innerHTML = modalHeader;
  document.getElementById("modalText").innerHTML = modalText;
  document.body.style.overflow = "hidden";
}

// Modal'ı kapatan fonksiyon
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto";
}
