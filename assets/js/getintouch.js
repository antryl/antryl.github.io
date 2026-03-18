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

    const params = new URLSearchParams(formData);

    // Primary path: POST as urlencoded data (common apps script doPost(e.parameter) patterns)
    fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body: params.toString()
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
