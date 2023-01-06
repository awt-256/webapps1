const param = "id="
const requestedId = location.hash.indexOf(param) === -1 ? -1 : parseInt(location.hash.slice(location.hash.indexOf(param) + param.length));

const items = [{
    id: 1,
    name: "Apple",
    desc: "Very red apple. Or green",
    count: 5
}]

const itemFromDb = items.find(i => i.id === requestedId);

if (!itemFromDb) {
    document.querySelector("#not-found").style.display = ''
} else {
    document.querySelector("#item-name").value = itemFromDb.name;
    document.querySelector("#item-count").value = itemFromDb.count;
    document.querySelector("#item-desc").value = itemFromDb.desc;

    const saveBtn = document.querySelector("#save-item");
    const deleteBtn = document.querySelector("#delete-item");
    // TODO: when db is made clean this
    const renderedItem = {...itemFromDb} ;
    const updateSaveButton = () => {
        loopBy: {
            for (const key in renderedItem) {
                if (renderedItem[key] !== itemFromDb[key]) {
                    saveBtn.classList.remove("disabled");
                    break loopBy;
                }
            }

            saveBtn.classList.add("disabled");
        }
    }

    document.querySelector("#item-name")
        .oninput = document.querySelector("#item-count")
        .oninput = document.querySelector("#item-desc")
        .oninput = (event) => {
            const src = event.srcElement;
            const prop = src.getAttribute('x-data-key');
            if (!prop) return console.error("change to unknown property", event);
            renderedItem[prop] = src.type === 'number' ? parseInt(src.value) : src.value;
            updateSaveButton();
        };

    // saveBtn.addEventListener('click', () => {
    //     // TODO: post to server with updated data (renderedItem)
    //     location.href = "/list/"
    // });

    // deleteBtn.addEventListener('click', () => {
    //     // TODO: post to server with deleted id
    //     location.href = "/list/"
    // });

    document.querySelector("#viewer").style.display = '';
}