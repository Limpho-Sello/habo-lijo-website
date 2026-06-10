const customCakeForm =
document.getElementById(
"customCakeForm"
);

if(customCakeForm){

    customCakeForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
            "Thank you! Your custom cake request has been received."
            );

            customCakeForm.reset();

        }
    );

}