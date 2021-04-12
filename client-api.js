const getTodoList = async () => {
    const url = 'http://localhost:3000/';
	const data = {description: "buy oatmeal", done: false};
	const res = await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: { 
			"Content-Type": "application/json", 
		},
	});
	const json = await res.json();
	return json;
}
const showResult = async (data) => console.log(data);

document.querySelector("button").addEventListener("click", () => {
getTodoList().then(showResult);
});