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

    const queryString = new URLSearchParams(formData).toString();
    fetch(`${endpoint}?${queryString}`, {
        method: "GET",
        mode: "no-cors"
    })
    .then(() => {
        document.getElementById("thankYouModal").style.display = "flex";
        document.getElementById("contactForm").reset();
    })
    .catch(() => {
        // fallback path: GET as query parameters (common apps script doGet patterns)
        fetch(`${endpoint}?${params.toString()}`, {
            method: "GET",
            mode: "no-cors"
        })
        .then(() => {
            document.getElementById("thankYouModal").style.display = "flex";
            document.getElementById("contactForm").reset();
        })
        .catch(err => console.log("GetInTouch submission failed:", err));
    });
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("thankYouModal").style.display = "none";
});
