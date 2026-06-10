const contactForm =
document.getElementById(
"contactForm"
);

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Thank you for contacting Habo-Lijo. We'll get back to you soon."
            );

            contactForm.reset();

        }
    );

}