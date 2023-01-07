async function getData() {
  try {
    let res = await fetch("http://localhost:3000/data");
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

let container = document.getElementById("cards");

function appendData(data) {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "smallcard");

    let img = document.createElement("img");
    img.src = el.ImageUrl;
    img.setAttribute("class", "img");

    let name = document.createElement("p");
    name.innerText = el.Name;

    let desc = document.createElement("p");
    desc.innerText = el.ShortDesc;

    let button = document.createElement("button");
    button.innerText = "View";
    button.setAttribute("class", "button");

    div.append(img, name, desc, button);
    container.append(div);
  });
}
