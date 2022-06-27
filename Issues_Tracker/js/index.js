let issuesContainer = document.getElementById("list-container");

let closeCounter = document.getElementById("closeCounter");
let openCounter = document.getElementById("openCounter");

let text2 = document.createElement("p");

//getting closed issues count
function getCloseCount() {
    let stringifiedNum = localStorage.getItem("closedCount")
    let parsedNum = JSON.parse(stringifiedNum)
    if (parsedNum === null) {
        return 0
    } else {
        return parsedNum
    }
}

let closeCount = getCloseCount();


//changing issue status onclick of close button
function closeItem(closeBtnId, statusId, uniqueNo) {
    let statusItem = document.getElementById(statusId);
    let closeBtnElement = document.getElementById(closeBtnId)

    statusItem.textContent = `Closed`
    statusItem.classList.add("bg-success");

    let index = issuesList.findIndex(function (item) {
        let itemId = item.id;
        if (itemId === uniqueNo) {
            return true;
        } else {
            return false;
        }
    })

    issuesList[index].status = "Closed";
    issuesList[index].bgColor = "bg-success";
    issuesList[index].setStatus = "disabled";

    closeBtnElement.setAttribute("disabled", true)

    closeCount += 1;
    closeCounter.textContent = closeCount
    localStorage.setItem("closedCount", JSON.stringify(closeCount));

    openedCount -= 1;
    openCounter.textContent = openedCount;
    localStorage.setItem("openedCount", JSON.stringify(openedCount))

    localStorage.setItem("issues", JSON.stringify(issuesList));
}
closeCounter.textContent = closeCount


//deleting issue onclick of delete button
function deleteItem(issueItemId, uniqueNo) {

    delItem = document.getElementById(issueItemId)
    console.log(delItem)
    issuesContainer.removeChild(delItem)
    let index = issuesList.findIndex(function (item) {
        let itemId = item.id;
        if (itemId === uniqueNo) {
            if (item.status === 'Open') {
                openedCount -= 1;
                openCounter.textContent = openedCount;
                localStorage.setItem("openedCount", JSON.stringify(openedCount))
            } else if (item.status === "Closed") {
                closeCount -= 1;
                closeCounter.textContent = closeCount
                localStorage.setItem("closedCount", JSON.stringify(closeCount));
            }
            return true;

        } else {
            return false;
        }
    })
    console.log(index)
    issuesList.splice(index, 1);
    localStorage.setItem("issues", JSON.stringify(issuesList));
    if (issuesList.length == 0) {
        notfound();
        closeCount = 0;
        closeCounter.textContent = closeCount
        localStorage.setItem("closedCount", JSON.stringify(closeCount));

        openedCount = 0;
        openCounter.textContent = openedCount;
        localStorage.setItem("openedCount", JSON.stringify(openedCount))
    }


}


//getting open isses count
function getOpenCount() {
    let stringifiedOpenCount = localStorage.getItem("openedCount")
    let parsedOpenNum = JSON.parse(stringifiedOpenCount)
    if (parsedOpenNum === null) {
        return 0
    } else {
        return parsedOpenNum
    }
}

let openedCount = getOpenCount()

//creating issue
c = 0;

function createIssue(item) {
    let openedCount = 0;

    c = c + 1;
    let {
        id,
        title,
        description,
        severity,
        assignedTo,
        status,
        bgColor,
        setStatus,
        time
    } = item;



    let issueItemId = "issue" + c;
    let statusId = "status" + c;
    let closeBtnId = "close" + c;


    let issueItem = document.createElement("div");
    issueItem.classList.add("mt-4", "p-4", "list-item-container", "bg-white")
    issueItem.id = issueItemId;
    issuesContainer.appendChild(issueItem);

    let idEle = document.createElement("h5");
    idEle.textContent = `Issue ID:${id}`
    issueItem.appendChild(idEle);

    let timeEle = document.createElement("p");
    timeEle.textContent = `posted on ${time}`;
    issueItem.appendChild(timeEle);

    let statusEle = document.createElement("span");
    statusEle.id = statusId;
    statusEle.textContent = `${status}`;
    statusEle.classList.add(bgColor);
    statusEle.classList.add("badge", "badge-pill", "px-3", "py-2");
    issueItem.appendChild(statusEle);

    let titleElement = document.createElement("h2");
    titleElement.classList.add("my-3")
    titleElement.textContent = `${title}`
    issueItem.appendChild(titleElement);

    let descEle = document.createElement("p");
    descEle.textContent = `${description}`
    issueItem.appendChild(descEle);

    let priorityEle = document.createElement("p");
    priorityEle.textContent = "Prority ";
    issueItem.appendChild(priorityEle)

    let priorityText = document.createElement("span")
    priorityText.textContent = `${severity}`
    priorityText.classList.add("bg-secondary", "text-white", "badge", "px-3")
    priorityEle.appendChild(priorityText)


    let assignedEle = document.createElement("p");
    assignedEle.textContent = `Assigned To  ${assignedTo}`;
    issueItem.appendChild(assignedEle);

    let closeBtn = document.createElement("button");
    closeBtn.id = closeBtnId;
    closeBtn.textContent = "Close";
    closeBtn.setAttribute(setStatus, true)
    closeBtn.classList.add("btn", "btn-warning", "me-2");
    issueItem.appendChild(closeBtn)

    closeBtn.onclick = function () {

        closeItem(closeBtnId, statusId, id)
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("btn", "btn-danger");
    issueItem.appendChild(deleteBtn)

    deleteBtn.onclick = function () {
        deleteItem(issueItemId, id)
    }

}

// openCounter.textContent = openedCount

//retrieving form data onclick of add button
function getFormData(e) {

    e.preventDefault();
    let uniqueId = chance.guid();
    let titleEle = document.getElementById("title").value
    let desc = document.getElementById("description").value;
    let severity = document.getElementById("priority").value;
    let assigned = document.getElementById("responsible").value;

    let status = 'Open';
    let bgColor = 'bg-primary';
    let setStatus = 'enabled';

    let issue = {
        id: uniqueId,
        title: titleEle,
        description: desc,
        severity: severity,
        assignedTo: assigned,
        status: status,
        bgColor: bgColor,
        setStatus: setStatus,
        time: new Date().toLocaleString()
    }


    if (issuesList.length == 0) {
        issuesContainer.textContent = ""
    }


    if (titleEle !== "" && desc !== "" && severity !== "" && assigned !== "") {
        issuesList.push(issue);
        localStorage.setItem("issues", JSON.stringify(issuesList))
        text2.textContent ='';
        createIssue(issue)
        if (issue.status==='Open') {
            openedCount += 1;
            openCounter.textContent = openedCount;
            localStorage.setItem("openedCount", JSON.stringify(openedCount))
        }
    }

    document.getElementById("issueForm").reset()

   

}
openCounter.textContent = openedCount;
document.getElementById("issueForm").addEventListener("submit", getFormData)


//get list from local storage
function getListFromLocalStorage() {
    let stringifiedList = localStorage.getItem("issues")
    let parsedList = JSON.parse(stringifiedList)
    if (parsedList === null) {
        return []
    } else {
        return parsedList
    }
}

issuesList = getListFromLocalStorage();

//no issues found
function notfound() {
    let text = document.createElement("p");
    text.textContent = "No Issues Found";
    text.classList.add("text-center", "not-found", "mt-5")
    issuesContainer.textContent = ""
    issuesContainer.appendChild(text)
}

//rendering issues
function displayData(issuesList) {
    if (issuesList.length === 0) {
        notfound();
    } else {
        issuesContainer.textContent = ""
        for (let item of issuesList) {

            createIssue(item)
        }
    }

}

displayData(issuesList)

//rendering priority items
function getPriorityItems() {
    let selectedVal = document.getElementById("prioritySelector").value;
    issuesList = getListFromLocalStorage();

    if (selectedVal === "all") {
        issuesContainer.textContent = ""
        displayData(issuesList)
    } else {
        let filteredData = issuesList.filter(item =>
            item.severity == selectedVal
        )

        if (filteredData.length === 0) {
            // let text2 = document.createElement("p");
            text2.textContent = `No Issues Found with ${selectedVal} priority`;
            text2.classList.add("text-center", "not-found", "mt-5")
            issuesContainer.textContent = ""
            issuesContainer.appendChild(text2)

        } else {
            issuesContainer.textContent = ""
            displayData(filteredData)
        }
    }

}


document.getElementById("prioritySelector").addEventListener("change", getPriorityItems)