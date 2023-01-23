let btn = document.querySelector(".btn");
let table = document.querySelector(".table");

if (btn) {
  btn.addEventListener("click", () => {
    // table.innerHTML += "<tr><td>42</td><td>54</td></tr>";
    let tr = document.createElement("tr");
    let tdF = document.createElement("tdF");
    let tdS = document.createElement("tdS");
    tdF.innerText = "text 1";
    tdS.innerText = "text 2";
    tr.append(tdF, tdS);
    table.appendChild(tr);
  });
}
