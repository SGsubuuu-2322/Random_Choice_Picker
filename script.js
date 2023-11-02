const textarea = document.getElementById("textarea");
const tagsEL = document.getElementById("tags");

textarea.focus();

textarea.addEventListener("keyup", (event) => {
  tagCreation(event.target.value);
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
