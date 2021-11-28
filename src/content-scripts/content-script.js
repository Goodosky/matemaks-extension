import { getData, createUploadDataListener, addAnswerBtn, replaceVideoId, hidePremiumBtns } from "../functions.js";

const url = location.href;

// Hide premium btn
hidePremiumBtns();

getData().then((data) => {
  if (!data) {
    // Display alert with input[type="file"]
    let elem = document.createElement("div");
    elem.style.cssText =
      "position:sticky;bottom:0;max-width:100%;z-index:999;background:#51392c;display:flex;flex:auto;justify-content:space-between;align-items:center;padding:20px";
    elem.innerHTML =
      '<div style="color:#f5f5f5;font-weight:600;font-size:20px">Aby korzystać z wtyczki "Matemaks extension" musisz dodać dane. <a href="#" style="color:#bbb">(kliknij po więcej informacji)</a></div>';
    elem.innerHTML += '<input type="file" id="upload" accept=".json" style="background:#eee;padding:10px" />';

    document.body.appendChild(elem);

    // listen for adding a file and save it in storage.local
    createUploadDataListener();

    return;
  }

  // Processing data
  if (url.includes("matematyka-matura-podstawowa-kurs.html")) {
    const lessons = document.querySelectorAll(".lekcja");
    const videoIds = data["lessons_info"]["basic_matura"];

    for (let i = 0; i < lessons.length; i++) {
      replaceVideoId(lessons[i], videoIds[i + 1]);
    }
  } else if (url.includes("matematyka-matura-rozszerzona-kurs.html")) {
    const lessons = document.querySelectorAll(".lekcja");
    const videoIds = data["lessons_info"]["extended_matura"];

    for (let i = 0; i < lessons.length; i++) {
      replaceVideoId(lessons[i], videoIds[i + 1]);
    }
  } else {
    const questionsOnCurrentPage = document.querySelectorAll(".zadanie:not(.lekcja)");
    const allQuestions = data["questions"];

    for (const question of questionsOnCurrentPage) {
      addAnswerBtn(question);
      replaceVideoId(question, allQuestions[question.id]);
    }
  }
});
