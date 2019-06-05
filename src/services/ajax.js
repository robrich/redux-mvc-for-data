// TODO: consider replacing with axios
export async function postAjax(body) {
  try {
    var res = await fetch('/api', {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body)
    });
    const json = await res.json();
    return json;
  } catch (err) {
    return { success:false, err };
  }
}
