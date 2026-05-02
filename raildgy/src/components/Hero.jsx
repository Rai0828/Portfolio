import profileImg from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={profileImg} alt="Profile" className="profile-img" />

      <h1>Hi, I'm Railei Dugayo</h1>
      <h2>Aspiring Software Developer</h2>
      <p>
        I am a 4th year <b>BSCS</b> student from the University of Caloocan City
      </p>
      <p>I build systems and web applications.</p>
    </section>
  );
}

export default Hero;
