const handleDropdownMenuItemClick = () => {
  const dropdownMenuButton = document.getElementById("dropdownMenuButton");
  const dropdownMenu = document.getElementById("item1Dropdown");
  const dropdownMenuButtonArrow = document.getElementById(
    "dropdownMenuButtonArrow"
  );

  if (!!dropdownMenu.classList.contains("display-block")) {
    dropdownMenuButton.classList.remove("dropdown-button-selected");
    dropdownMenu.classList.remove("display-block");
    dropdownMenuButtonArrow.classList.remove("downward-arrow");
  } else {
    dropdownMenuButton.classList.add("dropdown-button-selected");
    dropdownMenu.classList.add("display-block");
    dropdownMenuButtonArrow.classList.add("downward-arrow");
  }
};

const wantToSeeOnClick = animal => {
  const wantToSeeCards = document.getElementsByClassName("want-to-see-card");

  const birdsCheckbox = document.getElementById("birdsCheckbox");
  const catsCheckbox = document.getElementById("catsCheckbox");

  // neither or both checkboxes are checked = show both birds and cats
  if (
    (!birdsCheckbox.checked && !catsCheckbox.checked) ||
    (birdsCheckbox.checked && catsCheckbox.checked)
  ) {
    seeAllCards(wantToSeeCards);
  }
  // user wants to see birds
  else if (birdsCheckbox.checked) {
    seeBirds(wantToSeeCards);
  }

  // user wants to see cats
  else if (catsCheckbox.checked) {
    seeCats(wantToSeeCards);
  }
};

const seeAllCards = cards => {
  Object.values(cards).map(card => {
    card.classList.remove("display-none");
  });
};

const seeBirds = cards => {
  Object.values(cards).map(card => {
    if (card.classList.contains("bird-card")) {
      card.classList.remove("display-none");
    } else if (card.classList.contains("cat-card")) {
      card.classList.add("display-none");
    }
  });
};

const seeCats = cards => {
  Object.values(cards).map(card => {
    if (card.classList.contains("cat-card")) {
      card.classList.remove("display-none");
    } else if (card.classList.contains("bird-card")) {
      card.classList.add("display-none");
    }
  });
};
