document.addEventListener("scroll", () => {
  console.log(scrollY);

  if (scrollY >= 100) {
    document.querySelector("img").classList.add("upArrowShow");
  } else {
    document.querySelector("img").classList.remove("upArrowShow");
  }

  //ALL ANIMATIONS
  // Left Animations
  if (scrollY >= 200 && scrollY <= 1475) {
    document
      .getElementsByClassName("feature")[0]
      .classList.add("featureAnimeLeft");

    document
      .getElementsByClassName("feature")[2]
      .classList.add("featureAnimeLeft");
  } else {
    document
      .getElementsByClassName("feature")[0]
      .classList.remove("featureAnimeLeft");

    document
      .getElementsByClassName("feature")[2]
      .classList.remove("featureAnimeLeft");
  }

  //Right Animations
  if (scrollY >= 200 && scrollY <= 1475) {
    document
      .getElementsByClassName("feature")[1]
      .classList.add("featureAnimeRight");

    document
      .getElementsByClassName("feature")[3]
      .classList.add("featureAnimeRight");
  } else {
    document
      .getElementsByClassName("feature")[1]
      .classList.remove("featureAnimeRight");

    document
      .getElementsByClassName("feature")[3]
      .classList.remove("featureAnimeRight");
  }
});
