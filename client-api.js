let url = "http://localhost:3000";

async function getData() {
  try {
    const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
    let result = await response.json();
    return result;
    } else {
        console.log(`Somehting went wrong: ${error}`);
    }
  } catch (err) {
    console.log(err);
  }
}

async function postData(todo) {
  try {
    const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
        "Content-Type": "application/json",
    },
    });
    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

async function deleteData(id) {
  try {
    const deleteUrl = `${url}/${id}`;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
      console.log(err);
  }
};