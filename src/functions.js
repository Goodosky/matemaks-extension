export function getData() {
  return browser.storage.local.get(["data"]).then((res) => res.data);
}

export function createUploadDataListener() {
  // Read and save in storage.local the uploaded file
  const upload = document.querySelector("#upload");
  upload.addEventListener("change", () => {
    if (upload.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        const result = JSON.parse(reader.result);
        browser.storage.local.set({ data: result }).then(location.reload());
      });

      reader.readAsText(upload.files[0]);
    }
  });
}

export function addAnswerBtn(element) {
  // Check if answer exists for this question
  if (element.querySelector(".p_o")) {
    // Add btn with answer
    createBtn(element, "but b_o", "Odpowiedź");
  } else {
    // Add btn to indicate no answer
    createBtn(element, "but b_o", "Brak odpowiedzi");
  }
}

function createBtn(element, classes, text) {
  // Create btn
  let newBtn = document.createElement("div");
  newBtn.classList = classes;
  newBtn.innerText = text + "*";

  // Add btn to container with buttons
  const buttonsContainer = element.querySelector(".buttons");
  buttonsContainer.appendChild(newBtn);
}

export function replaceVideoId(element, newId) {
  // check if premium element
  if (element.querySelector(".b_prem")) {
    // Replace Video id
    element.setAttribute("yt", newId);

    // Add video answer btn
    if (newId) {
      createBtn(element, "but b_v", "Lekcja wideo");
    } else createBtn(element, "but b_v", "Brak wideo dla tej lekcji");
  }
}

export function hidePremiumBtns() {
  // Get everyone premium bts
  const premiumBts = document.querySelectorAll(".b_prem");

  // Add hide class for everyone premium btn
  premiumBts.forEach((element) => {
    element.classList.add("hide");
  });
}
