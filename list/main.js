const table = document.querySelector("#inventory-table");
const tbody = table.querySelector("tbody");

const appendToList = ({id=-1, name="(unnamed)", desc="", count=0}, register=true) => {
    const trow = tbody.appendChild(document.createElement('tr'));
    trow.setAttribute("x-item-id", id);
    // empty spacer...
    // TODO: Auto space with some sort of grid css stuff
    trow.appendChild(document.createElement("td")).innerHTML = `
<a href="../view#id=${id}" class="btn-floating btn-small purple waves-effect waves-light">
    <i class="material-icons">info</i>
</a>`;
    // name
    trow.appendChild(document.createElement("td")).innerText = name;
    trow.appendChild(document.createElement("td")).innerText = desc;
    trow.appendChild(document.createElement("td")).innerText = count;
    trow.appendChild(document.createElement("td")).innerHTML = `
       <!-- <a class="settings-item-btn btn-floating btn-small blue waves-effect waves-light">
            <i class="material-icons">settings</i>
        </a> -->
        <a class="delete-item-btn btn-floating btn-small red waves-effect waves-light">
            <i class="material-icons">delete</i>
        </a>`;
    if (register) registerItem(trow);
    return trow;
}

const registerItem = (trow) => {
    const id = trow.getAttribute("x-item-id")
    // deletion button
    trow.querySelector(".delete-item-btn").addEventListener('click', () => {
        // TODO: post to server with deleted id
        location.reload();
    });
}

appendToList({
    id: 1,
    name: "Apple",
    desc: "Very red apple. Or green",
    count: 5
});