document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const endpoint = "https://script.google.com/macros/s/AKfycbyQue1hc_tL68RzOv2H4lrZFWx071UYsun5Ew6fDighocHhIIVI41on38MN-5azXmw/exec";

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(() => {
        document.getElementById("thankYouModal").style.display = "flex";
        document.getElementById("contactForm").reset();
    })
    .catch(err => console.log(err));
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("thankYouModal").style.display = "none";
});
