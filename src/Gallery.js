function Profile(){
    return(
      <img height="200px"
      width="200px"
      src="https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg" alt="instagram"/>
    )
  }
  export default function Gallery(){
    return(
      <section>
        <h1>Instagram</h1>
        <Profile/>
        <Profile/>
        <Profile/>
      </section>
    )
  }