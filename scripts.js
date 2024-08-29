const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (divider.length > 0 && dividend.length > 0) {
    result.innerText = Math.floor(dividend / divider);
  }else {
    result.innerText = "Division not performed. Both values are required in inputs. Try again"
  }
});