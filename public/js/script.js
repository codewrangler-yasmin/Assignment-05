// Custom Functions

function textValue(id) {
  const convertNumber = parseInt(document.getElementById(id).innerText);
  return convertNumber;
}

function inputValue(id) {
  const convertNumber = parseFloat(document.getElementById(id).value);
  return convertNumber;
}
// Get the sticky header element
const stickyHeader = document.getElementById("sticky-header");
const stickyNav = document.getElementById("sticky-nav");

// Add a scroll event listener
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    stickyNav.classList.remove("bg-amber-50");
  } else {
    stickyNav.classList.add("bg-amber-50");
  }
});

// Blog
const blogBtn = document.getElementById("blog-btn");
blogBtn.addEventListener("click", function () {
  window.location = "./blog.html";
  // hide footer
  const hideFooter = document.getElementById("footer");
  hideFooter.classList.add("hidden");
});

// variables
const donateNow1 = document.getElementById("donate-now-1");
const donateNow2 = document.getElementById("donate-now-2");
const donateNow3 = document.getElementById("donate-now-3");

// create innerHTML for confirmation section
const confirmDonation = document.getElementById("confirmation-details");
const donateCards = document.getElementById("donate-cards");

// donation tab
const donationBtn = document.getElementById("donation-btn");

// history tab
const historyBtn = document.getElementById("history-btn");

// modal container
const modalContainer = document.getElementById("modal-container");

// modal close button
const closeBtn = document.getElementById("close-btn");

// Modal close button event
closeBtn.addEventListener("click", function () {
  modalContainer.classList.add("hidden");
});

// close modal on window click
window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.classList.add("hidden");
  }
});

// donation button add event listener
donationBtn.addEventListener("click", function () {
  historyBtn.classList.remove("bg-neon");
  donationBtn.classList.add("bg-neon");
  donateCards.classList.remove("hidden");
  confirmDonation.classList.add("hidden");

  // show footer
  const showFooter = document.querySelector("footer");
  showFooter.classList.remove("hidden");
});

// history button add event listener
historyBtn.addEventListener("click", function () {
  donationBtn.classList.remove("bg-neon");
  historyBtn.classList.add("bg-neon");
  donateCards.classList.add("hidden");
  confirmDonation.classList.remove("hidden");

  // hide footer
  const hideFooter = document.getElementById("footer");
  hideFooter.classList.add("hidden");
});

// donate now first button click event
donateNow1.addEventListener("click", function () {
  // get main balance as number
  const mainBalance = parseInt(
    document.getElementById("main-balance").innerText
  );

  // get variables for innerText and input value from custom functions
  const donateAmount = inputValue("donate-amount-1");
  const currentDonate = textValue("current-donate-1");

  // validation
  if (donateAmount !== "" && donateAmount > 0 && !isNaN(donateAmount)) {
    // main balance should be more than donation amount and donation amount should be more than 0 in order to make a donation
    if (mainBalance >= donateAmount && mainBalance > 0) {
      // Calculate donation and remaining balance
      const totalDonate = currentDonate + donateAmount;
      document.getElementById("current-donate-1").innerText = totalDonate;

      // clear input field after donation
      document.getElementById("donate-amount-1").value = "";

      // calculate remaining balance from main balance
      const remainingBalance = mainBalance - totalDonate;
      document.getElementById("main-balance").innerText = remainingBalance;

      // donation name variable
      const donationName = document.getElementById("donation-name-1").innerText;

      // create div inside confirmation section
      const div = document.createElement("div");
      div.className =
        "col-start-2 col-end-12 p-4 lg:p-8 rounded-2xl border border-gray-200";
      div.innerHTML = `
        <h2 class="text-xl font-bold text-gray-900 mb-4">
                ${donateAmount} Taka is Donated for ${donationName}, Bangladesh
        </h2>
        <p class="text-gray-400 text-sm">Date: ${new Date()}</p>
        `;

      // get the confirmation message in history section
      confirmDonation.insertBefore(div, confirmDonation.firstChild);

      // modal open
      modalContainer.classList.remove("hidden");
    } else {
      // clear input field after donation
      document.getElementById("donate-amount-1").value = "";

      // if the amount is more than main balance
      alert("You do not have sufficient Balance!");
      return;
    }
  } else {
    // clear input field after donation
    document.getElementById("donate-amount-1").value = "";

    // if the amount is 0, NaN and empty input field
    alert("Invalid Amount! Please give us a valid amount to proceed.");
    return;
  }
});

// donate now Second button click event
donateNow2.addEventListener("click", function () {
  // get main balance as number
  const mainBalance = parseInt(
    document.getElementById("main-balance").innerText
  );

  // get variables for innerText and input value from custom functions
  const donateAmount = inputValue("donate-amount-2");
  const currentDonate = textValue("current-donate-2");

  // validation
  if (donateAmount !== "" && donateAmount > 0 && !isNaN(donateAmount)) {
    // main balance should be more than donation amount and donation amount should be more than 0 in order to make a donation
    if (mainBalance >= donateAmount && mainBalance > 0) {
      // Calculate donation and remaining balance
      const totalDonate = currentDonate + donateAmount;
      document.getElementById("current-donate-2").innerText = totalDonate;

      // clear input field after donation
      document.getElementById("donate-amount-2").value = "";

      // calculate remaining balance from main balance
      const remainingBalance = mainBalance - totalDonate;
      document.getElementById("main-balance").innerText = remainingBalance;

      // donation name variable
      const donationName = document.getElementById("donation-name-2").innerText;

      // create div inside confirmation section
      const div = document.createElement("div");
      div.className =
        "col-start-2 col-end-12 p-8 rounded-2xl border border-gray-200";

      div.innerHTML = `
     <h2 class="text-xl font-bold text-gray-900 mb-4">
            ${donateAmount} Taka is Donated for ${donationName}, Bangladesh
     </h2>
     <p class="text-gray-400 text-sm">Date: ${new Date()}</p>
    `;

      // get the confirmation message in history section
      confirmDonation.insertBefore(div, confirmDonation.firstChild);

      // modal open
      modalContainer.classList.remove("hidden");
    } else {
      // clear input field after donation
      document.getElementById("donate-amount-2").value = "";

      // if the amount is more than main balance
      alert("You do not have sufficient Balance!");
      return;
    }
  } else {
    // clear input field after donation
    document.getElementById("donate-amount-2").value = "";

    // if the amount is 0, NaN and empty input field
    alert("Invalid Amount! Please give us a valid amount to proceed.");
    return;
  }
});

// donate now third button click event
donateNow3.addEventListener("click", function () {
  // get main balance as number
  const mainBalance = parseInt(
    document.getElementById("main-balance").innerText
  );

  // get variables for innerText and input value from custom functions
  const donateAmount = inputValue("donate-amount-3");
  const currentDonate = textValue("current-donate-3");

  // validation
  if (donateAmount !== "" && donateAmount > 0 && !isNaN(donateAmount)) {
    // main balance should be more than donation amount and donation amount should be more than 0 in order to make a donation
    if (mainBalance >= donateAmount && mainBalance > 0) {
      const totalDonate = currentDonate + donateAmount;
      document.getElementById("current-donate-3").innerText = totalDonate;

      // clear input field after donation
      document.getElementById("donate-amount-3").value = "";

      // calculate remaining balance from main balance
      const remainingBalance = mainBalance - totalDonate;
      document.getElementById("main-balance").innerText = remainingBalance;

      // donation name variable
      const donationName = document.getElementById("donation-name-3").innerText;

      // create div inside confirmation section
      const div = document.createElement("div");
      div.className =
        "col-start-2 col-end-12 p-8 rounded-2xl border border-gray-200";

      div.innerHTML = `
     <h2 class="text-xl font-bold text-gray-900 mb-4">
            ${donateAmount} Taka is Donated for ${donationName}, Bangladesh
     </h2>
     <p class="text-gray-400 text-sm">Date: ${new Date()}</p>
    `;

      // get the confirmation message in history section
      confirmDonation.insertBefore(div, confirmDonation.firstChild);

      // modal open
      modalContainer.classList.remove("hidden");
    } else {
      // clear input field after donation
      document.getElementById("donate-amount-3").value = "";

      // if the amount is more than main balance
      alert("You do not have sufficient Balance!");
      return;
    }
  } else {
    // clear input field after donation
    document.getElementById("donate-amount-3").value = "";

    // if the amount is 0, NaN and empty input field
    alert("Invalid Amount! Please give us a valid amount to proceed.");
    return;
  }
});
