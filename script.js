function toggleSwitches() {
    const switch6 = document.getElementById("switch6");
  
    if (switch6.checked) {
      for (let i = 1; i <= 5; i++) {
        const switchElement = document.getElementById(`switch${i}`);
        switchElement.checked = false;
      }
    }
  }