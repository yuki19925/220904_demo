let dotOne = document.getElementById("dot-one");
let dotTwo = document.getElementById("dot-two");
let dotThree = document.getElementById("dot-three");
let selectedImg = document.getElementById("selected-img");
let contentSubtitle = document.getElementById("content-subtitle");
let contentTitle = document.getElementById("content-title");

dotOne.onclick = () => {
  console.log("Dot One Clicked");
  dotTwo.classList.remove("active");
  dotThree.classList.remove("active");
  dotOne.classList.add("active");
  selectedImg.src =
    "https://images.unsplash.com/photo-1513553404607-988bf2703777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80";
  contentTitle.innerHTML =
    "Ocean Acidification Alliance issed an Action Plan toolkit";
};

dotTwo.onclick = () => {
  console.log("Dot Two Clicked");
  dotOne.classList.remove("active");
  dotThree.classList.remove("active");
  dotTwo.classList.add("active");
  selectedImg.src =
    "https://images.unsplash.com/photo-1506125840744-167167210587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80";
  contentTitle.innerHTML = "Ocean Alliance is located in deep water.";
};

dotThree.onclick = () => {
  console.log("Dot Three Clicked");
  dotOne.classList.remove("active");
  dotTwo.classList.remove("active");
  dotThree.classList.add("active");
  selectedImg.src =
    "https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
  contentTitle.innerHTML =
    "SEA Acidification Alliance issed an Action Plan toolkit";
};
