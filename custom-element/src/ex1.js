window.onload = (event) => {
  ele = document.getElementsByName("heloAttr")[0];
  helo = document.getElementsByTagName("he-lo")[0];
  console.log(ele);
  ele.onchange = (event) => {
    console.log(event);
    helo.setAttribute("content", event.target.value);
  };

  removeBtn = document.getElementById("remove");
  removeBtn.onclick = () => {
    helo.remove();
  };
  addBtn = document.getElementById("add");
  addBtn.onclick = () => {
    ele.append(helo);
  };
};

class Hello extends HTMLElement {
  constructor() {
    console.log("inside constructor");
    super();
    this.name = "Hello World";
    this.innerHTML = this.getAttribute("content");
  }

  connectedCallback() {
    console.log("inside connectedCallbac");
    //this.innerHTML = this.getAttribute("content");
  }
  disconnectedCallback() {
    console.log("inside disconnected");
  }
  adoptedCallback() {
    console.log("inside adopted");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue != newValue) {
      this.innerHTML = newValue;
    }
  }
  static get observedAttributes() {
    return ["content", "name"];
  }
}

class Bye extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: "open" });
    let wrapper = document.createElement("div");
    let content = this.getAttribute("content");
    wrapper.innerHTML = content;
    shadow.appendChild(wrapper);
  }
}

class MyP extends HTMLParagraphElement {
  constructor() {
    super();
    this.innerHTML = this.getAttribute("content");
  }
}

customElements.define("he-lo", Hello);
customElements.define("by-e", Bye);
customElements.define("my-p", MyP, { extends: "p" });
