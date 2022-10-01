/*
 * @Author: your name
 * @Date: 2022-10-01 20:33:59
 * @LastEditTime: 2022-10-01 20:39:43
 * @LastEditors: yuhan
 * @Description:
 * @FilePath: \demoshow\src\utils\index.js
 */

// 16进制转rgba
export function sixteenToRgb(str, opacity) {
  var r, g, b, rgb;
  if (str.length == 7) {
    r = parseInt(str.substr(1, 2), 16);
    g = parseInt(str.substr(3, 2), 16);
    b = parseInt(str.substr(5, 2), 16);
  } else if (str.length == 4) {
    r = parseInt("" + str.substr(1, 1) + str.substr(1, 1), 16);
    g = parseInt("" + str.substr(2, 1) + str.substr(2, 1), 16);
    b = parseInt("" + str.substr(3, 1) + str.substr(3, 1), 16);
  } else {
    return "false";
  }
  if (opacity) {
    rgb = `rgba(${r},${g},${b},${opacity})`;
  } else {
    rgb = "rgb(" + r + "," + g + "," + b + ")";
  }

  return rgb;
}
