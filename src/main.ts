import "./app.css";
import App from "./App.svelte";

let parsedJson = {};

try {
  parsedJson = JSON.parse(document.body.innerText);
  document.body.innerHTML = ''
} catch (e) {
}

const app = parsedJson
  ? new App({
    target: document.body,
    props: {
      jsonObject: parsedJson,
    },
  })
  : null;

export default app;
