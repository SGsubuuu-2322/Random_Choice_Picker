const textarea = document.getElementById("textarea");
const tagsEL = document.getElementById("tags");

textarea.focus();

textarea.addEventListener("keyup", (event) => {
  tagCreation(event.target.value);

  if (event.key === "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 10);
    randomSelector();
  }
});

function tagCreation(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEL.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.innerText = tag;
    tagEl.classList.add("tag");
    tagsEL.appendChild(tagEl);
  });
}

function randomSelector() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highLight(randomTag);
    setTimeout(() => {
      unhighLight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highLight(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highLight(tag) {
  tag.classList.add("highlight");
}
function unhighLight(tag) {
  tag.classList.remove("highlight");
}
