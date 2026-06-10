const whatsappNumber =
"26663000793";

const form =
document.getElementById("orderForm");

form.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const phone =
    document.getElementById("phone").value;

    const email =
    document.getElementById("email").value;

    const delivery =
    document.getElementById("delivery").value;

    const notes =
    document.getElementById("notes").value;

    const total =
    document.getElementById("total-price")
    .innerText;

    const message =

`*NEW HABO-LIJO ORDER*

Name: ${name}

Phone: ${phone}

Email: ${email}

Method: ${delivery}

Total: ${total}

Notes:
${notes}`;

    const url =

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank"
    );

});