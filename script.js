<script>
const apiURL = "https://script.google.com/macros/s/AKfycbyAUUfmCV2eJkCojufudmjCDKOmVD3xvOGzKSuUhqibma-sbM9vmRI04kRLOLNUZe0m/exec";

document.getElementById("regForm").addEventListener("submit", async e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  const res = await fetch(apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  if (result.status === "success") {
    e.target.style.display = "none";
    document.getElementById("successMsg").style.display = "block";
  }
});
</script>
