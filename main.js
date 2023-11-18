
const btn = document.querySelector(".mainbtn");
const btnbox = document.querySelector(".btn");
const pr1 = document.querySelector(".pr1");
const pr2 = document.querySelector(".pr2");
const pr3 = document.querySelector(".pr3");

btnbox.addEventListener("click", function () {

    if (btnbox.classList.contains("monthly")) {
        btnbox.classList.remove("monthly");
        btnbox.classList.add("anually");
        pr1.innerHTML = ' <p class="pr1"><span>$</span>199.99</span> </p>';
        pr2.innerHTML = `    <p class="pr2"><span>$</span> 249.99</p>`;
        pr3.innerHTML = `    <p class="pr3"><span>$</span> 399.99</p>`;
    } else {
        btnbox.classList.add("monthly");
        btnbox.classList.remove("anually");
        pr1.innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>19.99</p>`;
        pr2.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>24.99</p>`;
        pr3.innerHTML = `  <p class="price-3"> <span class="dollar-sign">&dollar;</span>39.99</p>`;
    }
});