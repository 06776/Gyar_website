const fruits = document.querySelector("#fruits");

var termekek = ["alma", "körte", "barack", "szilva", "mandarin"];

termekek.forEach((termek) => {
  //console.log(termek);
  let li = document.createElement("li");
  li.textContent = termek;
  li.classList = "list-group-item sajat";
  fruits.append(li);
});
