const form = document.forms[0],
	email = document.getElementById("email"),
	button = document.querySelector(".notify__submit"),
	spanError = document.querySelector(".span-error");

const colorRed = getComputedStyle(email).getPropertyValue("--color-light-red"),
	colorGray = getComputedStyle(email).getPropertyValue("--color-gray");

const initialValues = (message) => {
	spanError.style.display = "block";
	spanError.textContent = message;
};

email.addEventListener("input", (e) => {
	if (email.validity.valueMissing || email.validity.typeMismatch) {
		initialValues("Please provide a valid email address");
		email.style.border = `1px solid ${colorRed}`;
	} else {
		spanError.style.display = "none";
		email.style.border = `1px solid ${colorGray}`;
	}
});

form.addEventListener(
	"invalid",
	(e) => {
		form.classList.add("invalid");

		if (email.validity.valueMissing || email.validity.typeMismatch) {
			initialValues("Please provide a valid email address");
		}
	},
	true
);
