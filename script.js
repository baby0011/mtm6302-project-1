//global variables

let $contactList = [
    {
        firstname: "Ben",
        lastname: "White",
        email: "ben.w@gmail.com",
        city: "London",
        province: "Eastern"
    },
    {
        firstname: "Benjamin",
        lastname: "Zolo",
        email: "benja.z@gmail.com",
        city: "Nethes",
        province: "Western"
    },
    {
        firstname: "Pharma",
        lastname: "Phonesi",
        email: "fenti@co.ke",
        city: "London",
        province: "Chester"
    }
];
const contactList = document.getElementById("contact-list");
const contactItems = [];
let indexOfContact = -1;
const $form = document.getElementById('newContact');
const $addBox = document.getElementById("add-box");
const $addButtonText = document.getElementById("addButtonText");
const $contactDetails = document.getElementById("contact-details");
const $firstNameTitle = document.getElementById("firstNameTitle");
//const $phoneNumber = document.getElementById("phoneNumber");
const $lastNameTitle = document.getElementById("lastNameTitle");
const $emailAddress = document.getElementById("emailAddress");
//const $streetName = document.getElementById("streetName");
const $cityName = document.getElementById("cityName");
const $provinceAbbr = document.getElementById("provinceAbbr");

//global functions

function showDetail(e) {
    $addButtonText.textContent = "Close";
    $addButtonText.style.fontSize = "30px";
    $addButtonText.style.fontWeight = "500";
    $addButtonText.style.textAlign = "right";
    $addButtonText.style.marginTop = "2em";
    const nameTag = e.target.id;
    const activeIndexStr = nameTag.replace("listItem","");
    const activeIndex = Number(activeIndexStr);
    $contactDetails.style.display = "flex";
    $firstNameTitle.textContent = $contactList[activeIndex].firstname;
    $lastNameTitle.textContent = $contactList[activeIndex].lastname;
    $emailAddress.textContent = $contactList[activeIndex].email;
    $cityName.textContent = $contactList[activeIndex].city;
    $provinceAbbr.textContent = $contactList[activeIndex].province;
};

function closeDetails () {
    $addButtonText.textContent = "Add+";
    $addButtonText.style.fontSize = "24px";
    $addButtonText.style.fontWeight = "600";
    $addButtonText.style.textAlign = "left";

    $contactDetails.style.display = "none";
};



for(const $contact of $contactList)  {
    indexOfContact++;
    const nameText = $contact.firstname + " " + $contact.lastname;
    const nameTextId = "listItem" + indexOfContact;
    contactItems.push(`<li class="listname" id="${nameTextId}">${nameText}</li>`);
};

contactList.innerHTML += contactItems.join(""); 

$form.addEventListener('submit', function (e) {
    e.preventDefault()

    const $newContact ={};
    for (const element of $form.elements) {
        if (element.name) {
            const elementName = element.name;
            $newContact[elementName] = element.value;
        };
    };

    $contactList.push($newContact);

    const lastItem = $contactList.length - 1;
    const nameText = $contactList[lastItem].firstname + " " + $contactList[lastItem].lastname;
    const nameTextId = "listItem" + lastItem;
    contactItems.push(`<li class="listname" id="${nameTextId}">${nameText}</li>`);
    contactList.innerHTML = contactItems.join("");
    
    //refreshing the listeners on names
    
    let $listNames = document.querySelectorAll(".listname");

    for (const $names of $listNames) {
        $names.addEventListener('click', showDetail)
    };

    // Clearing the form values

    for (const element of $form.elements) {
        element.value = "";
    };

});


//starting event to open details on name click

let $listNames = document.querySelectorAll(".listname");

for (const $names of $listNames) {
    $names.addEventListener('click', showDetail)
};

//event listener for closing button

$addButtonText.addEventListener('click', closeDetails)

