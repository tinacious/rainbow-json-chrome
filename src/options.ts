import "./app.css";
import Options from './Options.svelte'

const app = new Options({
  target: document.getElementById('root')!
})

export default app;
