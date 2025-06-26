const nums = document.querySelectorAll(".num");
const submitBtn = document.querySelector(".sub");
const thankState = document.querySelector(".thank-state");
const ratingState = document.querySelector(".rating-state");
const errorMessage = document.querySelector(".error-message");
const ratingSelected = document.querySelector("#ratingSelected")
let selectedNumber = 0;

nums.forEach(num => {
    num.addEventListener("click", () => {
        nums.forEach((n) => n.classList.remove("active"));

        num.classList.add("active");

        selectedNumber = parseInt(num.dataset.rating);

        errorMessage.classList.remove("show");
    })
});

submitBtn.addEventListener("click", () => {
    if(selectedNumber === 0){
        errorMessage.classList.add("show")
        return;
    }

    ratingSelected.textContent = selectedNumber;

    ratingState.classList.add("hidden");
    thankState.classList.add("active");
})