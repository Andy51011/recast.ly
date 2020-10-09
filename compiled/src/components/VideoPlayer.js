//VideoPlayer component;
//creates html that will append Video src to App;
import exampleVideoData from "../data/exampleVideoData.js";
var VideoPlayer = props => React.createElement(
  "div",
  { className: "video-player" },
  React.createElement(
    "div",
    { className: "embed-responsive embed-responsive-16by9" },
    " ",
    React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/{props.video.id.videoId}", allowFullScreen: true }),
    " "
  ),
  React.createElement(
    "div",
    { className: "video-player-details" },
    " ",
    React.createElement(
      "h3",
      null,
      "Video Title"
    ),
    " ",
    React.createElement(
      "div",
      null,
      "Video Description"
    ),
    " "
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJleGFtcGxlVmlkZW9EYXRhIiwiVmlkZW9QbGF5ZXIiLCJwcm9wcyIsInByb3BUeXBlcyIsInZpZGVvIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLE9BQU9BLGdCQUFQLE1BQTZCLDZCQUE3QjtBQUNBLElBQUlDLGNBQWVDLEtBQUQsSUFDaEI7QUFBQTtBQUFBLElBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUFBO0FBQ0Usb0NBQVEsV0FBVSx1QkFBbEIsRUFBMEMsS0FBSyx3REFBL0MsRUFBeUcscUJBQXpHLEdBREY7QUFBQTtBQUFBLEdBREY7QUFJRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRjtBQUFBO0FBQUE7QUFKRixDQURGOztBQVlBO0FBQ0E7QUFDQUQsWUFBWUUsU0FBWixHQUF3QjtBQUN0QkMsU0FBT0MsVUFBVUMsTUFBVixDQUFpQkM7QUFERixDQUF4Qjs7QUFJQTtBQUNBO0FBQ0EsZUFBZU4sV0FBZiIsImZpbGUiOiJWaWRlb1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVmlkZW9QbGF5ZXIgY29tcG9uZW50O1xuLy9jcmVhdGVzIGh0bWwgdGhhdCB3aWxsIGFwcGVuZCBWaWRlbyBzcmMgdG8gQXBwO1xuaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSBcIi4uL2RhdGEvZXhhbXBsZVZpZGVvRGF0YS5qc1wiXG52YXIgVmlkZW9QbGF5ZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPiB7Lypmb3JtYXRzIHRoZSBkaXYgdyAxNjo5IGFzcGVjdCByYXRpbyovfVxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e1wiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQve3Byb3BzLnZpZGVvLmlkLnZpZGVvSWR9XCJ9IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT4gey8qIGlGcmFtZSBpcyBhIG5lc3RlZCBicm93c2luZyBjb250ZXh0LCB3aGljaCBlbWJlZHMgYW5vdGhlciBIVE1MIHBhZ2UgaW50byB0aGUgY3VycmVudCBvbmUqL31cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXBsYXllci1kZXRhaWxzXCI+IHsvKkRlc2NyaXB0aW9uIG9mIHRoZSB2aWRlbyAqL31cbiAgICAgIDxoMz5WaWRlbyBUaXRsZTwvaDM+IHsvKnByb3Aub2JqZWN0LnRpdGxlPyAqL31cbiAgICAgIDxkaXY+VmlkZW8gRGVzY3JpcHRpb248L2Rpdj4gey8qcHJvcC5vYmplY3QuZGVzY3JpcHRpb24/ICovfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvUGxheWVyLnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IFZpZGVvUGxheWVyO1xuIl19