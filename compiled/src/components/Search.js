//Search component;
var Search = () => React.createElement(
  "div",
  { className: "search-bar form-inline" },
  " ",
  React.createElement("input", { className: "form-control", type: "text" }),
  " ",
  React.createElement(
    "button",
    { className: "btn hidden-sm-down" },
    " ",
    React.createElement("span", { className: "glyphicon glyphicon-search" }),
    " "
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLFNBQVMsTUFDWDtBQUFBO0FBQUEsSUFBSyxXQUFVLHdCQUFmO0FBQUE7QUFDRSxpQ0FBTyxXQUFVLGNBQWpCLEVBQWdDLE1BQUssTUFBckMsR0FERjtBQUFBO0FBRUU7QUFBQTtBQUFBLE1BQVEsV0FBVSxvQkFBbEI7QUFBQTtBQUNFLGtDQUFNLFdBQVUsNEJBQWhCLEdBREY7QUFBQTtBQUFBO0FBRkYsQ0FERjs7QUFTQTtBQUNBO0FBQ0EsZUFBZUEsTUFBZiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlYXJjaCBjb21wb25lbnQ7XG52YXIgU2VhcmNoID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj4gey8qIHJlY3RhbmdsZSBzZWFyY2ggYmFyICovfVxuICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+IHsvKiBhbGxvd3MgdXNlciB0byBzZWFyY2gqL31cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPiB7LypjaGFuZ2VzIHNjcmVlbiBzaXplIGJhc2VkIG9uIHNjcmVlbiByZXNvbHV0aW9uICovfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+IHsvKiBUaGlzIGlzIGp1c3QgdGhlIHNlYXJjaCBpY29uICAqL31cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl19