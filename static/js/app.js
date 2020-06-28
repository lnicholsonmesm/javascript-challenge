

var button = d3.select("#filter-btn");
var tableBody = d3.select("#table");
var stateDropdown = d3.select("#state");
var stateButton = d3.select("#dropdownMenuButton");
//console.log(tableBody);
button.on("click", makeTable);
stateButton.on("click", selectActive);
var stateList = [];

function getStates() {
    data.forEach((datastuff) => {
        if (!stateList.includes(datastuff.state)) {
            stateList.push(datastuff.state)
            var stateItem = stateDropdown.append("a").attr("class", "dropdown-item").text(datastuff.state);
            //var  = row.attr("td");
            //<a class="dropdown-item" href="#"></a>
        }
    });
    console.log(stateList);
};

getStates();
$('.dropdown-menu a').click(function () {
    $(this).parents(".dropdown").find(".btn").html($(this).text());
    $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
});
$('.dropdown-toggle').dropdown();



function selectActive() {

};


function makeTable() {
    d3.event.preventDefault();
    //console.log(tableBody)
    //tableBody.html = ""
    d3.selectAll("tbody tr").remove();
    //reset = '<tbody id="table"></tbody>'
    var text = d3.select("#datetime").node().value;
    var state = d3.select("#dropdownMenuButton").text();
    console.log(state);
    //console.log(data[0])
    data.forEach((datastuff) => {
        //console.log(datastuff)
        if (state.trim() === "") {
            if (datastuff.datetime == text) {
                var row = tableBody.append("tr");
                Object.entries(datastuff).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
                });
            };
        };
        console.log(datastuff.datetime);
        console.log(datastuff.state);
        if (datastuff.datetime == text && datastuff.state === state) {
            var row = tableBody.append("tr");
            Object.entries(datastuff).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);

            });
        };
    });
};
