// This is the script file for this project written using JavaScript technology...
// This is some HTML elements captured in some constants for further DOM manipulations...
const textarea = document.getElementById("textarea");
const tagsEL = document.getElementById("tags");

// This is for focusing the textarea automatically...
textarea.focus();

// This method is for getting the information typed in the textarea into the script...
// And call the other utility methods 
textarea.addEventListener("keyup", (event) => {
  tagCreation(event.target.value);

  if (event.key === "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 10);
    randomSelector();
  }
});

// And this method is for small tag creation and appending onto the tag element side by side...
function tagCreation(input) {
  // This code will split and flter out the choices from the information we'hv got from the textarea separated by comma... 
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

    // And this code will create each choice into a small tag and then append it to the parent Tags container...
  tagsEL.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.innerText = tag;
    tagEl.classList.add("tag");
    tagsEL.appendChild(tagEl);
  });
}


// This is for selecting random tag among all the tags for some time between equal interval and highlighting and unhighlighting it by again using some utility methods...
function randomSelector() {

  const times = 30;

  // This code is for selecting random tag, then highlighting and unhighlighting it in 100ms equal interval...
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highLight(randomTag);
    setTimeout(() => {
      unhighLight(randomTag);
    }, 100);
  }, 100);

  // This code is for stoping random selection process and select the last random tag...
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highLight(randomTag);
    }, 100);
  }, times * 100);
}

// This is a utility method for choosing the random tag among all tags and returing it to caller method...
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

// This is a utility method for highlighting the tags... 
function highLight(tag) {
  tag.classList.add("highlight");
}

// This is a utility method for Unhighlighting the tags...
function unhighLight(tag) {
  tag.classList.remove("highlight");
}
