function pickColor(priority) {
  if (priority === 1) {
    return "#d3f9d8";
  } else if (priority === 2) {
    return "#37b24d";
  } else if (priority === 3) {
    return "#ffd43b";
  } else if (priority === 4) {
    return "#e67700";
  } else if (priority === 5) {
    return "#e03131";
  }
}

export default pickColor;
