function Video({ video }) {
  return (
    <div>
<h1>{video.title} Juan de mecanico</h1>
Me da hmbre
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
    </div>
  );
}
export default Video