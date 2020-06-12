var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//
var showResults = document.getElementById("itemsDark");

//

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
// show event
showResults.addEventListener("click", showItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// show detail
function showItem(e) {
  // console.log(e.target.textContent);
  // console.log(e.target.parentElement);
  data = e.target.parentElement;
  console.log(data.children.item(2));
  // arrayTest = e.target.parentElement.Array;
  // console.log(arrayTest);
  textData = data.innerText;
  // console.log(textData);
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
