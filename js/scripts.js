function handleChange(checkbox) {
	if (checkbox.checked) {
		console.log("monthly");
		document.getElementsByClassName("price")[0].innerHTML = "$19.99";
    document.getElementsByClassName("price")[1].innerHTML = "$24.99";
    document.getElementsByClassName("price")[2].innerHTML = "$39.99";
	} else {
		console.log("annually");
    document.getElementsByClassName("price")[0].innerHTML = "$199.99";
    document.getElementsByClassName("price")[1].innerHTML = "$249.99";
    document.getElementsByClassName("price")[2].innerHTML = "$399.99";
	}
}
