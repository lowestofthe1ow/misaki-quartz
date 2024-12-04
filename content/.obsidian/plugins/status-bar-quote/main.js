/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => StatusBarQuote
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// components/SampleModal.ts
var import_obsidian = require("obsidian");
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleModal_default = SampleModal;

// components/MySettingTab.ts
var import_obsidian2 = require("obsidian");
var MySettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Pick one quote that makes you brave" });
    new import_obsidian2.Setting(containerEl).setName("QUOTE").setDesc("What drives you?").addText((text) => text.setPlaceholder("Enter your mantra").setValue(this.plugin.settings.quote).onChange(async (value) => {
      console.log("Mantra: " + value);
      this.plugin.settings.quote = value;
      await this.plugin.saveSettings();
    }));
  }
};
var MySettingTab_default = MySettingTab;

// main.ts
var DEFAULT_SETTINGS = {
  quote: "Take chances, make mistakes, get messy."
};
var StatusBarQuote = class extends import_obsidian3.Plugin {
  async onload() {
    await this.loadSettings();
    const statusBar = this.addStatusBarItem();
    statusBar.createEl("span", { text: `${this.settings.quote} \u270D\uFE0F` });
    const ribbonIconEl = this.addRibbonIcon("dice", "Replace quote", (evt) => {
      console.log("ribbon clicked");
    });
    this.addCommand({
      id: "open-modal-replace-quote",
      name: "Replace status bar quote",
      callback: () => {
        new SampleModal_default(this.app).open();
      }
    });
    this.addSettingTab(new MySettingTab_default(this.app, this));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};


/* nosourcemap */