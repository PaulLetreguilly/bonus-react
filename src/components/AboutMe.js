const AboutMe = (props) => {
  return (
    <div className="AboutMe">
      <h2>{props.title}</h2>
      <img src={props.picture} alt="" />
      <p>{props.description}</p>
    </div>
  );
};
export default AboutMe;
