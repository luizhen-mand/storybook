var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/InputUpload/index.tsx
import React, { useId, useState } from "react";

// src/components/InputUpload/inputupload.module.css
var inputupload_default = {};

// src/components/InputUpload/index.tsx
var InputUploadRoot = (_a) => {
  var _b = _a, { children, className } = _b, props = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ React.createElement("div", __spreadValues({ className: `${inputupload_default.inputUpload} ${className || ""}` }, props), children);
};
var InputUploadContainer = (_a) => {
  var _b = _a, {
    onFilesSelected,
    children
  } = _b, props = __objRest(_b, [
    "onFilesSelected",
    "children"
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const inputId = useId();
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);
    onFilesSelected(files);
  };
  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files || []);
    onFilesSelected(files);
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    __spreadValues({
      className: `${inputupload_default.inputUpload__container} ${isDragging ? inputupload_default.inputUpload__containerDragging : ""}`,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop
    }, props),
    children,
    /* @__PURE__ */ React.createElement("label", { htmlFor: inputId, className: "sr-only" }),
    /* @__PURE__ */ React.createElement(
      "input",
      __spreadValues({
        id: inputId,
        type: "file",
        className: inputupload_default.inputUpload__input,
        multiple: true,
        onChange: handleFileInputChange,
        "aria-labelledby": "upload-button-text",
        "aria-label": "Upload file"
      }, props)
    )
  );
};
var InputUploadButton = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement("button", __spreadValues({ className: inputupload_default.inputUpload__button, id: "upload-button-text" }, props), children);
};
var InputUpload = {
  Root: InputUploadRoot,
  Container: InputUploadContainer,
  Button: InputUploadButton
};

// src/components/Button/index.tsx
import React2 from "react";

// src/components/Button/button.module.css
var button_default = {};

// src/components/Button/index.tsx
function ButtonRoot(_a) {
  var _b = _a, { children, color, bgcolor = "gray", type = "button", iconPosition, textColor, active, round, border, className } = _b, props = __objRest(_b, ["children", "color", "bgcolor", "type", "iconPosition", "textColor", "active", "round", "border", "className"]);
  return /* @__PURE__ */ React2.createElement(
    "button",
    __spreadValues({
      className: `${button_default["ds-button"]}${color ? ` ${button_default[`ds-button--textcolor${color}`]}` : ""}${` ${button_default[`ds-button--${bgcolor}`]}`}${iconPosition ? ` ${button_default[`ds-button--${iconPosition}`]}` : ""}${textColor ? ` ${button_default[`ds-button--${textColor}`]}` : ""}${border ? ` ${button_default["ds-button--border"]}` : ""}${round ? ` ${button_default["ds-button--round"]}` : ""}${active ? ` ${button_default["ds-button--active"]}` : ""}${className ? ` ${className}` : ""}`,
      "data-testid": "ButtonTest",
      type
    }, props),
    children
  );
}
function ButtonIcon(_a) {
  var _b = _a, { children, size = "sm" } = _b, props = __objRest(_b, ["children", "size"]);
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      className: `${button_default["ds-button__icon"]} ${button_default[`ds-button__icon--${size}`]}`
    }, props),
    children
  );
}
var Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon
};

// src/components/InputText/index.tsx
import React3 from "react";
import MaskedInput from "react-text-mask";

// src/components/InputText/inputtext.module.css
var inputtext_default = {};

// src/components/InputText/index.tsx
function InputTextRoot(_a) {
  var _b = _a, { children, inputSize, className } = _b, props = __objRest(_b, ["children", "inputSize", "className"]);
  return /* @__PURE__ */ React3.createElement(
    "div",
    __spreadValues({
      className: `${inputtext_default["ds-inputtext"]}${inputSize ? ` ${inputtext_default[`ds-inputtext--${inputSize}`]}` : ""}${className ? ` ${className}` : ""}`
    }, props),
    children
  );
}
function InputTextInput(_a) {
  var _b = _a, { children, error, childrenPosition, mask = [] } = _b, props = __objRest(_b, ["children", "error", "childrenPosition", "mask"]);
  const value = props.value;
  const handleChange = props.onChange;
  const InputComponent = mask.length ? /* @__PURE__ */ React3.createElement(
    MaskedInput,
    __spreadProps(__spreadValues({}, props), {
      mask,
      value,
      onChange: handleChange,
      className: `${inputtext_default["ds-inputtext__input"]}${error ? ` ${inputtext_default["ds-inputtext__input--error"]}` : ""}`
    })
  ) : /* @__PURE__ */ React3.createElement(
    "input",
    __spreadProps(__spreadValues({}, props), {
      value,
      onChange: handleChange,
      className: `${inputtext_default["ds-inputtext__input"]}${error ? ` ${inputtext_default["ds-inputtext__input--error"]}` : ""}`
    })
  );
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      className: `${inputtext_default["ds-inputtext__wrapper"]}${childrenPosition ? ` ${inputtext_default[`ds-inputtext__wrapper--${childrenPosition}`]}` : ""}`
    },
    InputComponent,
    children
  );
}
function InputTextLabel(_a) {
  var _b = _a, { children, required } = _b, props = __objRest(_b, ["children", "required"]);
  return /* @__PURE__ */ React3.createElement(
    "label",
    __spreadValues({
      className: inputtext_default["ds-inputtext__label"]
    }, props),
    children,
    required && /* @__PURE__ */ React3.createElement("span", { className: inputtext_default["ds-inputtext__label--required"] }, "*")
  );
}
function InputTextMessage(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React3.createElement(
    "p",
    __spreadValues({
      className: inputtext_default["ds-inputtext__alert"]
    }, props),
    children
  );
}
function InputTextIcon(_a) {
  var _b = _a, { children, type = "button" } = _b, props = __objRest(_b, ["children", "type"]);
  return /* @__PURE__ */ React3.createElement(
    "button",
    __spreadValues({
      type,
      className: inputtext_default["ds-inputtext__icon"],
      "data-testid": "InputTextIcon"
    }, props),
    children
  );
}
var InputText = {
  Root: InputTextRoot,
  Input: InputTextInput,
  Label: InputTextLabel,
  Message: InputTextMessage,
  Icon: InputTextIcon
};

// src/components/Card/index.tsx
import React4 from "react";

// src/components/Card/card.module.css
var card_default = {};

// src/components/Card/index.tsx
function CardRoot(_a) {
  var _b = _a, { children, className, onClick } = _b, props = __objRest(_b, ["children", "className", "onClick"]);
  return /* @__PURE__ */ React4.createElement(
    "div",
    __spreadValues({
      className: `${card_default.card} ${className ? className : ""}`.trim(),
      "data-testid": "CardTest",
      onClick
    }, props),
    children
  );
}
function CardTitle(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React4.createElement(
    "span",
    __spreadValues({
      className: card_default.card__title,
      "data-testid": "CardTitleTest"
    }, props),
    children
  );
}
function CardDescription(_a) {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ React4.createElement(
    "span",
    __spreadValues({
      className: card_default.card__description,
      "data-testid": "CardDescriptionTest"
    }, props),
    children
  );
}
var Card = {
  Root: CardRoot,
  Title: CardTitle,
  Description: CardDescription
};
export {
  Button,
  Card,
  InputText,
  InputUpload,
  InputUploadButton,
  InputUploadContainer,
  InputUploadRoot
};
//# sourceMappingURL=index.mjs.map