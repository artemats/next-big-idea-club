// TOGGLE DASHBOARD NAV MENU //
const dashboardActiveLink = document.querySelector('.dashboard-nav li.active .link');
if(dashboardActiveLink){
    dashboardActiveLink.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.dashboard-nav').classList.toggle('is-active');
    });
}

// HIDE CARD NUMBERS //
const cardsArray = document.querySelectorAll('.card-content-number');
for(let i = 0; i < cardsArray.length; i++) {
    let numberText = cardsArray[i].innerHTML.replace(/\s/g, '');
    let last4 = numberText.substr(numberText.length - 4);
    cardsArray[i].innerHTML = '**** **** **** ' + last4;
}
// document.querySelectorAll('.card-content-number').forEach((number) => {
//     let numberText = number.innerHTML.replace(/\s/g, '');
//     let last4 = numberText.substr(numberText.length - 4);
//     // let first12 = numberText.slice(0,12);
//     number.innerHTML = '**** **** **** ' + last4;
// });

// TOGGLE DROPDOWN BOX //
const dropdownArray = document.querySelectorAll('.dropdown-header');
for(let i = 0; i < dropdownArray.length; i++) {
    // OPEN DROPDOWN BOX ON CLICK ANYWHERE //
    dropdownArray[i].addEventListener('click', function () {
        dropdownArray[i].parentElement.classList.toggle('is-active');
    });
    // CLOSE DROPDOWN BOX ON CLICK ANYWHERE //
    document.addEventListener("click", (evt) => {
        const flyoutElement = dropdownArray[i].parentElement;
        let targetElement = evt.target; // clicked element

        do {
            if (targetElement == flyoutElement) {
                return;
            }
            targetElement = targetElement.parentNode;
        } while (targetElement);

        dropdownArray[i].parentElement.classList.remove('is-active');
    });
}
// document.querySelectorAll('.dropdown-header').forEach((dropHeader) => {
//     // OPEN DROPDOWN BOX ON CLICK ANYWHERE //
//     dropHeader.addEventListener('click', function () {
//         dropHeader.parentElement.classList.toggle('is-active');
//     });
//     // CLOSE DROPDOWN BOX ON CLICK ANYWHERE //
//     document.addEventListener("click", (evt) => {
//         const flyoutElement = dropHeader.parentElement;
//         let targetElement = evt.target; // clicked element
//
//         do {
//             if (targetElement == flyoutElement) {
//                 return;
//             }
//             targetElement = targetElement.parentNode;
//         } while (targetElement);
//
//         dropHeader.parentElement.classList.remove('is-active');
//     });
// });
