function loadDesigns(room) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  let images = [];

  if (room === "living") {
    images = [
      "living1.jpg",
      "living2.jpg",
      "living3.jpg",
      "living4.jpg",
      "living5.jpg",
      "living6.jpg"
    ];
  }

  if (room === "kitchen") {
    images = ["kitchen1.jpg", "kitchen2.jpg", "kitchen3.jpg"];
  }

  if (room === "bedroom") {
    images = ["bedroom1.jpg", "bedroom2.jpg","bedroom3.jpg"];
  }

  if (room === "bathroom") {
    images = ["bathroom1.jpg", "bathroom2.jpg","bathroom3.jpg"];
  }

  images.forEach(function(name) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = "assets/images/" + name;
    img.onclick = function() {
      document.getElementById("modal").style.display = "flex";
      document.getElementById("modalImg").src = img.src;
    };

    card.appendChild(img);
    gallery.appendChild(card);
  });
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function scrollToRooms() {
  document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
}