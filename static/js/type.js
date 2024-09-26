//Original: https://codepen.io/FelixLuciano/pen/PoqdMKP

async function init() {
  const node = document.querySelector("#type-text");

  await sleep(2000);
  node.innerText = "";

  while (true) {
    let words = [
      "evtx",
      "systemd",
      "apache",
      "registry",
      "firewall",
      "antivirus",
      "browser",
    ];
    for (const w of words) {
      await node.type(w);
      await sleep(3000);
      await node.delete(w);
    }
  }
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
class TypeAsync extends HTMLSpanElement {
  get typeInterval() {
    const randomMs = 200 * Math.random();
    return randomMs < 50 ? 10 : randomMs;
  }

  async type(text) {
    for (let character of text) {
      this.innerText += character;
      await sleep(this.typeInterval);
    }
  }

  async delete(text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1);
      await sleep(this.typeInterval);
    }
  }
}

customElements.define("type-async", TypeAsync, { extends: "span" });

init();
