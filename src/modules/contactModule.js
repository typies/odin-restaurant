import "../styles/contact.css";

class ContactModule {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    render() {
        const formWrapper = document.createElement("div");
        formWrapper.classList.add("form-wrapper");

        formWrapper.appendChild(new ContactForm().render());
        this.domElements.contentDiv.replaceChildren(formWrapper);
    }
}

class ContactForm {
    constructor(name, email, phone, location, comments) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.comments = comments;
    }
    domElements = {
        form: document.querySelector(".contact-form"),
    };

    createInputLi(inputTitle, inputType, placeholder, required, selectOptions) {
        const newLi = document.createElement("li");
        newLi.classList.add(`${inputTitle.toLowerCase()}-wrapper`);

        const newLabel = document.createElement("label");
        newLabel.setAttribute("for", inputTitle.toLowerCase());
        newLabel.textContent = inputTitle;

        let newInput;
        if (inputType == "textarea") {
            newInput = document.createElement("textarea");
        } else if (inputType == "select") {
            newInput = document.createElement("select");
            selectOptions.forEach((option) => {
                const newOption = document.createElement("option");
                newOption.setAttribute("value", option.toLowerCase());
                newOption.textContent = option;
                newInput.appendChild(newOption);
            });
        } else {
            newInput = document.createElement("input");
            newInput.setAttribute("type", inputType);
        }
        newInput.setAttribute("placeholder", placeholder || "");
        newInput.setAttribute("name", `submitter-${inputTitle.toLowerCase()}`);
        newInput.setAttribute("id", inputTitle.toLowerCase());
        if (required) {
            newInput.setAttribute("required", true);
        }

        newLi.replaceChildren(newLabel, newInput);
        return newLi;
    }

    render() {
        // Render new form on page
        const newForm = document.createElement("form");
        newForm.classList.add("contact-form");

        newForm.appendChild(this.createInputLi("First", "text", "", true));
        newForm.appendChild(this.createInputLi("Last", "text", "", true));
        newForm.appendChild(this.createInputLi("Email", "email", "", true));
        newForm.appendChild(
            this.createInputLi("Home", "tel", "(___) ___-____")
        );
        newForm.appendChild(
            this.createInputLi("Work", "tel", "(___) ___-____")
        );
        newForm.appendChild(
            this.createInputLi("Location", "select", "", false, [
                "Tampa",
                "Orlando",
                "Miami",
            ])
        );
        newForm.appendChild(
            this.createInputLi(
                "Comments",
                "textarea",
                "Enter your comment here",
                true
            )
        );
        const submitBtn = document.createElement("button");
        submitBtn.textContent = "Send";
        newForm.appendChild(submitBtn);
        submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            if (!newForm.checkValidity()) {
                newForm.reportValidity();
            } else {
                this.renderThankYou();
            }
        });
        return (this.domElements.form = newForm);
    }

    renderThankYou() {
        const thankYouMessage = document.createElement("div");
        thankYouMessage.textContent = "Message sent.";

        this.domElements.form.replaceChildren(thankYouMessage);
    }
}

export default new ContactModule();
