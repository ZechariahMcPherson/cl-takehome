const handleDropdownMenuItemClick = () => {
  const dropdownMenuButton = document.getElementById("dropdownMenuButton");
  const dropdownMenu = document.getElementById("item1Dropdown");
  const dropdownMenuButtonArrow = document.getElementById(
    "dropdownMenuButtonArrow"
  );

  console.log(dropdownMenuButtonArrow);

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
