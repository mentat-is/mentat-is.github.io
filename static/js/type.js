//Original: https://codepen.io/FelixLuciano/pen/PoqdMKP

async function init() {
  const node = document.querySelector("#type-text");

  await sleep(2000);
  node.innerText = "";

  while (true) {
    let words = [
      "Windows event logs",
      "systemd logs",
      "webservers logs",
      "Windows registry hives",
      "firewall logs",
      "antivirus logs",
      "EDR logs",
      "browsers history",
      "VPN logs",
      "SIEM logs",
      "DFIR tools' outputs",
    ];

    let shuffled = words
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    for (const w of shuffled) {
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
