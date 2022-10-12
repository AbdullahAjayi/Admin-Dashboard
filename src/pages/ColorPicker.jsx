import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor = args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview"></div>
        <div className="flex justify-center flex-wrap items-center gap-20">
          <div className="text-2xl font-semibold mt-2 mb-4">
            <p>Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              inline
              showButtons={false}
              modeSwitcher={false}
              change={change}
            />
          </div>
          <div className="text-2xl font-semibold mt-2 mb-4">
            <p>Inline Picker</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              inline
              showButtons={false}
              modeSwitcher={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
