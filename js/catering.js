const cateringForm =
document.getElementById(
"cateringForm"
);

if(cateringForm){

    cateringForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
            "Thank you. Your catering request has been submitted."
            );

            cateringForm.reset();

        }
    );

}