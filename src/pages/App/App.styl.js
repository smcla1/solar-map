const style = () => ({
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  body: {
    margin: 0,
    background: "#000",
  },
  mapView: {
    height: "100vh",
    
  },
  controls: {
    opacity: "90%",
    height: "15vh",
    width: "50vw",
    position: "absolute",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

export default style;
