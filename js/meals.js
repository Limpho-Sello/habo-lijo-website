const filterButtons =
document.querySelectorAll(".filter-btn");

const mealCards =
document.querySelectorAll(".meal-card");

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const category =
            button.dataset.category;

            mealCards.forEach(card => {

                if(
                    category === "all" ||
                    card.dataset.category === category
                ){

                    card.style.display = "block";

                }

                else{

                    card.style.display = "none";

                }

            });

        }
    );

});