import "./app.css";
import App from "./App.svelte";

let parsedJson = "";

try {
  parsedJson = JSON.parse(document.body.innerText);
  document.body.innerHTML = ''
} catch (e) {
  console.log("Not JSON", e);
}

console.log("JSON to render", parsedJson);

const app = parsedJson
  ? new App({
    target: document.body,
    props: {
      jsonString: parsedJson,
    },
  })
  : null;

export default app;
