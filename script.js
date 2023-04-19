//your JS code here. If required.
//your JS code here. If required.
function removeColor() {
    const selectElement = document.getElementById("colorSelect");
    const selectedIndex = selectElement.selectedIndex;
    if (selectedIndex !== -1) {
      selectElement.remove(selectedIndex);
    }
  }
  
  const removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');
  removeButton.addEventListener("click", removeColor);
  