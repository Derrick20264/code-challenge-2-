document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guestForm");
  const input = document.getElementById("guestName");
  const list = document.getElementById("guestList");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = input.value.trim();

    if (name === "") {
      alert("Please enter a name.");
      return;
    }

    if (list.children.length >= 10) {
      alert("Guest list is full!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = name + " - Not Attending ";

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Toggle RSVP";
    rsvpBtn.addEventListener("click", function () {
      if (li.textContent.includes("Not Attending")) {
        li.textContent = name + " - Attending ";
      } else {
        li.textContent = name + " - Not Attending ";
      }
      li.appendChild(rsvpBtn);
      li.appendChild(removeBtn);
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value = "";
  });
});
