export function toggleClass(element, className) {
  console.log("触发改变主题");
  if (!element || !className) {
    throw new Error("主题变色参数缺失");
  }

  let classString = element.className;
  const nameIndex = classString.indexOf(className);

  if (nameIndex === -1) {
    classString = className;
  }

  console.log(classString);
  element.className = classString;
}
