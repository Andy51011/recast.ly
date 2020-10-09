//VideoListEntry Component;
//Renders the list of videos stored in model on the right side of DOM
//TODO It's going to be an object with title, text description, image: thumbvail;
import exampleVideoData from "../data/exampleVideoData.js";
import VideoList from "./VideoList.js";
var VideoListEntry = props => React.createElement(
  "div",
  { className: "video-list-entry media" },
  " ",
  React.createElement(
    "div",
    { className: "media-left media-middle" },
    React.createElement("img", { className: "media-object", src: props.video.snippet.thumbnails.default.url, alt: "" })
  ),
  React.createElement(
    "div",
    { className: "media-body" },
    React.createElement(
      "div",
      { className: "video-list-entry-title" },
      "Video Title"
    ),
    React.createElement(
      "div",
      { className: "video-list-entry-detail" },
      "Video Description"
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJleGFtcGxlVmlkZW9EYXRhIiwiVmlkZW9MaXN0IiwiVmlkZW9MaXN0RW50cnkiLCJwcm9wcyIsInZpZGVvIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxJQUFJQyxpQkFBa0JDLEtBQUQsSUFDbkI7QUFBQTtBQUFBLElBQUssV0FBVSx3QkFBZjtBQUFBO0FBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx5QkFBZjtBQUNFLGlDQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLQSxNQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JDLFVBQXBCLENBQStCQyxPQUEvQixDQUF1Q0MsR0FBMUUsRUFBK0UsS0FBSSxFQUFuRjtBQURGLEdBREY7QUFJRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHdCQUFmO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSx5QkFBZjtBQUFBO0FBQUE7QUFGRjtBQUpGLENBREY7O0FBWUE7QUFDQTtBQUNBTixlQUFlTyxTQUFmLEdBQTJCO0FBQ3pCTCxTQUFPTSxVQUFVQyxNQUFWLENBQWlCQztBQURDLENBQTNCOztBQUlBO0FBQ0E7QUFDQSxlQUFlVixjQUFmIiwiZmlsZSI6IlZpZGVvTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9WaWRlb0xpc3RFbnRyeSBDb21wb25lbnQ7XG4vL1JlbmRlcnMgdGhlIGxpc3Qgb2YgdmlkZW9zIHN0b3JlZCBpbiBtb2RlbCBvbiB0aGUgcmlnaHQgc2lkZSBvZiBET01cbi8vVE9ETyBJdCdzIGdvaW5nIHRvIGJlIGFuIG9iamVjdCB3aXRoIHRpdGxlLCB0ZXh0IGRlc2NyaXB0aW9uLCBpbWFnZTogdGh1bWJ2YWlsO1xuaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSBcIi4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qc1wiXG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gXCIuL1ZpZGVvTGlzdC5qc1wiXG52YXIgVmlkZW9MaXN0RW50cnkgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+IHsvKiAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17cHJvcHMudmlkZW8uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsfSBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LXRpdGxlXCI+VmlkZW8gVGl0bGU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj5WaWRlbyBEZXNjcmlwdGlvbjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IFZpZGVvTGlzdEVudHJ5O1xuIl19